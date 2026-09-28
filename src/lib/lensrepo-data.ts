export type FileData = { path: string; language: string; content: string };
export type SearchResult = { path: string; line: number; snippet: string };

export const repositoryFiles: FileData[] = [
  {
    path: "src/auth/login.ts",
    language: "TypeScript",
    content: `import { authClient } from "../services/auth-client";
import type { Credentials, Session } from "./types";

export async function login(credentials: Credentials): Promise<Session> {
  const result = await authClient.signIn({
    email: credentials.email,
    password: credentials.password,
  });

  if (!result.session) {
    throw new Error("Authentication failed");
  }

  return result.session;
}

export async function logout(): Promise<void> {
  await authClient.signOut();
}`,
  },
  {
    path: "src/middleware/auth.ts",
    language: "TypeScript",
    content: `import type { RequestContext } from "../types";
import { verifySession } from "../services/auth-client";

export async function requireAuth(context: RequestContext) {
  const token = context.headers.get("authorization");
  const session = await verifySession(token);

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  return { userId: session.user.id };
}`,
  },
  {
    path: "src/routes/auth.ts",
    language: "TypeScript",
    content: `import { login } from "../auth/login";
import { validateCredentials } from "../auth/schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const credentials = validateCredentials(payload);
  const session = await login(credentials);

  return Response.json({ user: session.user });
}`,
  },
  {
    path: "src/services/api-client.ts",
    language: "TypeScript",
    content: `const API_BASE_URL = "/api";

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(API_BASE_URL + path, {
    ...init,
    headers: { "content-type": "application/json", ...init?.headers },
  });

  if (!response.ok) throw new Error("API request failed");
  return response.json() as Promise<T>;
}`,
  },
  {
    path: "src/db/connection.ts",
    language: "TypeScript",
    content: `import { createPool } from "@vercel/postgres";

export const database = createPool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
});

export async function checkConnection() {
  return database.sql\`SELECT 1 as healthy\`;
}`,
  },
  {
    path: "README.md",
    language: "Markdown",
    content: `# LensRepo\n\nRepository intelligence for engineering teams.\n\n## Development\n\nInstall dependencies and run the local development server.`,
  },
  {
    path: "package.json",
    language: "JSON",
    content: `{
  "name": "lensrepo",
  "version": "1.0.0",
  "scripts": { "dev": "next dev", "build": "next build" },
  "dependencies": { "next": "latest", "react": "latest", "typescript": "latest" }
}`,
  },
];

export const tree = [
  { name: "src", type: "folder", children: [
    { name: "auth", type: "folder", children: [{ name: "login.ts", type: "file", path: "src/auth/login.ts" }] },
    { name: "db", type: "folder", children: [{ name: "connection.ts", type: "file", path: "src/db/connection.ts" }] },
    { name: "middleware", type: "folder", children: [{ name: "auth.ts", type: "file", path: "src/middleware/auth.ts" }] },
    { name: "routes", type: "folder", children: [{ name: "auth.ts", type: "file", path: "src/routes/auth.ts" }] },
    { name: "services", type: "folder", children: [{ name: "api-client.ts", type: "file", path: "src/services/api-client.ts" }] },
  ]},
  { name: "public", type: "folder", children: [] },
  { name: "README.md", type: "file", path: "README.md" },
  { name: "package.json", type: "file", path: "package.json" },
  { name: "tsconfig.json", type: "file", path: "tsconfig.json" },
] as const;

export async function analyzeRepository(url: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const parts = url.replace(/\/$/, "").split("/");
  return { owner: parts.at(-2) || "HarshitaGupta", name: parts.at(-1) || "lensrepo" };
}

export async function searchRepository(query: string): Promise<SearchResult[]> {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return repositoryFiles.flatMap((file) => {
    const rows = file.content.split("\n");
    const hits = rows.flatMap((line, index) => line.toLowerCase().includes(needle) ? [{ path: file.path, line: index + 1, snippet: line.trim() }] : []);
    if (file.path.toLowerCase().includes(needle) && hits.length === 0) return [{ path: file.path, line: 1, snippet: rows[0] || file.path }];
    return hits;
  }).slice(0, 8);
}

export async function getRepositoryFile(path: string) {
  return repositoryFiles.find((file) => file.path === path) ?? repositoryFiles[0];
}

export async function askLensAgent(question: string) {
  await new Promise((resolve) => setTimeout(resolve, 550));
  const q = question.toLowerCase();
  if (q.includes("database")) return { text: "The database pool is initialized once in the data-layer connection module. Server features import this shared pool rather than creating new connections.", sources: ["src/db/connection.ts"] };
  if (q.includes("architecture")) return { text: "The repository separates route handlers, domain authentication, middleware, service clients, and database access. Requests enter through routes, pass through validation and middleware, then call domain services.", sources: ["src/routes/auth.ts", "src/middleware/auth.ts", "src/services/api-client.ts"] };
  return { text: "Authentication begins in the login route, validates the request, and delegates session creation to the auth module. Protected requests pass through authentication middleware before reaching application logic.", sources: ["src/routes/auth.ts", "src/auth/login.ts", "src/middleware/auth.ts"] };
}

export async function generateReport() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return true;
}
