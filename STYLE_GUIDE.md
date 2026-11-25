# Writing Guidelines

Conventions for writing and updating documentation on [help.pikapods.com](https://help.pikapods.com).

## Brand & Domains

- Write **PikaPods** in plain text — never italicize it (`*PikaPods*` or `_PikaPods_`).
- Shared pod domains use `.pikapod.net` (**singular**), e.g. `https://your-pod.pikapod.net`. Never use `.pikapods.net`.
- When referring users to sign up, link directly to [pikapods.com/register](https://www.pikapods.com/register).

## UI Labels & Terminology

Always match the exact labels used in the PikaPods web interface:

- **Pod settings panel**: `*⚙️ Edit Pod Settings*` (not *Pod Settings* or *Edit Pod*).
- **Pod settings tabs**: *Basics*, *Env Vars* (not `ENV VARS`), *Resources*, *Domain*, *Firewall*, *Files* (not *SFTP*), *Database*, *Backups*.
- **Pod actions (`More` menu)**: `*More > Pause Pod*` / `*More > Resume Pod*` (not *Stop*/*Start* or *Pause*/*Resume*), `*More > Restart*` (not *Restart Pod*), `*More > Backup*`, `*More > Show Logs*`, `*More > Delete*`.
- **Pod card links**: *View Logs*, *FAQ* (not *See FAQ*), *Report Issue*, *Open Pod*.
- **Account tabs**: *Account > Usage & Limits* (contains *Account Limits*), *Account > Billing*, *Account > Settings* (contains *Remove Account*, URL `/account?tab=settings`).
- **Firewall**: Refer to the built-in **Add My IP** button rather than third-party IP lookup sites.

## Headings & Structure

- Use **Title Case** for all headings (`## Sending Emails`, `### Export Monitors`).
- Do not leave empty headings (e.g. a `##` immediately followed by another `##`).
- Every app help page under `src/content/docs/apps/` should start with a short intro paragraph that briefly describes the app, links to `https://www.pikapods.com/apps/<slug>`, and links to the official upstream documentation.
- When adding a new app help page, also add it to `src/content/docs/apps/index.md`.

## Formatting & Components

- **Callouts**: Use Starlight admonitions (`:::note`, `:::tip`, `:::caution`) instead of plain Markdown `>` blockquotes for notes, tips, and warnings.
- **Code blocks**: Use fenced code blocks (```` ``` ````) with a language tag for multi-line snippets, terminal commands, SQL queries, and SSH fingerprints. Make sure commands are complete and copy-pasteable (for example, `restic restore <id> --target ./restore`).
- **Images**: Always include descriptive `alt` text, including on raw `<img>` tags. Reference assets with absolute paths (e.g. `/manage/s3-setup.png`).
- **Paths & files**: When showing a config snippet, always specify the exact file path where it belongs (e.g. `config/config.php`).

## Verification

Before committing changes, run `pnpm build` to verify the site builds cleanly and all internal links and anchors pass `starlight-links-validator`.
