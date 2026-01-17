import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

// TODO: Set SENDGRID_API_KEY and CONTACT_EMAIL in your environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

type ResponseData = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const { name, email, phone, message } = req.body as ContactFormData

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      })
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured')
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured. Please contact support.',
      })
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@leveragelab.co'

    // Prepare email
    const msg = {
      to: contactEmail,
      from: contactEmail, // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #18A8A8;">New Contact Form Submission</h2>
  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  </div>
  <div style="margin: 20px 0;">
    <h3 style="color: #374151;">Message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `,
    }

    // Send email
    await sgMail.send(msg)

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)

    if (error && typeof error === 'object' && 'response' in error) {
      const sgError = error as { response: { body: unknown } }
      console.error('SendGrid error details:', sgError.response.body)
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
}
