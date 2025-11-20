# Email Integration - Quick Start

## ✅ What's Been Implemented

Your "Submit Request" button now sends real emails to **info@goldencrowndb.com** using your Gmail account.

### Changes Made:
1. ✅ Switched API route `app/api/send-email/route.ts` to use Gmail (nodemailer)
2. ✅ Updated environment file template for Gmail credentials
3. ✅ Existing estimate form components continue to post to `/api/send-email`

## 🚀 Quick Setup (3 Steps)

### Step 1: Configure Gmail
Use the account:
- Email: `goldencrowndb@gmail.com`

If you use 2FA on this account, create an **app password** in your Google account and use that instead of the main password.

### Step 2: Add Gmail Credentials to Your Project
1. Copy `.env.local.example` to `.env.local`.
2. Open `.env.local` and set:
   ```
   GMAIL_USER=goldencrowndb@gmail.com
   GMAIL_PASS=your-gmail-app-password-or-account-password
   ```

### Step 3: Test It
1. Restart your dev server:
   ```bash
   pnpm dev
   ```
2. Submit an estimate form and check the inbox for `info@goldencrowndb.com`.

## 📧 What Happens When Form is Submitted

1. User fills out the estimate form.
2. Form data is sent to `/api/send-email`.
3. API formats the data into a styled HTML email.
4. Email is sent via Gmail to **info@goldencrowndb.com**.
5. User sees a success message.

## 🎯 Email Details

- **From:** `Golden Crown Design <goldencrowndb@gmail.com>` (configured via `GMAIL_USER`)
- **To:** `info@goldencrowndb.com`
- **Subject:** "New Estimate Request" (includes service title if applicable)
- **Content:** All form fields formatted as HTML

## 📝 Need More Details?

See `EMAIL_SETUP.md` for:
- Domain verification instructions
- Troubleshooting tips
- Rate limit information
- Full configuration options

## 💡 Pro Tip

To use your own domain (e.g., `no-reply@goldencrowndb.com`):
1. Verify your domain in Gmail dashboard
2. Update the `from` field in `app/api/send-email/route.ts`

---

Your forms now send real emails through your Gmail account.
