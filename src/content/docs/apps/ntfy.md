---
title: Ntfy
description: "Tips and fixes for running Ntfy on PikaPods: setting up users, sending notifications, locking down access and mobile apps."
---

[ntfy](https://ntfy.sh/) is a simple HTTP-based pub-sub notification service: publish a message to a *topic* with one HTTP request and receive it on your phone, desktop, or the web app. Here are a few tips and fixes for [ntfy](https://www.pikapods.com/apps/ntfy) pods hosted on PikaPods. The [official ntfy docs](https://docs.ntfy.sh/) cover the full feature set.

## Setting Up Users

`NTFY_AUTH_USERS` is required, so the first thing to do is create your `admin` account (and any other users you want up front). Each entry is `username:password-hash:role`, comma-separated; the role is `admin` or `user`:

```
admin:$2b$10$...:admin,alice:$2b$10$...:user
```

You can't open a shell on your pod to hash passwords, so use the official [config generator](https://docs.ntfy.sh/config/#config-generator) — it turns a username and password into a paste-ready `username:hash:role` entry. Paste it into `NTFY_AUTH_USERS` under *⚙️ Edit Pod Settings* > *Env Vars*, deploy, then **Sign in** at the top-right of the web app.

**Coming from a self-hosted ntfy?** Define every account in `NTFY_AUTH_USERS`, not in `server.yml` — the variable always takes precedence, so an `auth-users` list in a config file is ignored. Copy each `username:hash:role` line from your old config straight into the comma-separated value above.

## Sending Notifications

Out of the box your pod works like the public ntfy.sh — the server is open, so you can publish to any topic with a single request, no credentials needed:

```
curl -d "Backup finished" https://your-pod.pikapod.net/mytopic
```

Then subscribe to `mytopic` in the web app or the mobile app to receive it. See [publishing](https://docs.ntfy.sh/publish/) for titles, priorities, tags, attachments, and click actions. To require credentials for publishing or reading, lock the server down (below).

## Locking Down Access

By default the server is **open**: anyone who knows a topic name can both **publish to it and read from it** — the topic name is the only secret. That's fine for low-stakes alerts, but for anything sensitive you'll want to require authentication (and pick an unguessable topic name in the meantime). Choose a default policy in `NTFY_AUTH_DEFAULT_ACCESS`:

- `deny-all` — fully private; every topic needs an account and an access grant.
- `write-only` — anyone can still publish without an account, but reading requires authentication. Keeps script publishing frictionless while protecting message contents.

Grant a `user`-role account access to specific topics with `NTFY_AUTH_ACCESS` (`username:topic:access`, where access is `rw`, `ro`, or `wo`; `*` wildcards allowed):

```
alice:alerts:rw,alice:deploys:ro
```

To keep the server private but open a single topic to everyone, use the special `everyone` user — e.g. `everyone:status:ro` (public read) or `everyone:alerts:wo` (public publish-only). See [access control](https://docs.ntfy.sh/config/#access-control) for the full model.

Set `NTFY_ENABLE_SIGNUP=true` if you'd rather let people register their own accounts. Self-registered users can sign in normally and persist alongside the ones in `NTFY_AUTH_USERS`, but on a private server they have no topic access until you grant it.

## Mobile and Desktop Apps

Install the [Android/iOS apps](https://ntfy.sh/) or use the web app, set your pod URL (`https://your-pod.pikapod.net`) as the **Default server**, and add your credentials under the topic settings if the server is locked down.

For iOS instant delivery, your pod forwards poll requests through an upstream push relay. Set `NTFY_UPSTREAM_BASE_URL` to `https://ntfy.sh` (or another upstream server) under *⚙️ Edit Pod Settings* > *Env Vars*. You may also set `NTFY_UPSTREAM_ACCESS_TOKEN` if your upstream server requires authentication or you exceed its rate limits.

## Advanced: Web Push and Email

These aren't exposed as settings; they live in ntfy's `server.yml`. Because your pod is configured entirely through environment variables, there's no `server.yml` in the config folder by default — **create a new one** at `/etc/ntfy/server.yml` via SFTP (see [Editing files](/manage/files)), starting from ntfy's [example config](https://github.com/binwiederhier/ntfy/blob/main/server/server.yml), then restart. Environment-variable settings always override `server.yml`, so keep user accounts and access in the variables above (an `auth-users`/`auth-access` block in the file is ignored); use the file only for settings without a variable, like web push and email:

- **Browser/web push** — generate a VAPID keypair and set `web-push-*`. See [web push](https://docs.ntfy.sh/config/#web-push).
- **Email notifications** — set `smtp-sender-*` to your SMTP provider. See [e-mail notifications](https://docs.ntfy.sh/config/#e-mail-notifications) and our [sending emails](/faq/technical#sending-emails) notes.

The [ntfy configuration reference](https://docs.ntfy.sh/config/) is the source of truth — these notes only cover the PikaPods-specific bits.

