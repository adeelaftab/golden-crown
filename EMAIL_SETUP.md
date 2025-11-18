# Email Setup Guide

This project uses [Resend](https://resend.com/) for sending emails. Resend offers a **free tier** with:
- 100 emails per day
- 3,000 emails per month
- No credit card required

## Setup Instructions

### 1. Create a Resend Account

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up for a free account (no credit card required)

### 2. Get Your API Key

1. After signing in, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Golden Crown Production")
4. Copy the API key (it starts with `re_`)

### 3. Configure Your Environment

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_5CM8kRhm_CsBnC9zLXvqjYw9AczABT8by
   ```

3. **Important:** Never commit `.env.local` to version control (it's already in `.gitignore`)

### 4. Verify Your Domain (Optional but Recommended)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Go to [Domains](https://resend.com/domains) in your Resend dashboard
2. Click "Add Domain"
3. Enter your domain (e.g., `goldencrowndb.com`)
4. Add the provided DNS records to your domain
5. Wait for verification (usually takes a few minutes)
6. Update the `from` field in `app/api/send-email/route.ts`:
   ```typescript
   from: 'Golden Crown Design <no-reply@goldencrowndb.com>',
   ```

### 5. Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to your estimate form
3. Fill out and submit the form
4. Check your Resend dashboard to see the email was sent
5. Check `info@goldencrowndb.com` inbox for the email

## Email Configuration

The email configuration is in `app/api/send-email/route.ts`:

- **Recipient:** `info@goldencrowndb.com`
- **Subject:** Includes service title if provided
- **Content:** All form fields formatted as HTML

## Troubleshooting

### API Key Not Working
- Make sure you copied the entire API key (starts with `re_`)
- Ensure `.env.local` is in the root directory
- Restart your dev server after adding the API key

### Emails Not Arriving
- Check your Resend dashboard [Logs](https://resend.com/logs) for delivery status
- Verify the recipient email address in the API route
- Check spam folder

### Rate Limits
- Free tier: 100 emails/day, 3,000/month
- If you exceed limits, upgrade your Resend plan

## Support

- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [https://resend.com/support](https://resend.com/support)
