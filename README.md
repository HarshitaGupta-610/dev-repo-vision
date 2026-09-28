# LensRepo Explorer

Build the complete frontend for a developer product called "LensRepo".

==================================================
PRODUCT
==================================================

Name:
LensRepo

Tagline:
"Explore any Repo!"

LensRepo is a developer-focused GitHub repository intelligence
tool.

The core idea is extremely simple:

Paste a GitHub repository
        ↓
Analyze it
        ↓
Explore the repository
        ↓
Find files, folders and code
        ↓
Generate a useful repository report
        ↓
Ask Lens Agent questions about the repository

The product should feel like a real developer tool that could
actually be shipped and used by developers.

It must NOT look like another generic AI SaaS website.

==================================================
MOST IMPORTANT DESIGN DIRECTION
==================================================

Create something visually distinctive and genuinely engaging.

I do NOT want the usual "vibe-coded" website appearance.

Avoid the common pattern:

Huge heading
+
gradient background
+
glowing blobs
+
three glass cards
+
floating animations
+
AI sparkle graphics
+
huge rounded buttons
+
generic dashboard
+
random statistics

Do NOT make LensRepo look like that.

Instead, make it feel like a carefully designed developer product.

Think:

GitHub
+
VS Code
+
developer workstation
+
modern technical interface
+
subtle futuristic details

But do NOT simply copy GitHub or VS Code.

LensRepo must have its own visual identity.

The interface should make a developer want to interact with it.

The engagement should come from:

- thoughtful interactions
- useful transitions
- responsive repository exploration
- interesting code visualization
- subtle motion
- strong typography
- excellent spacing
- visual feedback
- intelligent use of neon accents

NOT from excessive decoration.

==================================================
BRAND ICON
==================================================

The primary LensRepo icon should be a:

MAGNIFYING GLASS

Use a Google Material Symbols / Google Material Icon
magnifying-glass icon as the main product symbol.

Preferred icon:

search

The magnifying glass represents:

exploration
inspection
discovery
searching a codebase

This icon should appear:

- beside the LensRepo wordmark where appropriate
- as the main product visual on the landing page
- in the favicon
- in loading/analysis states where appropriate
- in relevant navigation

Create the favicon using the LensRepo magnifying-glass identity.

The favicon should work clearly at very small sizes.

Do not create an unrelated logo.

Do not use an AI brain icon.

Do not use a robot icon.

Do not use a sparkle icon as the primary brand symbol.

==================================================
ICONS
==================================================

NO EMOJIS anywhere.

Use proper icons.

Use:

Google Material Symbols / Material Icons

and

GitHub icons / GitHub mark

for GitHub-related UI.

Use icons such as:

search
folder
folder_open
description
code
terminal
analytics
download
chat
arrow_forward
open_in_new
content_copy
expand_more
chevron_right
close
menu
link
history

Use the GitHub icon when showing:

GitHub repository
Open on GitHub
GitHub URL
repository source
GitHub-related navigation

Icons should be clean and restrained.

Do not use giant icons as decoration.

==================================================
COLOR SYSTEM
==================================================

Use this exact palette:

Neon Pink:
#ff2a6d

Light Cyan:
#d1f7ff

Bright Cyan:
#05d9e8

Dark Teal:
#005678

Deep Navy:
#01012b

Primary background:

#01012b

Use very dark navy shades for surfaces.

Use:

#05d9e8

for:

- active states
- focused inputs
- primary links
- selected files
- important interactive elements
- analysis progress
- subtle highlights

Use:

#ff2a6d

sparingly for:

- important actions
- secondary accent
- warnings
- selected states
- subtle visual contrast

Use:

#d1f7ff

for high-contrast text.

Use:

#005678

for:

- borders
- separators
- secondary surfaces
- muted technical elements

IMPORTANT:

Do NOT make everything neon.

The majority of the interface should remain dark.

Neon should feel like instrumentation inside a serious developer
environment.

==================================================
TYPOGRAPHY
==================================================

Use:

Geist
or
Inter
or
IBM Plex Sans

For code:

JetBrains Mono

Do not use decorative fonts.

Do not use enormous typography.

The hierarchy should come from:

size
weight
spacing
contrast

rather than oversized text.

