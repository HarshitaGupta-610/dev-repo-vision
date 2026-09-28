# LensRepo Frontend

## Goal
Build a polished, frontend-only developer workspace that demonstrates the complete LensRepo journey from repository URL entry through analysis, exploration, search, reporting, and source-aware Lens Agent interactions.

## Experience
- Replace the placeholder with a compact landing screen using the exact “Explore any Repo!” tagline and a GitHub URL input with validation feedback.
- Transition through believable repository-analysis stages without fake percentages.
- Open a responsive IDE-like workspace with a compact repository header and four focused modes: Explore, Find, Report, and Lens Agent.
- Make the repository tree expandable, files selectable, code copyable, search results actionable, report generation stateful, and Lens Agent suggestions interactive.
- Use representative local demo repository data so every interaction works immediately; backend-ready functions will remain cleanly separated for later integration.

## Visual Direction
- Use the required deep navy, cyan, pink, light cyan, and dark teal palette through semantic design tokens.
- Create a restrained developer-workstation aesthetic with thin separators, dense typography, faint technical grid texture, and fast purposeful motion.
- Use Material Symbols and a GitHub mark where appropriate, with JetBrains Mono for code.
- Create a small, legible magnifying-glass favicon matching the LensRepo identity.

## Responsive Behavior
- Prioritize the three-pane desktop workspace.
- On smaller screens, present the repository tree as a drawer, search as a dedicated view, and Lens Agent as a full-screen panel.

## Technical Details
- Keep the existing TanStack Start architecture while implementing the requested product behavior in React and TypeScript.
- Split reusable workspace sections into focused components and repository/demo logic into a separate data module.
- Add route-specific metadata for LensRepo and verify the central user journey, desktop layout, and mobile layout in the live preview.
