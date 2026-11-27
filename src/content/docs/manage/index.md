---
title: Manage Your Pods
description: Learn how to configure, back up, secure, and troubleshoot your pods on PikaPods.
sidebar:
  label: Overview
  order: 0
---

Every pod on PikaPods runs with sensible defaults out of the box, and you can adjust settings or access your data directly whenever you need to. Manage each pod from your **My Pods** dashboard using *⚙️ Edit Pod Settings* (for *Basics*, *Env Vars*, *Resources*, *Domain*, *Firewall*, *Files*, *Database*, and *Backups*) or the **More** menu (*More > Restart*, *More > Pause Pod*, *More > Resume Pod*, *More > Backup*, *More > Show Logs*, and *More > Delete*).

## Domains and Access

- **[Custom Domains](/manage/custom-domains)**: Serve a pod under your own domain or subdomain (such as `blog.yourdomain.com`) with automatic free SSL certificates, including setup tips for Cloudflare proxy and WAF rules.
- **[Firewall](/manage/firewall)**: Restrict access to your pod with an IPv4/IPv6 allowlist, one-click **Add My IP**, and optional Cloudflare edge IP support.

## Data and Backups

- **[Access Files (SFTP)](/manage/files)**: Upload, download, and edit persistent pod volume files over SFTP using clients such as WinSCP, Cyberduck, Rclone, or OpenSSH.
- **[Database Access](/manage/database)**: Browse, edit, import, or export your app's database with Adminer, plus guidance for SQLite and MongoDB apps.
- **[Backups](/manage/backup)**: Set up automatic nightly, encrypted, incremental backups to your own S3-compatible storage (such as Backblaze B2, iDrive e2, AWS S3, or Cloudflare R2) with Restic, or take a manual one-time backup.

## Troubleshooting

If a pod won't load, shows an error, or feels slow, see [Troubleshooting a Pod](/manage/debug). It walks through common symptoms (such as HTTP 502/504 or 500 errors), checking logs via *View Logs* or *More > Show Logs*, restarting or pausing and resuming a pod, and what details to include when contacting support.

## More Resources

- Looking for setup tips or fixes for a specific app? Check [App Help](/apps) (also linked via *FAQ* on each pod card).
- Want a guided walkthrough of popular apps? Browse [App Tutorials](/tutorials).
- Have questions about billing, updates, or email? See the [FAQ](/faq/account).