==================================================
FAVICON
==================================================

Create a proper LensRepo favicon.

Use:

Magnifying glass icon
+
LensRepo color identity

The favicon should primarily use:

#05d9e8
and/or
#ff2a6d

against:

#01012b

It must remain recognizable when displayed at 16x16.

==================================================
LANDING PAGE
==================================================

The landing page should be simple but memorable.

Do NOT create a giant marketing website.

The first viewport should immediately explain what LensRepo does.

Navbar:

LEFT:

[ magnifying glass icon ] LensRepo

RIGHT:

GitHub
Documentation

Use the GitHub icon beside GitHub.

Keep the navbar compact.

No unnecessary navigation items.

==================================================
HERO
==================================================

Main heading:

"Explore any Repo!"

This is the exact tagline.

Do not change the wording.

Supporting copy:

"Understand the structure, code, and architecture of any GitHub
repository from one place."

Keep the copy short.

Then immediately present the main interaction.

Repository input:

------------------------------------------------------------

GitHub repository URL

[  https://github.com/username/repository              ]

                                           Analyze →

------------------------------------------------------------

The input should be the central interaction of the page.

The user should instantly understand:

"I paste my repository here."

One primary CTA:

Analyze

Do not add multiple competing buttons.

==================================================
LANDING PAGE INTERACTION
==================================================

Make the landing page engaging through interaction rather than
decoration.

Examples:

When the user focuses the repository input:

- border transitions to cyan
- subtle cyan glow appears
- magnifying-glass icon becomes active

When typing a GitHub URL:

- detect whether it resembles a GitHub repository URL
- provide subtle visual feedback

When hovering Analyze:

- arrow shifts slightly
- border becomes brighter
- button responds smoothly

When Analyze is clicked:

- magnifying-glass icon transitions into an analysis state
- page transitions smoothly into repository analysis

The interaction should feel satisfying.

Do not make it flashy.

==================================================
BACKGROUND
==================================================

Use:

Deep Navy #01012b

Add a subtle technical background.

Possible elements:

- extremely faint grid
- subtle repository/code-line texture
- faint technical lines
- very subtle noise

The background should have depth.

But:

NO giant gradients.

NO glowing blobs.

NO floating 3D objects.

NO animated particles.

NO excessive blur.

NO excessive glassmorphism.

NO random decorative shapes.

==================================================
ANIMATION PHILOSOPHY
==================================================

Animations ARE allowed.

In fact, use them to make the product feel alive.

But every animation must have a reason.

Good animations:

- button hover
- icon movement
- input focus
- page transitions
- repository tree expansion
- file selection
- search results appearing
- analysis progress
- report generation state
- agent response appearance
- panel opening
- subtle code highlighting

Use fast transitions.

Approximately:

150ms–300ms

Some larger transitions can use:

300ms–500ms

Avoid:

- bouncing UI
- infinite floating animations
- excessive parallax
- cursor-following effects
- flashy page transitions
- spinning decorative elements

The website should feel fast.

==================================================
ANALYSIS EXPERIENCE
==================================================

After the user enters a GitHub repository and clicks Analyze,
transition into an analysis screen.

Show an engaging but technically believable process.

Example:

ANALYZING REPOSITORY

[GitHub icon]

Repository connected

✓ Repository structure discovered

✓ Files indexed

✓ Code analyzed

○ Building repository map

○ Preparing Lens Agent

Use smooth transitions as each stage completes.

The magnifying-glass icon can subtly animate during analysis.

Do NOT use:

"AI magic happening..."

Do NOT show meaningless percentage counters.

The progress should communicate actual technical operations.

==================================================
REPOSITORY WORKSPACE
==================================================

Once analysis completes, LensRepo becomes a developer workspace.

This is the most important part of the product.

Do NOT create a generic SaaS dashboard.

Do NOT make:

[ Card ] [ Card ] [ Card ]

[ Card ] [ Card ] [ Card ]

[ AI Card ]

[ Statistics Card ]

Instead create something closer to:

GitHub + VS Code + repository intelligence tool.

Structure:

---------------------------------------------------------------
LensRepo   owner/repository                   GitHub icon
---------------------------------------------------------------

LEFT                 CENTER                    RIGHT

Repository Tree      Main Content              Lens Agent
                     / Search / Report
---------------------------------------------------------------

Use thin borders.

Use dark surfaces.

Use compact controls.

Use intentional whitespace.

==================================================
REPOSITORY HEADER
==================================================

Show:

Repository name

Owner / repository

GitHub icon

Open on GitHub

Primary language

File count

Analysis status

Example:

lensrepo

HarshitaGupta / lensrepo

TypeScript
142 files
Analyzed

[ GitHub icon ] Open on GitHub

Keep this compact.

==================================================
CORE PRODUCT FEATURES
==================================================

Keep the product focused.

Only four primary capabilities:

1. Explore
2. Find
3. Report
4. Lens Agent

Do not clutter the UI with unnecessary features.

==================================================
EXPLORE
==================================================

The repository explorer should feel like a lightweight IDE.

Example:

PROJECT

src/
    app/
    components/
    lib/
    services/
    api/

public/

package.json
README.md
tsconfig.json

Use:

folder
folder_open
description
code

icons.

Clicking a folder expands it.

Clicking a file opens it.

Use subtle expansion animations.

Selected files should have a restrained cyan highlight.

Do not put every file inside a rounded card.

The file tree itself is the interface.

==================================================
FILE VIEWER
==================================================

The code viewer should resemble a lightweight IDE.

Show:

file path
language
line numbers
syntax highlighting

Example header:

src/auth/login.ts

[ Copy ] [ GitHub icon ]

Use JetBrains Mono.

Use subtle syntax colors that work with the dark palette.

Allow:

file selection
code scrolling
copy action
GitHub link

Do not make the code viewer look like a generic content card.

==================================================
FIND
==================================================

Provide a focused repository search.

Users should be able to search:

file names
folder names
symbols
code concepts

Example:

Find in repository

[ search authentication                     ]

Results:

src/auth/login.ts
src/middleware/auth.ts
src/routes/auth.ts

Each result should show:

file path
line number
small relevant snippet

Make search results appear smoothly.

Allow clicking a result to open the relevant file.

The experience should feel like developer search.

==================================================
REPORT
==================================================

One of LensRepo's major capabilities:

Generate Repository Report

Button:

[ Generate Report ]

Use a download/document icon.

The report should contain useful engineering information:

Repository Overview

Architecture

Technology Stack

Important Directories

Entry Points

API Structure

Database / Data Layer

Authentication

External Services

Potential Complexity Areas

Development Notes

Then:

[ Download PDF ]

The report should feel like a genuine engineering artifact.

It should be something a developer could send to another developer
who needs to understand an unfamiliar repository.

==================================================
LENS AGENT
==================================================

The AI feature is called:

Lens Agent

Do not call it:

AI Magic
AI Copilot
Smart Assistant
AI Assistant

Lens Agent should feel like a repository-aware engineering tool.

Users can ask:

"Where is authentication implemented?"

"How does the frontend communicate with the backend?"

"Where is the database connection initialized?"

"What happens when a user logs in?"

"Which files handle API requests?"

"Explain the flow from login form to database."

The response should reference repository files.

Example:

LENS AGENT

Authentication begins in the login route and is passed through
the authentication middleware.

Sources:

src/routes/auth.ts
src/controllers/authController.ts
src/middleware/auth.ts

[ Open file ]

The important point:

Lens Agent should NOT look like ChatGPT embedded in a website.

It should look like a developer tool that understands the repository.

==================================================
LENS AGENT UI
==================================================

Keep the interface compact.

Header:

LENS AGENT

Ask questions about this repository.

Conversation underneath.

Input:

------------------------------------------------
Ask about this repository...                  →
------------------------------------------------

Use Material icons.

Suggested questions:

Where does authentication happen?

Explain the project architecture.

Find the database configuration.

These should disappear once the conversation begins.

Avoid giant chat bubbles.

Use compact technical messages.

==================================================
GITHUB INTEGRATION VISUAL LANGUAGE
==================================================

Use GitHub icons consistently.

Examples:

GitHub repository URL
GitHub repository header
Open on GitHub
GitHub source
repository ownership

Use the GitHub mark where appropriate.

Do not overuse it.

Do not copy GitHub's entire UI.

LensRepo should feel familiar to developers while maintaining
its own identity.

==================================================
RESPONSIVE DESIGN
==================================================

Desktop is the primary experience.

Tablet and mobile must still work properly.

On mobile:

Repository tree becomes a drawer.

Main content remains primary.

Lens Agent becomes a full-screen panel.

Search becomes a dedicated view.

Do not simply shrink the desktop UI.

==================================================
COMPONENT ARCHITECTURE
==================================================

Use clean reusable components.

Suggested structure:

components/
    Navbar
    LensRepoLogo
    RepoInput
    AnalyzeButton
    AnalysisProgress
    RepoHeader
    RepoTree
    FileViewer
    SearchPanel
    SearchResult
    ReportPanel
    AgentPanel
    StatusIndicator
    IconButton

Do not over-componentize.

Do not create hundreds of tiny components.

==================================================
TECH STACK
==================================================

Use:

Next.js
TypeScript
Tailwind CSS
shadcn/ui where appropriate
Google Material Symbols / Material Icons
GitHub icons
JetBrains Mono

Use proper routing.

Use clean TypeScript types.

Use reusable components.

Keep UI logic separate from application/data logic.

Prepare functions such as:

analyzeRepository()
searchRepository()
getRepositoryFile()
askLensAgent()
generateReport()

so they can connect cleanly to the backend.

==================================================
IMPORTANT: VISUAL QUALITY
==================================================

The final interface must NOT look like it was generated from a
generic AI SaaS template.

Avoid:

- excessive cards
- excessive rounded corners
- excessive gradients
- excessive neon
- glassmorphism everywhere
- giant hero text
- fake statistics
- fake testimonials
- fake customers
- fake activity feeds
- decorative AI graphics
- emoji
- unnecessary sections
- unnecessary features

Do not add visual elements just because there is empty space.

Whitespace is intentional.

Borders, typography, spacing and color should create the hierarchy.

==================================================
ENGAGEMENT
==================================================

The website should be attractive and engaging from the user's
perspective.

But engagement must come from using the product.

Examples:

The magnifying glass responds when interacting with the repository
input.

The Analyze button responds immediately.

The analysis process feels alive.

Folders expand smoothly.

Files highlight when selected.

Search results appear naturally.

Code sections can subtly highlight relevant lines.

Report generation has a clear state.

Lens Agent responses appear naturally.

The interface should make the user curious to explore their
repository.

The user should feel:

"I want to click around and understand this repository."

That is the goal.

==================================================
RESUME-LEVEL QUALITY
==================================================

This should look like a serious portfolio/resume project.

A developer should be able to open LensRepo and immediately
understand its value.

The product should communicate:

GitHub integration
repository indexing
code exploration
semantic search
repository analysis
source-aware AI
engineering reports

Do not exaggerate what the product does.

Do not use fake numbers or fake claims.

==================================================
FINAL USER JOURNEY
==================================================

The final experience should be:

                LensRepo

            Explore any Repo!

                    ↓

       Paste GitHub repository

                    ↓

                 Analyze

                    ↓

          Repository analysis

                    ↓

        ┌─────────────────────┐
        │ Explore              │
        │ Find                 │
        │ Report               │
        │ Lens Agent           │
        └─────────────────────┘

                    ↓

       Understand the repository

The experience should be simple enough to understand immediately,
but polished enough that a developer would genuinely want to use it.

==================================================
FINAL DESIGN TEST
==================================================

Before finishing, inspect every screen.

Ask:

"Does this feel like a real developer product?"

"Would a developer actually want to use this?"

"Is this visually different from the usual AI-generated website?"

"Are the animations helping the experience?"

"Is every element useful?"

"Could anything be removed without hurting the product?"

If something feels decorative rather than useful, remove it.

If something looks like a generic AI SaaS pattern, redesign it.

If there are too many cards, simplify the layout.

If there is too much neon, reduce it.

If an animation does not communicate something, remove it.

The final result should feel:

technical
minimal
interactive
distinctive
useful
premium
fast
credible

NOT:

generic
flashy
over-designed
template-like
vibe-coded

The goal is not to make the website look impressive.

The goal is to make LensRepo itself feel impressive.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3639de69-a1b3-4b2f-acd4-439626a07207).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
