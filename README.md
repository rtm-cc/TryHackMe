# 🥷 TryHackMe Walkthroughs

This repository contains **TryHackMe Walkthroughs**, powered by **[Zensical](https://zensical.org/)** (the modern successor to *Material for MkDocs*) for a fast, pure-Markdown documentation experience with automatic navigation discovery and instant offline search.

> ℹ️ *Note: The previous Astro Starlight configuration is archived on the [`archive/astro`](https://github.com/rtm-cc/TryHackMe/tree/archive/astro) branch.*

---

## 🌐 Live Site

The site is automatically built and deployed to GitHub Pages via GitHub Actions:
👉 **[https://rtm-cc.github.io/TryHackMe/](https://rtm-cc.github.io/TryHackMe/)**

---

## ✍️ How to Add Walkthroughs & Structure Notes

Adding new walkthroughs is 100% automated — no sidebar or configuration files to maintain!

### 1. Basic Flow
1. Create a `.md` file inside `docs/` (e.g. `docs/my-path/my-room.md`).
2. Add a `# Title` at the top of the file (or YAML frontmatter `title: "My Room"`).
3. Save and commit. **Zensical automatically discovers the new file, creates the sidebar entry, and indexes it into full-text search.**

---

### 2. Controlling Order in a Logical Flow

Because filesystems sort alphabetically (`1`, `10`, `11`, `2`...), use **zero-padded numeric prefixes** (`01-`, `02-`) whenever you want files to follow a specific chronological or logical sequence:

```text
docs/my-topic/
├── index.md             # Section introduction (links to the folder title)
├── 01-hello.md          # Step 1
├── 02-are-you-okay.md   # Step 2
└── 03-deep-dive.md      # Step 3
```

#### ✨ How Zensical Displays It:
* `index.md` automatically becomes the section landing page at the top.
* In `01-hello.md`, write `# Hello` at the top.
* In `02-are-you-okay.md`, write `# Are you okay?` at the top.

**Result in the sidebar:**
```text
📁 My Topic              <-- links directly to index.md
   ├── Hello             <-- from 01-hello.md (numbers are hidden!)
   ├── Are you okay?     <-- from 02-are-you-okay.md
   └── Deep Dive         <-- from 03-deep-dive.md
```

> 💡 **Tip:** Zensical always uses your `# Heading` or `title: "..."` property for the sidebar label, completely hiding the `01-` or `02-` filename prefix. Zero-padding ensures correct numerical ordering (`01` through `12`).

---

## 🚀 Running Locally

To run the documentation site on your local machine:

### With `uv` (Recommended - Zero Installation)
```bash
uv tool run zensical serve -a 127.0.0.1:4321
```

### With `npm`
```bash
npm run dev
```

### With `pip`
```bash
pip install zensical
zensical serve -a 127.0.0.1:4321
```

Open **[http://localhost:4321/TryHackMe/](http://localhost:4321/TryHackMe/)** in your browser.

For complete details, please refer to [RUN_LOCALLY.md](RUN_LOCALLY.md).

---

## 🛠️ Built With

- **[Zensical](https://zensical.org/)** - Modern static site generator for technical documentation.
- **[GitHub Pages](https://pages.github.com/)** - Automated continuous deployment via GitHub Actions.
