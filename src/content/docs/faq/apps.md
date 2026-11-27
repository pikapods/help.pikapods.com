---
title: Apps & Updates
description: "Questions about app support, file editing, adding new apps and update policies."
sidebar:
  order: 2
---

## Support for Individual Apps

PikaPods hosts dozens of independent open-source apps built by third-party authors and communities. To keep hosting simple and priced purely on the resources you use, our team focuses on keeping your pod running smoothly rather than acting as a helpdesk for every app's features and internals.

**We're always happy to help with:**
- Your PikaPods account, billing, or limits
- Offline pods, crashes, failed updates, or resource issues
- Pod features like [custom domains](/manage/custom-domains), [SFTP](/manage/files), [database access](/manage/database), [backups](/manage/backup), and the [firewall](/manage/firewall)
- Exposing a [missing environment variable](#missing-environment-variables) or reviewing a new [SFTP folder mount](#editing-app-files-or-source-code)

Email [hello@pikapods.com](mailto:hello@pikapods.com) (or click *Report Issue* on your pod card) any time—we generally reply within a few hours on working days.

**What we can't cover** is how to use an app's features, configure third-party plugins/themes, troubleshoot bugs inside the app itself, or do custom data migrations.

:::tip[Not sure which side an issue is on?]
Start with our [Troubleshooting](/manage/debug) guide. If *View Logs* points to a hosting or update problem—or you're still unsure—feel free to reach out and we'll check that your pod is healthy.
:::

For help with the app itself, here are the best places to go, roughly in order:

### 1. Quick Self-Help
- **PikaPods App Help**: Many apps have an [App Help](/apps) page covering common setup steps and PikaPods-specific tips (also linked via *FAQ* on your pod card).
- **Official documentation**: Follow the *Project Page* link for your app to read the upstream docs. When editing *⚙️ Edit Pod Settings* > *Env Vars*, you'll also find a direct link to the app's official settings documentation.
- **Ask an AI assistant**: Paste the app name, what you're trying to do, and the relevant error lines from *View Logs* (or a screenshot) into an AI tool like ChatGPT or Claude to explain errors, check known issues, or suggest config fixes. Remove any passwords or API keys before pasting, and take a [backup](/manage/backup) before running any database changes it suggests.

### 2. Ask the App's Community & Maintainers
- **Community forum or chat**: Most open-source apps have a Discord, Matrix room, forum, Reddit, or GitHub Discussions where other users share setups and workarounds. When asking, mention the app version, include the relevant log snippet, and note that you're running the official Docker image.
- **GitHub Issues**: Search the project's existing issues first—common errors often already have a fix or workaround posted. If you've found a reproducible bug or want to request a feature, open a new issue there.

### 3. Dedicated or Paid Help
- **Commercial support from the authors**: Many open-source projects offer paid support plans or consulting. It gets you help directly from the people who build the app and funds its ongoing development.
- **Hire a freelancer**: For complex setups, custom themes, or migrations, sites like [Upwork](https://www.upwork.com/) are a practical way to hire an experienced sysadmin or developer—even for a small, one-off task.


## Editing App Files or Source Code
At PikaPods we deploy all apps as isolated containers. A container is a ready-made package that bundles the app with everything it needs to run. It's built by the app author and distributed as a container image. This means you get the same experience as running the same image directly and can be sure there are no modifications to the app.

Compared to other ways of deploying apps (like putting PHP files on shared hosting space), it's not recommended to make adjustments to any files that aren't explicitly mounted from the image and visible via SFTP. While it may work temporarily, all such changes will be lost during the next update or edit.

In the large majority of cases, you will find that all necessary files are available via SFTP and no further changes are necessary. If you think a new mounted folder should be made available for an app, do get in [touch](mailto:hello@pikapods.com) and it will be reviewed.


## Adding New Apps
New apps are regularly being added. If your favorite app isn't available yet, you can suggest or vote for it on our [feedback](https://feedback.pikapods.com/) page. For an app to be suitable for PikaPods, it should roughly match these criteria:

- Be a web application and use one HTTPS port only
- Not use large amounts of CPU or bandwidth by design (e.g. video encoding)
- Not have a potential for abuse or impact on other pods (e.g. proxies or VPNs)
- Have a license that allows self-hosting
- Not compete with the author's own paid hosting service, unless alternative hosting options are actively promoted.
- Have an official (or semi-official) Docker image available
- Be actively developed and security issues are addressed


## Updating Apps

Providing a stable experience is our top priority, so we don't roll out updates the moment they're released. Instead:

**Routine updates**
- We test each update in a staging environment before making it available to pods.
- Updates must be a stable release (as defined by the project) and have been available for at least 48 hours.
- These usually reach your pod within about a week of release, often sooner.
- If an update includes breaking changes (as defined in the release notes) that may require your attention, we'll email you one week beforehand.

**Security & urgent bug fixes**
- We apply these ad-hoc, as soon as the bugfix release is available.
- The update typically lands within a few hours.

Want to know when your pod updates? Enable notifications under *⚙️ Edit Pod Settings* > *Basics* > *Notify me of updates*.


## Missing Environment Variables
Many apps are configured using environment variables, shown as *Env Vars* in *⚙️ Edit Pod Settings*. When adding new apps, we will add the most common and useful ones from the start. Sometimes this doesn't include very specific or newly added settings. If you find that an env var you want to use is missing, just send us an email to [hello@pikapods.com](mailto:hello@pikapods.com) and we will add it right away.

## Disk Usage and Database Storage
Some apps primarily store their data in a database rather than using disk storage. For these apps, the disk usage bar will not be visible in the dashboard, and adding disk storage is not necessary. Examples include apps like Umami Analytics that primarily use database storage.

For database-intensive apps, we automatically allocate sufficient database storage space. Database storage does not count towards your disk usage quota and is provided free of charge under fair use, within normal usage of the app.
