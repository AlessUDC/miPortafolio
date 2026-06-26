import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Configure SMTP Transporter
    // If SMTP environment variables are not configured yet, we will log a warning and return a mock success or specific setup error.
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASS in your environment variables.");
      return NextResponse.json(
        {
          error: "El servidor de correo no está configurado. Por favor, configura las variables de entorno SMTP_USER y SMTP_PASS.",
          setupRequired: true
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email content with clean HTML styling
    const mailOptions = {
      from: `"Portafolio - Formulario de Contacto" <${smtpUser}>`,
      to: "ursuadelacruzpaolo@gmail.com",
      replyTo: `"${name}" <${email}>`,
      subject: `[Portafolio] ${name} te escribió: ${subject}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\nMensaje:\n${message}`,
      html: `
        <div style="max-width: 495px; margin: 20px auto 0 auto; height: 4px; background-color: #2563eb; border-radius: 4px 4px 0 0;"></div>

        <div style="max-width: 435px; margin: 0 auto; padding: 24px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          
          <h2 style="color: #0f172a; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; letter-spacing: -0.01em;">
            Formulario recibido
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; width: 25%; vertical-align: middle;">
                Nombre
              </td>
              <td style="padding: 10px 0; font-size: 14px; color: #1e293b; font-weight: 500; vertical-align: middle;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-top: 1px solid #f1f5f9; vertical-align: middle;">
                Correo
              </td>
              <td style="padding: 10px 0; font-size: 14px; color: #2563eb; font-weight: 500; border-top: 1px solid #f1f5f9; vertical-align: middle;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-top: 1px solid #f1f5f9; vertical-align: middle;">
                Asunto
              </td>
              <td style="padding: 10px 0; font-size: 14px; color: #1e293b; border-top: 1px solid #f1f5f9; vertical-align: middle;">
                ${subject}
              </td>
            </tr>
          </table>
          
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
              Mensaje
            </div>
            <div style="font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="text-align: right;">
            <a href="mailto:${email}?subject=RE: ${subject}" style="display: inline-block; background-color: #1e293b; color: #ffffff; font-size: 13px; font-weight: 500; text-decoration: none; padding: 10px 18px; border-radius: 6px;">
              Responder correo
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Mensaje enviado con éxito." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
