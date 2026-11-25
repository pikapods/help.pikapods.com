---
title: Troubleshooting a Pod
description: Troubleshoot and debug your pod. Identify common symptoms, check logs, isolate configuration issues, or restart a pod to get it working again.
sidebar:
  label: Troubleshooting
  order: 5
---

If your pod won't load, shows an error, or feels slow, use the symptom table below to narrow down the cause, then follow the step-by-step checks.

## Quick Symptom Guide

| What You See | Likely Cause | What to Try First |
|---|---|---|
| **"Pod is Loading..."** (HTTP 502 / 504) | Pod is paused, still starting after an update or server reboot, or crashing on startup | Check if the pod is paused (*More > Resume Pod*). After a server reboot or large app update (e.g. Discourse), wait a few minutes. If it persists, [check the logs](#check-logs). |
| **HTTP 500 or blank page** | Wrong or missing *Env Vars*, full storage, broken config file, or a failed migration after a long pause | [Check the logs](#check-logs) and undo your last *Env Vars* or SFTP change. |
| **Pod is slow or timing out** | CPU or memory near the limit, heavy background jobs (indexing, imports), or a traffic spike | Check resource usage on your pod card and increase CPU or memory in *⚙️ Edit Pod Settings* > *Resources* if usage is consistently maxed out. |
| **Custom domain or SSL error** | DNS misconfiguration, Cloudflare SSL/TLS mode, or Cloudflare WAF blocking renewals | Test your pod's default `.pikapod.net` URL first. If that works, the pod is healthy — see [Custom Domains](/manage/custom-domains). |
| **Blocked or connection timed out from your network** | Your external IP changed while the firewall is active | Open *⚙️ Edit Pod Settings* > *Firewall* and click **Add My IP** (see [Firewall](/manage/firewall)). |

## Step-by-Step Troubleshooting

### Check Pod Status and Resources

Before changing settings or restarting, check the pod card on your **My Pods** dashboard:

- **Paused pod**: If the pod is paused, resume it via *More > Resume Pod*.
- **Full storage**: Check the disk usage bar on the pod card. Full storage can prevent apps from starting or cause 500 errors. Free up space via [SFTP](/manage/files) or increase storage under *⚙️ Edit Pod Settings* > *Resources*. Note that storing very large numbers of tiny files can also hit file-count limits even when disk space appears available.
- **Not enough memory or CPU**: Larger apps or heavy tasks (like photo indexing or large imports) can cause slowness or crashes if memory or CPU is maxed out. Increase resources under *⚙️ Edit Pod Settings* > *Resources*.

### Check Logs

In most cases, the exact error is in the pod logs.

:::tip
Check the logs **before** restarting the pod, so the error message isn't pushed out of view by startup output.
:::

To view pod logs, click **View Logs** on your pod card, or follow these steps:

1. Navigate to your pod card.
2. Click the **More** button at the bottom right of the pod card.
3. Select **Show Logs** from the menu.

<img src="/img/pod-show-logs.png" alt="Show Logs option in the pod More menu" width="60%" />

Some apps also write detailed errors to log files in persistent storage rather than standard pod logs (for example, Nextcloud's `/data/nextcloud.log` or BookStack's `config/log/nginx/error.log`). You can read those via [SFTP](/manage/files).

Common clues to look for in logs:

- **`Out of memory` / `Killed`**: The app exceeded its memory limit — increase memory under *⚙️ Edit Pod Settings* > *Resources*.
- **`No space left on device`**: Storage or file-count quota is full — free up files via [SFTP](/manage/files) or increase storage.
- **Missing or invalid variable / config syntax error**: A typo in *Env Vars* or an edited config file — undo your last change.
- **Database migration errors**: Can happen if a pod was paused for several weeks and skipped multiple versions — [contact support](#when-to-contact-support).

### Isolate the Cause

- **Undo recent changes**: If the issue started right after editing *Env Vars* or a file over SFTP, revert that change and save.
- **Test the `.pikapod.net` URL**: If you use a [custom domain](/manage/custom-domains), try opening the pod via its default `.pikapod.net` address. If that loads normally, the issue is with DNS, SSL/TLS, or Cloudflare rather than the pod itself.
- **Check Firewall rules**: If the pod is unreachable only from your network, open *⚙️ Edit Pod Settings* > *Firewall* and use **Add My IP** to make sure your current IP is allowed.

### Restart the Pod

You can restart a running pod via *More > Restart*. This resolves many temporary errors and is sometimes needed for config file changes made over SFTP to take effect.

If a simple restart doesn't help, try pausing the pod (*More > Pause Pod*), waiting about a minute, and resuming it (*More > Resume Pod*).

### Check App-Specific Help

Many apps have known quirks — such as clearing a broken cache, disabling maintenance mode, or pruning a large database. Check the [App Help](/apps) page for your app (also linked via *FAQ* on your pod card).

## When to Contact Support

Reach out to support if:

- The logs are empty or show a database connection error you can't resolve.
- The pod fails to start with a migration error after being paused for a long time.
- The pod still shows "Pod is Loading..." after checking resources, logs, and restarting.

Click **Report Issue** on your pod card (or email [hello@pikapods.com](mailto:hello@pikapods.com)) and include:

- **What happened and when it started** (e.g. after an app update, an *Env Vars* change, or a long pause).
- **The exact error message or HTTP status code** (e.g. `502`, `500`).
- **Relevant lines from View Logs** (or a screenshot).
- **Whether the default `.pikapod.net` URL works** (if you use a custom domain).

:::note
If you have the [Firewall](/manage/firewall) enabled and need support to inspect your pod in a browser, disable the firewall first — our support team cannot bypass it.
:::
