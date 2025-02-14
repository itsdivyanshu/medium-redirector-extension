# Medium to Freedium Redirector

## Overview
The **Medium to Freedium Redirector** is a Chrome extension that automatically redirects Medium articles to Freedium, allowing users to bypass Medium's paywall and read articles without restrictions.

## Features
- Automatically detects Medium article URLs and redirects them to Freedium.
- Seamless browsing experience with no manual intervention required.
- Lightweight and efficient, running in the background without affecting performance.

## Installation
1. Download or clone this repository.
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension is now installed and will automatically redirect Medium URLs to Freedium.

## Permissions
This extension requires the following permissions:
- **webNavigation**: To monitor navigation events and redirect URLs.
- **tabs**: To update the current tab with the redirected URL.
- **host_permissions**: To access Medium URLs for redirection.

## How It Works
- Whenever a user navigates to a Medium article, the extension checks if the URL contains `medium.com`.
- If the URL does not already point to Freedium, it redirects the user to `freedium.cfd` with the Medium article's URL appended.

## Icon Attribution
The extension uses `medium-redirector.png` as its icon.

## Disclaimer
This extension is intended for educational purposes only. Use it at your own discretion and ensure compliance with Medium's terms of service.

## License
This project is open-source and licensed under the MIT License.
