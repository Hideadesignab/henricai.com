import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      companyName,
      country,
      jobTitle,
      organisationType,
      portfolioSize,
      phone,
      howDidYouHear,
      marketingConsent,
    } = body

    await resend.emails.send({
      from: 'Henric Website <noreply@henricai.com>',
      to: 'rufus@henricai.com',
      subject: `New Demo Request — ${firstName} ${lastName} at ${companyName}`,
      html: `
        <h2>New Demo Booking</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:6px 12px;font-weight:600;">Name</td><td style="padding:6px 12px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Company</td><td style="padding:6px 12px;">${companyName}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Country</td><td style="padding:6px 12px;">${country}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Job Title</td><td style="padding:6px 12px;">${jobTitle}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Organisation Type</td><td style="padding:6px 12px;">${organisationType}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Portfolio Size</td><td style="padding:6px 12px;">${portfolioSize}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Phone</td><td style="padding:6px 12px;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">How they heard about us</td><td style="padding:6px 12px;">${howDidYouHear}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;">Marketing Consent</td><td style="padding:6px 12px;">${marketingConsent ? 'Yes' : 'No'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to send email'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
