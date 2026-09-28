import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Github, ExternalLink, Check, Circle, Copy, Menu, X, Download, ChevronRight, Folder, FolderOpen, FileCode2, FileText, Search, PanelRightOpen, ArrowRight, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analyzeRepository, askLensAgent, generateReport, getRepositoryFile, repositoryFiles, searchRepository, tree, type FileData, type SearchResult } from "@/lib/lensrepo-data";

type Stage = "landing" | "analyzing" | "workspace";
type WorkspaceView = "explore" | "find" | "report";
type TreeNode = { name: string; type: string; path?: string; children?: readonly TreeNode[] };
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center border border-primary/50 bg-primary/10 text-primary"><Search size={17} strokeWidth={2.2} /></span><span className={compact ? "text-sm font-semibold" : "text-base font-semibold"}>Lens<span className="text-primary">Repo</span></span></div>;
}

function Landing({ onAnalyze }: { onAnalyze: (url: string) => void }) {
  const [url, setUrl] = useState("");
  const [focused, setFocused] = useState(false);
  const valid = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(url.trim());
  function submit(event: FormEvent) { event.preventDefault(); if (valid) onAnalyze(url.trim()); }
  return <main className="technical-grid min-h-dvh overflow-hidden bg-background text-foreground">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-border/70 px-5 md:px-8">
      <Brand />
      <div className="flex items-center gap-1"><a href="https://github.com" target="_blank" rel="noreferrer" className="nav-link"><Github size={15} /> GitHub</a><a href="#documentation" className="nav-link hidden sm:inline-flex">Documentation</a></div>
    </nav>
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl content-center px-5 pb-20 pt-14 md:px-8">
      <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"><span className="h-px w-8 bg-primary" /> Repository intelligence</div>
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl md:text-6xl">Explore any Repo!</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">Understand the structure, code, and architecture of any GitHub repository from one place.</p>
          <form onSubmit={submit} className="mt-10 max-w-3xl">
            <label htmlFor="repo-url" className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">GitHub repository URL</label>
            <div className={`repo-input grid grid-cols-[auto_minmax(0,1fr)_auto] items-center border bg-surface transition-all duration-200 ${focused ? "border-primary shadow-instrument" : "border-border"}`}>
              <Github className={valid || focused ? "ml-4 text-primary" : "ml-4 text-muted-foreground"} size={19} />
              <input id="repo-url" value={url} onChange={(e) => setUrl(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder="https://github.com/username/repository" className="min-w-0 bg-transparent px-3 py-4 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60" aria-describedby="url-status" />
              <Button type="submit" disabled={!valid} className="group mr-1 h-11 px-5">Analyze <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></Button>
            </div>
            <div id="url-status" className="mt-2 h-5 font-mono text-xs">{url && <span className={valid ? "text-primary" : "text-accent"}>{valid ? "Repository URL recognized" : "Enter a complete github.com repository URL"}</span>}</div>
          </form>
        </div>
        <div className="hidden border-l border-border pl-8 lg:block">
          <div className={`scope-visual relative mx-auto size-52 ${focused ? "is-active" : ""}`} aria-hidden="true">
            <div className="absolute inset-0 grid place-items-center"><Search size={88} strokeWidth={1} className="text-primary" /></div>
            <span className="scope-line absolute left-0 right-0 top-1/2 h-px bg-primary/40" />
            <span className="absolute bottom-1 left-1/2 font-mono text-[10px] text-muted-foreground">LR / SCAN</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex"><span className="size-1.5 bg-primary" /> Index structure <span className="text-border">/</span> Trace code <span className="text-border">/</span> Explain systems</div>
    </section>
  </main>;
}

const analysisSteps = ["Repository connected", "Repository structure discovered", "Files indexed", "Code analyzed", "Building repository map", "Preparing Lens Agent"];
function Analysis({ repo, onComplete }: { repo: string; onComplete: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => { let active = true; (async () => { for (let i = 1; i <= analysisSteps.length; i += 1) { await wait(i === 1 ? 450 : 520); if (!active) return; setStep(i); } await wait(450); if (active) onComplete(); })(); return () => { active = false; }; }, [onComplete]);
  return <main className="technical-grid flex min-h-dvh items-center justify-center bg-background px-5 text-foreground"><div className="w-full max-w-xl border border-border bg-surface">
    <div className="flex items-center justify-between border-b border-border px-5 py-4"><Brand compact /><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">Analysis session</span></div>
    <div className="p-6 sm:p-9"><div className="flex items-center gap-4"><div className="scan-icon grid size-14 place-items-center border border-primary/60 bg-primary/10 text-primary"><Search size={26} /></div><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Analyzing repository</p><p className="mt-1 truncate font-mono text-sm text-muted-foreground">{repo}</p></div></div>
    <div className="mt-8 border-t border-border">{analysisSteps.map((label, index) => { const complete = index < step; const current = index === step; return <div key={label} className="grid grid-cols-[24px_1fr_auto] items-center gap-3 border-b border-border/70 py-3.5 text-sm"><span className={complete ? "text-primary" : current ? "text-accent" : "text-muted-foreground/50"}>{complete ? <Check size={16} /> : <Circle size={12} />}</span><span className={complete || current ? "text-foreground" : "text-muted-foreground"}>{label}</span><span className="font-mono text-[10px] uppercase text-muted-foreground">{complete ? "done" : current ? "running" : "queued"}</span></div>; })}</div></div>
  </div></main>;
}

function TreeItem({ node, depth, selected, onSelect }: { node: TreeNode; depth: number; selected: string; onSelect: (path: string) => void }) {
  const [open, setOpen] = useState(depth === 0 && node.name === "src");
  const folder = node.type === "folder";
  return <div><Button variant="ghost" size="sm" className={`tree-row w-full justify-start border-0 px-2 font-normal ${selected === node.path ? "bg-primary/10 text-primary" : ""}`} style={{ paddingLeft: `${8 + depth * 14}px` }} onClick={() => folder ? setOpen(!open) : node.path && onSelect(node.path)}>
    {folder ? <ChevronRight size={13} className={`shrink-0 transition-transform ${open ? "rotate-90" : ""}`} /> : <span className="w-[13px]" />}
    {folder ? (open ? <FolderOpen size={15} className="text-primary" /> : <Folder size={15} className="text-muted-foreground" />) : node.name.endsWith(".md") ? <FileText size={14} /> : <FileCode2 size={14} />}
    <span className="truncate">{node.name}</span>
  </Button>{folder && open && <div className="tree-children">{node.children?.map((child) => <TreeItem key={`${node.name}-${child.name}`} node={child} depth={depth + 1} selected={selected} onSelect={onSelect} />)}</div>}</div>;
}

function RepoTree({ selected, onSelect }: { selected: string; onSelect: (path: string) => void }) {
  return <aside className="h-full overflow-y-auto bg-sidebar"><div className="flex h-10 items-center justify-between border-b border-border px-3"><span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Project</span><span className="font-mono text-[10px] text-muted-foreground">142 files</span></div><div className="py-2">{tree.map((node) => <TreeItem key={node.name} node={node} depth={0} selected={selected} onSelect={onSelect} />)}</div></aside>;
}

function CodeViewer({ file, onCopy }: { file: FileData; onCopy: () => void }) {
  const lines = file.content.split("\n");
  const colorLine = (line: string) => {
    const parts = line.split(/(import|from|export|async|function|return|if|throw|new|await|const|type|Promise|Response|string|void)/g);
    return parts.map((part, i) => ["import","from","export","async","function","return","if","throw","new","await","const","type"].includes(part) ? <span key={i} className="text-syntax-keyword">{part}</span> : ["Promise","Response","string","void"].includes(part) ? <span key={i} className="text-syntax-type">{part}</span> : <span key={i}>{part}</span>);
  };
  return <section className="flex h-full min-w-0 flex-col bg-code"><header className="grid h-11 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border bg-surface px-3"><div className="flex min-w-0 items-center gap-2"><FileCode2 size={14} className="shrink-0 text-primary" /><span className="truncate font-mono text-xs">{file.path}</span><span className="hidden border-l border-border pl-2 font-mono text-[10px] text-muted-foreground sm:inline">{file.language}</span></div><div className="flex"><Button variant="ghost" size="icon" onClick={onCopy} title="Copy file"><Copy size={14} /></Button><a href={`https://github.com/HarshitaGupta/lensrepo/blob/main/${file.path}`} target="_blank" rel="noreferrer" className="icon-link" title="Open file on GitHub"><Github size={14} /></a></div></header>
    <div className="min-h-0 flex-1 overflow-auto p-4 font-mono text-[12px] leading-6 sm:p-5 sm:text-[13px]">{lines.map((line, index) => <div key={`${index}-${line}`} className="grid grid-cols-[2rem_minmax(max-content,1fr)] text-code-foreground"><span className="select-none pr-4 text-right text-muted-foreground/45">{index + 1}</span><code className="whitespace-pre pr-8">{colorLine(line)}</code></div>)}</div>
    <footer className="flex h-7 items-center justify-end gap-4 border-t border-border px-3 font-mono text-[10px] text-muted-foreground"><span>UTF-8</span><span>LF</span><span>{file.language}</span></footer>
  </section>;
}

function SearchPanel({ onOpenFile }: { onOpenFile: (path: string) => void }) {
  const [query, setQuery] = useState("authentication"); const [results, setResults] = useState<SearchResult[]>([]);
  useEffect(() => { const timer = window.setTimeout(() => { void searchRepository(query).then(setResults); }, 160); return () => window.clearTimeout(timer); }, [query]);
  return <section className="h-full overflow-y-auto bg-code p-5 md:p-8"><div className="mx-auto max-w-3xl"><p className="section-label">Find in repository</p><div className="mt-4 flex items-center border border-border bg-surface focus-within:border-primary focus-within:shadow-instrument"><Search size={16} className="ml-3 text-primary" /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search files, symbols, or code concepts" className="w-full bg-transparent px-3 py-3 font-mono text-sm outline-none placeholder:text-muted-foreground" /></div><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{results.length} matches across indexed files</p><div className="mt-5 border-t border-border">{results.map((result, index) => <Button key={`${result.path}-${result.line}`} variant="ghost" className="search-result h-auto w-full justify-start border-x-0 border-t-0 border-b border-border/70 px-3 py-4 text-left" onClick={() => onOpenFile(result.path)}><div className="min-w-0"><div className="flex items-center gap-2 font-mono text-xs text-primary"><FileCode2 size={14} /><span className="truncate">{result.path}</span><span className="text-muted-foreground">:{result.line}</span></div><p className="mt-2 truncate font-mono text-xs font-normal text-muted-foreground">{result.snippet}</p></div></Button>)}</div></div></section>;
}

const reportSections = [
  ["Repository Overview", "A TypeScript web application for repository intelligence and source-aware engineering workflows."],
  ["Architecture", "Route handlers delegate to domain services. Shared middleware handles request authentication and service clients isolate external calls."],
  ["Technology Stack", "TypeScript, React, Next.js, PostgreSQL, and server-side API handlers."],
  ["Important Directories", "src/routes · request entry points\nsrc/services · API and integration clients\nsrc/db · data access and connection lifecycle"],
  ["Entry Points", "src/routes/auth.ts exposes the primary authentication request handler."],
  ["API Structure", "API access is centralized in src/services/api-client.ts with typed responses and shared error handling."],
  ["Database / Data Layer", "A shared PostgreSQL pool is initialized in src/db/connection.ts."],
  ["Authentication", "Login is implemented in src/auth/login.ts and enforced by src/middleware/auth.ts."],
  ["External Services", "Authentication and database providers are isolated behind service modules."],
  ["Potential Complexity Areas", "Session lifecycle, authorization boundaries, and database connection limits require careful testing."],
  ["Development Notes", "Keep route handlers thin and add integration tests around authentication middleware."],
];
function ReportPanel() {
  const [state, setState] = useState<"idle" | "generating" | "ready">("idle");
  async function create() { setState("generating"); await generateReport(); setState("ready"); }
  function download() { const text = reportSections.map(([h, b]) => `${h}\n${b}`).join("\n\n"); const blob = new Blob([text], { type: "text/plain" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "lensrepo-engineering-report.txt"; link.click(); URL.revokeObjectURL(link.href); }
  return <section className="h-full overflow-y-auto bg-code p-5 md:p-8"><div className="mx-auto max-w-3xl"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border pb-5"><div><p className="section-label">Engineering artifact</p><h2 className="mt-2 text-xl font-semibold">Repository Report</h2><p className="mt-2 text-sm text-muted-foreground">A concise technical handoff for this codebase.</p></div>{state === "ready" ? <Button onClick={download}><Download size={15} /> Download</Button> : <Button onClick={create} disabled={state === "generating"}><FileText size={15} /> {state === "generating" ? "Generating…" : "Generate Report"}</Button>}</div>{state === "idle" ? <div className="grid min-h-[22rem] place-items-center border-b border-border"><div className="max-w-sm text-center"><TerminalSquare className="mx-auto text-muted-foreground" size={28} /><p className="mt-4 text-sm text-foreground">Generate a source-backed engineering report.</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Architecture, entry points, data flow, integrations, and complexity areas will be organized for handoff.</p></div></div> : state === "generating" ? <div className="grid min-h-[22rem] place-items-center"><div className="font-mono text-xs text-primary"><span className="scan-cursor mr-2 inline-block size-2 bg-primary" /> Tracing repository systems…</div></div> : <article className="report-document py-6">{reportSections.map(([title, body], index) => <section key={title} className="grid gap-3 border-b border-border/70 py-5 sm:grid-cols-[2rem_12rem_1fr]"><span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2,"0")}</span><h3 className="text-sm font-semibold">{title}</h3><p className="whitespace-pre-line text-sm leading-6 text-muted-foreground">{body}</p></section>)}</article>}</div></section>;
}

function AgentPanel({ onOpenFile, onClose }: { onOpenFile: (path: string) => void; onClose?: () => void }) {
  const suggestions = ["Where does authentication happen?", "Explain the project architecture.", "Find the database configuration."];
  const [input, setInput] = useState(""); const [question, setQuestion] = useState(""); const [answer, setAnswer] = useState<{ text: string; sources: string[] } | null>(null); const [loading, setLoading] = useState(false);
  async function ask(value: string) { if (!value.trim()) return; setQuestion(value); setInput(""); setAnswer(null); setLoading(true); setAnswer(await askLensAgent(value)); setLoading(false); }
  return <aside className="flex h-full min-w-0 flex-col bg-sidebar"><header className="grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border px-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Lens Agent</p><p className="mt-0.5 text-[11px] text-muted-foreground">Ask about this repository.</p></div>{onClose && <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close Lens Agent"><X size={16} /></Button>}</header><div className="min-h-0 flex-1 overflow-y-auto p-4">{!question ? <div className="space-y-2"><p className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Suggested queries</p>{suggestions.map((item) => <Button key={item} variant="ghost" className="h-auto w-full justify-between border border-border px-3 py-3 text-left text-xs font-normal" onClick={() => void ask(item)}><span>{item}</span><ChevronRight size={14} /></Button>)}</div> : <div className="space-y-5"><div><p className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Query</p><p className="text-sm leading-6 text-foreground">{question}</p></div>{loading ? <div className="border-l border-primary py-2 pl-3 font-mono text-xs text-primary">Inspecting indexed sources…</div> : answer && <div className="agent-answer border-l-2 border-primary pl-3"><p className="text-sm leading-6 text-foreground">{answer.text}</p><p className="mt-5 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Sources</p><div className="mt-2">{answer.sources.map((source) => <Button key={source} variant="ghost" className="h-8 w-full justify-start border-0 px-1 font-mono text-[11px] text-primary" onClick={() => onOpenFile(source)}><FileCode2 size={13} /> {source}</Button>)}</div></div>}</div>}</div><form className="border-t border-border p-3" onSubmit={(e) => { e.preventDefault(); void ask(input); }}><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center border border-border bg-code focus-within:border-primary"><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about this repository..." className="min-w-0 bg-transparent px-3 py-3 text-xs outline-none placeholder:text-muted-foreground/70" /><Button type="submit" size="icon" variant="ghost" disabled={!input.trim()} aria-label="Ask Lens Agent"><ArrowRight size={15} /></Button></div></form></aside>;
}

function Workspace({ owner, name, repoUrl }: { owner: string; name: string; repoUrl: string }) {
  const [view, setView] = useState<WorkspaceView>("explore"); const [selectedPath, setSelectedPath] = useState("src/auth/login.ts"); const [file, setFile] = useState(repositoryFiles[0]); const [treeOpen, setTreeOpen] = useState(false); const [agentOpen, setAgentOpen] = useState(false); const [copied, setCopied] = useState(false);
  function openFile(path: string) { void getRepositoryFile(path).then((next) => { if (next) setFile(next); setSelectedPath(path); setView("explore"); setTreeOpen(false); }); }
  async function copy() { await navigator.clipboard.writeText(file?.content || ""); setCopied(true); window.setTimeout(() => setCopied(false), 1200); }
  const main = view === "explore" ? <CodeViewer file={file ?? repositoryFiles[0]} onCopy={() => void copy()} /> : view === "find" ? <SearchPanel onOpenFile={openFile} /> : <ReportPanel />;
  const tabs: Array<{ id: WorkspaceView | "agent"; label: string; icon: ReactNode }> = [{ id: "explore", label: "Explore", icon: <FileCode2 size={15} /> }, { id: "find", label: "Find", icon: <Search size={15} /> }, { id: "report", label: "Report", icon: <FileText size={15} /> }, { id: "agent", label: "Lens Agent", icon: <PanelRightOpen size={15} /> }];
  return <main className="flex h-dvh min-h-[42rem] flex-col overflow-hidden bg-background text-foreground"><header className="grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border bg-surface px-3 sm:px-4"><div className="flex min-w-0 items-center gap-3"><Brand compact /><span className="hidden h-5 w-px bg-border sm:block" /><div className="hidden min-w-0 sm:block"><p className="truncate text-xs font-medium">{name}</p><p className="truncate font-mono text-[9px] text-muted-foreground">{owner} / {name}</p></div></div><div className="flex items-center gap-2"><div className="hidden items-center gap-3 font-mono text-[10px] text-muted-foreground lg:flex"><span><i className="mr-1 inline-block size-1.5 bg-chart-2" />TypeScript</span><span>142 files</span><span className="text-primary"><Check size={11} className="inline" /> Analyzed</span></div><a href={repoUrl} target="_blank" rel="noreferrer" className="open-github"><Github size={14} /><span className="hidden sm:inline">Open on GitHub</span><ExternalLink size={12} /></a></div></header>
    <nav className="flex h-11 items-center border-b border-border bg-background px-2"><Button variant="ghost" size="icon" className="md:hidden" onClick={() => setTreeOpen(true)} aria-label="Open repository tree"><Menu size={16} /></Button>{tabs.map((tab) => <Button key={tab.id} variant="ghost" className={`workspace-tab h-11 border-x-0 border-t-0 px-3 ${tab.id !== "agent" && view === tab.id ? "is-active" : ""} ${tab.id === "agent" ? "ml-auto xl:hidden" : ""}`} onClick={() => tab.id === "agent" ? setAgentOpen(true) : setView(tab.id)}>{tab.icon}<span className={tab.id === "agent" ? "hidden sm:inline" : ""}>{tab.label}</span></Button>)}</nav>
    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[14rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_19rem]"><div className="hidden min-h-0 border-r border-border md:block"><RepoTree selected={selectedPath} onSelect={openFile} /></div><div className="min-h-0 min-w-0">{main}</div><div className="hidden min-h-0 border-l border-border xl:block"><AgentPanel onOpenFile={openFile} /></div></div>
    {treeOpen && <div className="fixed inset-0 z-40 bg-overlay md:hidden" onClick={() => setTreeOpen(false)}><div className="h-full w-[82%] max-w-xs border-r border-border" onClick={(e) => e.stopPropagation()}><div className="flex h-12 items-center justify-between border-b border-border bg-sidebar px-3"><span className="text-xs font-semibold">Repository</span><Button variant="ghost" size="icon" onClick={() => setTreeOpen(false)}><X size={16} /></Button></div><RepoTree selected={selectedPath} onSelect={openFile} /></div></div>}
    {agentOpen && <div className="fixed inset-0 z-50 xl:hidden"><AgentPanel onOpenFile={(path) => { openFile(path); setAgentOpen(false); }} onClose={() => setAgentOpen(false)} /></div>}{copied && <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 border border-primary bg-surface px-3 py-2 font-mono text-xs text-primary">File copied</div>}
  </main>;
}

export function LensRepoApp() {
  const [stage, setStage] = useState<Stage>("landing"); const [url, setUrl] = useState("https://github.com/HarshitaGupta/lensrepo"); const [repo, setRepo] = useState({ owner: "HarshitaGupta", name: "lensrepo" });
  const complete = useMemo(() => () => setStage("workspace"), []);
  async function start(value: string) { setUrl(value); setStage("analyzing"); setRepo(await analyzeRepository(value)); }
  if (stage === "landing") return <Landing onAnalyze={(value) => void start(value)} />;
  if (stage === "analyzing") return <Analysis repo={url} onComplete={complete} />;
  return <Workspace owner={repo.owner} name={repo.name} repoUrl={url} />;
}
