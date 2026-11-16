---
title: Troubleshooting a Pod
description: Troubleshoot and debug your pod. When something goes wrong, you can look at logs or restart a pod to get it working again.
sidebar:
  label: Troubleshooting
  order: 5
---

If a pod shows "Pod is loading..." for more than a few minutes, there is usually an issue with starting it. The most common causes:

- **Storage is full**: Check the disk usage shown on the pod and add storage in the pod's settings.
- **Not enough memory**: Larger apps can fail to start with too little memory. Increase it in the pod's settings.
- **A wrong setting**: A typo in an environment variable (_Env Vars_) can keep an app from starting. Undo your last change.
- **An error inside the app**: The logs will usually show what went wrong.

Follow the steps below to find the cause:

## Check Logs

In most cases, the detailed error can be found in the pod logs. To view them, follow these steps:

1. Navigate to your pod card.
2. Click on the **More** button located at the bottom right of the pod card.
3. Select **Show Logs** from the dialogue menu that appears.

Some apps also write logs to their persistent storage. Those can be accessed via [SFTP](/manage/files).

<img src="/img/pod-show-logs.png" width="60%" />

## Restart Pod

You can restart the pod from _More > Restart Pod_. This will resolve many errors and can be needed to apply changed settings.

## Still Stuck?

- Check the [App Help](/apps) page of your app for known issues and fixes.
- If the error is still unclear or no log is available, use _Report Issue_, include the logs you got, and we'll investigate further.
