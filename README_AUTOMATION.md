# Automation Bridge

## What this does

This system generates the homepage from structured data.

## How it works

1. Edit `data/homepage.json`
2. Run build script OR push to GitHub
3. `index.generated.html` is created
4. System replaces `index.html`

## Files

- templates/homepage.template.html
- data/homepage.json
- scripts/build-homepage.js

## Goal

No more manual homepage edits.

Content changes only happen in JSON.
