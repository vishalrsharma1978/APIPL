# Auto-Deploy to Namecheap

This repo auto-builds and deploys to Namecheap shared hosting on every push to `main`
via the GitHub Actions workflow in [.github/workflows/deploy-namecheap.yml](.github/workflows/deploy-namecheap.yml).

## One-time setup

### 1. Get your FTP details from Namecheap
- Log in to **cPanel** → **FTP Accounts**.
- Create (or use an existing) FTP account scoped to your site.
- Note:
  - **FTP Host/Server** — usually `ftp.yourdomain.com` or the server hostname / IP from your Namecheap welcome email (e.g. `serverXXX.web-hosting.com`).
  - **Username** — the full FTP username (often `user@yourdomain.com`).
  - **Password** — the FTP account password.
  - **Remote directory** — where files should land, e.g. `/public_html/` (or `/public_html/yourdomain.com/` for an addon domain).

### 2. Add GitHub repository secrets
In GitHub: **Settings → Secrets and variables → Actions → New repository secret**. Add:

| Secret name       | Value                                   |
|-------------------|-----------------------------------------|
| `FTP_HOST`        | e.g. `serverXXX.web-hosting.com`        |
| `FTP_USERNAME`    | your full FTP username                  |
| `FTP_PASSWORD`    | your FTP password                       |
| `FTP_REMOTE_DIR`  | e.g. `/public_html/`                    |

> Uses **FTPS** (encrypted). If your host only supports plain FTP, change
> `protocol: ftps` to `protocol: ftp` in the workflow (less secure).

## How it works
1. You push a change to `main` (or edit the site and commit).
2. GitHub Actions installs deps, runs `npm run build`, and uploads `dist/` over FTP.
3. The site goes live automatically. Only changed files are uploaded (incremental).

## Manual trigger
You can also deploy on demand: GitHub → **Actions** tab → **Deploy to Namecheap** → **Run workflow**.

## Notes
- The `.htaccess` (SPA routing, HTTPS redirect, caching) lives in `public/` and is
  included in every build automatically.
- First deploy uploads everything; later deploys only sync changes using a
  `.ftp-deploy-sync-state.json` state file kept on the server.
