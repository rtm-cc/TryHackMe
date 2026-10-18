# 🥷 TryHackMe Walkthroughs

This repository contains **TryHackMe Walkthroughs**, powered by **[Zensical](https://zensical.org/)** (the modern successor to *Material for MkDocs*) for a fast, pure-Markdown documentation experience with automatic navigation discovery and instant offline search.

> ℹ️ *Note: The previous Astro Starlight configuration is archived on the [`archive/astro`](https://github.com/rtm-cc/TryHackMe/tree/archive/astro) branch.*

---

## 🌐 Live Site

The site is automatically built and deployed to GitHub Pages via GitHub Actions:
👉 **[https://rtm-cc.github.io/TryHackMe/](https://rtm-cc.github.io/TryHackMe/)**

---

## ✍️ How to Add Walkthroughs

Adding new walkthroughs is 100% automated:

1. Create a `.md` file inside `docs/` (e.g. `docs/extra/advent-of-cyber-2022/day-13.md`).
2. Add a `# Title` at the top of the file.
3. Save and commit. **Zensical automatically discovers the new file, creates the sidebar entry, and indexes it into full-text search.** No manual index or configuration editing is needed.

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
