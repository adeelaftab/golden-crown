# Email Setup Guide (Gmail)

This project now uses **Gmail (via nodemailer)** for sending emails when the estimate form / "Submit Request" button is used.

## Setup Instructions

### 1. Gmail Account

Use the following Gmail account for sending emails:

- Email: `goldencrowndb@gmail.com`

If this account has 2‑step verification enabled, create an **App password** in your Google Account and use that as the password for SMTP.

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local` (if you haven’t already).
2. Open `.env.local` and set:

   ```
   GMAIL_USER=goldencrowndb@gmail.com
   GMAIL_PASS=your-gmail-app-password-or-account-password
   ```

These values are read by `app/api/send-email/route.ts` to authenticate with Gmail.

### 3. How Emails Are Sent

- **Transport:** nodemailer with Gmail service
- **From:** `Golden Crown Design <goldencrowndb@gmail.com>` (configured via `GMAIL_USER`)
- **To:** `info@goldencrowndb.com`
- **Subject:** "New Estimate Request" (optionally includes the selected service title)
- **Content:** All submitted form fields, formatted as HTML, plus a plain text version.

### 4. Testing

1. Start your development server:
   ```bash
   pnpm dev
   ```
2. Open the site and navigate to the estimate form.
3. Fill it out and click **Submit Request**.
4. Check the inbox for `info@goldencrowndb.com`.

### 5. Troubleshooting

- **Authentication errors**
  - Confirm `GMAIL_USER` and `GMAIL_PASS` are correct.
  - If using an App password, ensure it hasn’t been revoked.
- **Emails not arriving**
  - Check spam/junk folder.
  - Confirm `info@goldencrowndb.com` is correct.
- **Environment not picked up**
  - Ensure `.env.local` is in the project root.
  - Restart the dev server after changing environment variables.

## Email Configuration

The email configuration is in `app/api/send-email/route.ts`:

- **Recipient:** `info@goldencrowndb.com`
- **Subject:** Includes service title if provided
- **Content:** All form fields formatted as HTML

## Support

- Gmail Documentation: [https://developers.google.com/gmail/api](https://developers.google.com/gmail/api)
- Gmail Support: [https://support.google.com/mail](https://support.google.com/mail)
