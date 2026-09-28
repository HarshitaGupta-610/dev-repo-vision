import { createFileRoute } from "@tanstack/react-router";
import { LensRepoApp } from "@/components/lensrepo/LensRepoApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LensRepo — Explore any Repo!" },
      { name: "description", content: "Explore, search, and understand the structure and architecture of any GitHub repository." },
      { property: "og:title", content: "LensRepo — Explore any Repo!" },
      { property: "og:description", content: "Explore, search, and understand the structure and architecture of any GitHub repository." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LensRepoApp,
});
