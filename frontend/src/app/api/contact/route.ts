import { NextRequest } from 'next/server'

// Example with Resend; swap to Nodemailer if you prefer
// Ensure RESEND_API_KEY and CONTACT_TO_EMAIL are configured in environment

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body || {}

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !toEmail) {
      return new Response(JSON.stringify({ ok: false, error: 'Email service not configured' }), { status: 500 })
    }

    // Minimal direct Resend API call without installing SDK
    const sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [toEmail],
        // to: "vaishnavimane991@gmail.com",
        subject: subject || `New message from ${name}`,
        html: `<div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || ''}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || '').replace(/\n/g, '<br/>')}</p>
        </div>`
      })
    })

    if (!sendRes.ok) {
      const err = await sendRes.text()
      return new Response(JSON.stringify({ ok: false, error: err || 'Failed to send email' }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || 'Unexpected error' }), { status: 500 })
  }
}





