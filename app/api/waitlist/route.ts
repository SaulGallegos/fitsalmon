import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Configure AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email, presell } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingresa un email válido' },
        { status: 400 }
      );
    }

    const isPresell = presell === true;

    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!notificationEmail || !fromEmail) {
      console.error('Missing email configuration in environment variables');
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    // Create email parameters
    const params = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [notificationEmail],
      },
      Message: {
        Subject: {
          Data: isPresell
            ? `🔥 INTERÉS PRE-VENTA - Nuevo Registro FitSalmon`
            : `🎉 Nuevo Registro en Lista de Espera - FitSalmon`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                      line-height: 1.6;
                      color: #333;
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                    }
                    .header {
                      background: linear-gradient(135deg, ${
                        isPresell ? '#d4ff00' : '#ed6531'
                      } 0%, ${isPresell ? '#b8db00' : '#ff7e4d'} 100%);
                      color: ${isPresell ? '#0f231c' : 'white'};
                      padding: 30px;
                      border-radius: 10px 10px 0 0;
                      text-align: center;
                    }
                    .content {
                      background: #f9f9f9;
                      padding: 30px;
                      border-radius: 0 0 10px 10px;
                      border: 1px solid #e0e0e0;
                    }
                    .email-box {
                      background: white;
                      padding: 20px;
                      border-radius: 8px;
                      margin: 20px 0;
                      border-left: 4px solid #ed6531;
                      font-size: 18px;
                      font-weight: bold;
                      color: #ed6531;
                    }
                    .footer {
                      text-align: center;
                      margin-top: 20px;
                      color: #666;
                      font-size: 14px;
                    }
                    .timestamp {
                      color: #999;
                      font-size: 13px;
                      margin-top: 10px;
                    }
                    .action-required {
                      background: #fff3cd;
                      border: 2px solid #ffc107;
                      padding: 20px;
                      border-radius: 8px;
                      margin: 20px 0;
                    }
                    .action-required h3 {
                      margin-top: 0;
                      color: #856404;
                    }
                  </style>
                </head>
                <body>
                  <div class="header">
                    <h1 style="margin: 0; font-size: 28px;">${
                      isPresell
                        ? '🔥 Interés en Pre-Venta!'
                        : '🎉 Nueva Suscripción!'
                    }</h1>
                  </div>
                  <div class="content">
                    <p style="font-size: 16px; margin-bottom: 10px;">
                      ${
                        isPresell
                          ? '¡Alguien está interesado en la pre-venta!'
                          : 'Alguien nuevo se ha unido a la lista de espera de FitSalmon:'
                      }
                    </p>
                    
                    <div class="email-box">
                      📧 ${email}
                    </div>
                    
                    <p style="color: #666; margin: 20px 0;">
                      <strong>Estado:</strong> ${
                        isPresell
                          ? '✅ Interesado en Pre-venta (50% OFF primeros 6 meses)'
                          : '📋 Solo lista de espera'
                      }
                    </p>
                    
                    ${
                      isPresell
                        ? `
                      <div class="action-required">
                        <h3>⚡ ACCIÓN REQUERIDA</h3>
                        <p style="margin: 10px 0; color: #856404;">
                          Este usuario ha mostrado interés en la pre-venta con 50% de descuento durante 6 meses.
                        </p>
                        <p style="margin: 10px 0; color: #856404;">
                          <strong>Siguiente paso:</strong> Contacta a <strong>${email}</strong> para confirmar su plan (Starter o Pro) y enviarles el enlace de pago.
                        </p>
                      </div>
                    `
                        : ''
                    }
                    
                    <p style="color: #666; margin-top: 20px;">
                      Total de miembros en lista de espera: <strong>73+</strong> 🚀
                    </p>
                    
                    <div class="timestamp">
                      Registrado el: ${new Date().toLocaleString('es-ES', {
                        timeZone: 'America/Mexico_City',
                        dateStyle: 'full',
                        timeStyle: 'short',
                      })}
                    </div>
                  </div>
                  <div class="footer">
                    <p>FitSalmon - La Plataforma Elite para Profesionales del Fitness</p>
                  </div>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
              ${
                isPresell
                  ? '🔥 INTERÉS EN PRE-VENTA - FitSalmon'
                  : 'Nueva suscripción a la lista de espera de FitSalmon!'
              }
              
              Email: ${email}
              Estado: ${
                isPresell
                  ? 'Interesado en Pre-venta (50% OFF primeros 6 meses)'
                  : 'Solo lista de espera'
              }
              
              ${
                isPresell
                  ? `
⚡ ACCIÓN REQUERIDA:
Este usuario ha mostrado interés en la pre-venta.
Contacta a ${email} para confirmar su plan y enviarles el enlace de pago.
              `
                  : ''
              }
              
              Fecha: ${new Date().toLocaleString('es-ES', {
                timeZone: 'America/Mexico_City',
              })}
              
              Total de miembros: 73+
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };

    // Send email via AWS SES
    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    return NextResponse.json(
      {
        success: true,
        message: '¡Gracias por unirte a la lista de espera!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Error al procesar tu solicitud. Por favor intenta de nuevo.',
      },
      { status: 500 }
    );
  }
}
