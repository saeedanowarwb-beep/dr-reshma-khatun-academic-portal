# Dr. Reshma Khatun — Academic Portal

Phase-1 deployment-ready prototype built from the latest uploaded CV.

## Local test
Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000/`

Admin preview:

`http://localhost:8000/admin.html`

## GitHub upload
Upload the **contents** of this folder into the repository root. Do not upload the ZIP itself.

Required root files:
- `index.html`
- `admin.html`
- `styles.css`
- `data.json`
- `README.md`
- `assets/profile.jpg`

The `db/schema.sql` from the earlier prototype will be replaced in Phase 2 by the final Supabase schema after authentication and content-editing requirements are confirmed.

## Phase 2
Connect:
- Supabase Authentication
- Profiles
- Notices
- PDF/resources
- Routine
- Scholars
- Publications
- News/events
- Gallery
- Admin CRUD

Do not use the demo/admin preview as a production login.
