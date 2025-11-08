'use client';

import { useState } from 'react';
import { Eye, Copy, Check, Image as ImageIcon, Instagram, Facebook, Music, Globe, MessageCircle, Mail } from 'lucide-react';

export default function WebsiteBuilderView() {
    const [copied, setCopied] = useState(false);
    const websiteUrl = 'fitsalmon.com/trainer/john-trainer';

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://${websiteUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePreview = () => {
        // Open preview in a new window/tab on mobile
        const previewWindow = window.open('', '_blank', 'width=400,height=800');
        if (previewWindow) {
            previewWindow.document.write(getPreviewHTML());
            previewWindow.document.close();
        }
    };

    const getPreviewHTML = () => {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview - John Trainer</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Lato', sans-serif; 
            background: linear-gradient(to bottom, #0a0a0a, #0f231c); 
            min-height: 100vh; 
            padding: 2rem 1rem; 
        }
        .container { max-width: 448px; margin: 0 auto; }
        button { cursor: pointer; border: none; transition: all 0.3s; }
        button:hover { opacity: 0.85; transform: scale(1.02); }
    </style>
</head>
<body>
    <div class="container">
        <!-- Hero Section -->
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="width: 7rem; height: 7rem; margin: 0 auto 1rem auto; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.2); padding: 4px; border-radius: 50%; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
                <div style="width: 100%; height: 100%; background: #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="font-size: 40px; font-weight: 900; color: white;">JT</div>
                </div>
            </div>
            <h1 style="font-size: 28px; font-weight: 900; color: white; margin-bottom: 0.5rem; letter-spacing: -0.025em;">JOHN TRAINER</h1>
            <p style="font-size: 14px; font-weight: 700; color: #d4ff00; margin-bottom: 0.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Entrenador Personal Elite</p>
            <p style="font-size: 13px; color: #a8a8a8; font-weight: 500;">Entrenador Certificado • Especialista en Nutrición</p>
        </div>

        <!-- Social Links -->
        <div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                <div style="color: #e0e0e0; font-size: 28px;">📷</div>
                <div style="font-size: 10px; color: #888; font-weight: 600;">Instagram</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                <div style="color: #e0e0e0; font-size: 28px;">👥</div>
                <div style="font-size: 10px; color: #888; font-weight: 600;">Facebook</div>
            </div>
        </div>

        <!-- Stats -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; text-align: center; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
                <div style="font-size: 24px; font-weight: 900; color: white; line-height: 1; margin-bottom: 0.25rem;">500+</div>
                <div style="font-size: 11px; font-weight: 700; color: #a8a8a8; text-transform: uppercase; letter-spacing: 0.05em;">Clientes</div>
            </div>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; text-align: center; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
                <div style="font-size: 24px; font-weight: 900; color: white; line-height: 1; margin-bottom: 0.25rem;">8</div>
                <div style="font-size: 11px; font-weight: 700; color: #a8a8a8; text-transform: uppercase; letter-spacing: 0.05em;">Años Exp.</div>
            </div>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; text-align: center; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
                <div style="font-size: 24px; font-weight: 900; color: white; line-height: 1; margin-bottom: 0.25rem;">98%</div>
                <div style="font-size: 11px; font-weight: 700; color: #a8a8a8; text-transform: uppercase; letter-spacing: 0.05em;">Tasa Éxito</div>
            </div>
        </div>

        <!-- CTA Button -->
        <button style="width: 100%; padding: 1.25rem; background: #d4ff00; color: #0a0a0a; font-weight: 900; font-size: 16px; border-radius: 16px; box-shadow: 0 8px 24px rgba(212,255,0,0.25); margin-bottom: 1.5rem;">
            COMIENZA TU TRANSFORMACIÓN
        </button>

        <!-- About Section -->
        <div style="background: rgba(26,26,26,0.6); backdrop-filter: blur(8px); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
            <h2 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 0.75rem; letter-spacing: -0.025em;">ACERCA DE MÍ</h2>
            <p style="font-size: 14px; color: #d0d0d0; line-height: 1.6; font-weight: 500; margin-bottom: 1rem;">
                Entrenador personal certificado elite con más de 8 años transformando vidas. Especializado en entrenamiento de fuerza, recomposición corporal y rendimiento atlético.
            </p>
            <p style="font-size: 14px; color: #d0d0d0; line-height: 1.6; font-weight: 500;">
                Mi enfoque basado en la ciencia combinado con atención personalizada ha ayudado a más de 500 clientes a lograr sus físicos soñados.
            </p>
        </div>

        <!-- Services Section -->
        <div style="background: rgba(26,26,26,0.6); backdrop-filter: blur(8px); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
            <h2 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 0.5rem; letter-spacing: -0.025em;">SERVICIOS</h2>
            <p style="font-size: 12px; color: #d4ff00; font-weight: 700; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Programas Personalizados Para Ti</p>
            
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">💪</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Ganancia Muscular</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Construye masa magra y fuerza</div>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">🔥</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Pérdida de Peso</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Programas sostenibles de pérdida de grasa</div>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">⚡</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Rendimiento Atlético</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Mejora velocidad y potencia</div>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">🥗</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Coaching Nutricional</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Planes de comidas personalizados</div>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">🏋️</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Entrenamiento 1-a-1</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Sesiones privadas en persona</div>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 16px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 12px; flex-shrink: 0;">📱</div>
                    <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 2px;">Coaching Online</div>
                        <div style="font-size: 12px; color: #a8a8a8; font-weight: 500;">Entrena desde cualquier lugar</div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 1.25rem; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;">
                <p style="font-size: 12px; color: #a8a8a8; font-weight: 600; text-align: center;">
                    💰 Precios personalizados según tus objetivos • Contacta para consulta
                </p>
            </div>
        </div>

        <!-- Client Results Gallery -->
        <div style="background: rgba(26,26,26,0.6); backdrop-filter: blur(8px); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
            <h2 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 0.5rem; letter-spacing: -0.025em;">RESULTADOS DE CLIENTES</h2>
            <p style="font-size: 12px; color: #a8a8a8; font-weight: 700; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Transformaciones Reales</p>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                ${[1, 2, 3, 4, 5, 6].map(() => `
                    <div style="aspect-ratio: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <div style="font-size: 24px;">💪</div>
                    </div>
                `).join('')}
            </div>
            <p style="font-size: 11px; color: #888; text-align: center; font-weight: 500;">
                Transformaciones reales de clientes • Los resultados pueden variar
            </p>
        </div>

        <!-- Testimonials -->
        <div style="background: rgba(26,26,26,0.6); backdrop-filter: blur(8px); padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
            <h2 style="font-size: 20px; font-weight: 900; color: white; margin-bottom: 0.5rem; letter-spacing: -0.025em;">TESTIMONIOS</h2>
            <p style="font-size: 12px; color: #a8a8a8; font-weight: 700; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Lo Que Dicen Los Clientes</p>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.25rem; border-radius: 16px;">
                    <div style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 900; color: white;">M</div>
                        <div style="flex: 1;">
                            <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 4px;">Maria Lopez</div>
                            <div style="color: #d4ff00; font-size: 14px;">★★★★★</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #d0d0d0; line-height: 1.6; font-weight: 500;">
                        "¡Perdí 15kg en 4 meses! El enfoque de John cambia vidas. La mejor inversión que he hecho."
                    </p>
                </div>

                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.25rem; border-radius: 16px;">
                    <div style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 900; color: white;">C</div>
                        <div style="flex: 1;">
                            <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 4px;">Carlos Rodriguez</div>
                            <div style="color: #d4ff00; font-size: 14px;">★★★★★</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #d0d0d0; line-height: 1.6; font-weight: 500;">
                        "Gané 8kg de puro músculo. El plan nutricional y entrenamiento son increíbles. ¡Lo recomiendo!"
                    </p>
                </div>

                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.25rem; border-radius: 16px;">
                    <div style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 900; color: white;">A</div>
                        <div style="flex: 1;">
                            <div style="font-size: 15px; font-weight: 900; color: white; margin-bottom: 4px;">Ana Martinez</div>
                            <div style="color: #d4ff00; font-size: 14px;">★★★★★</div>
                        </div>
                    </div>
                    <p style="font-size: 13px; color: #d0d0d0; line-height: 1.6; font-weight: 500;">
                        "Finalmente logré el cuerpo de mis sueños. Profesional, conocedor y siempre motivador. ¡Gracias!"
                    </p>
                </div>
            </div>
        </div>

        <!-- Contact Buttons -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
            <button style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; font-weight: 700; font-size: 15px; border-radius: 16px; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                <span style="font-size: 20px;">💬</span>
                Mensaje por WhatsApp
            </button>
            <button style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; font-weight: 700; font-size: 15px; border-radius: 16px; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                <span style="font-size: 20px;">📷</span>
                Seguir en Instagram
            </button>
            <button style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; font-weight: 700; font-size: 15px; border-radius: 16px; display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                <span style="font-size: 20px;">✉️</span>
                Enviar Email
            </button>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 1.5rem 0; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="font-size: 11px; color: #888; font-weight: 500; margin-bottom: 0.5rem;">Desarrollado por</p>
            <p style="font-size: 16px; font-weight: 900; color: #d4ff00; letter-spacing: -0.025em;">FITSALMON</p>
        </div>
    </div>
</body>
</html>
        `;
    };

    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[#1a3b2f] flex flex-col overflow-hidden" style={{ fontFamily: 'Lato, sans-serif' }}>
            {/* Header - Match luxury dashboard theme */}
            <div className="bg-gradient-to-r from-[#234a3d] to-[#1a3b2f] px-3 md:px-6 py-3 md:py-4 border-b border-[rgba(233,229,220,0.1)]">
                <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="min-w-0 flex-shrink">
                        <h1 className="text-lg md:text-2xl font-black leading-[1.15] mb-1 text-white bg-gradient-to-r from-white to-[#d4ff00] bg-clip-text truncate" style={{ letterSpacing: '-0.03em' }}>Constructor de Micro-Sitio</h1>
                        <p className="text-[10px] md:text-xs text-[#e9e5dc] font-semibold hidden sm:block">Crea tu página profesional de fitness</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                            onClick={handlePreview}
                            className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 bg-[#2a5a4a] hover:bg-[#3a6a5a] text-white font-black transition-all duration-400 shadow-[0_4px_16px_rgba(0,0,0,0.2)] text-xs md:text-sm md:hidden whitespace-nowrap"
                            style={{ borderRadius: '12px' }}
                        >
                            <Eye size={16} strokeWidth={2.5} />
                            <span className="hidden xs:inline">Vista Previa</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 bg-[#2a5a4a] hover:bg-[#3a6a5a] text-white font-black transition-all duration-400 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] text-xs md:text-sm whitespace-nowrap" style={{ borderRadius: '12px' }}>
                            <Check size={16} strokeWidth={3} />
                            Guardar
                        </button>
                    </div>
                </div>

                {/* URL Display */}
                <div className="flex items-center gap-2 md:gap-3 bg-[#2a5a4a] px-3 md:px-4 py-2 md:py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '12px' }}>
                    <span className="flex-1 font-mono text-[11px] md:text-[13px] text-[#e9e5dc] font-semibold truncate">https://{websiteUrl}</span>
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 font-black transition-all duration-400 text-[10px] md:text-xs flex-shrink-0 ${copied ? 'bg-gradient-to-r from-[#b8db00] to-[#d4ff00] text-[#0f231c] shadow-[0_0_30px_rgba(212,255,0,0.4)]' : 'bg-[#1a3b2f] hover:bg-[#0f231c] text-white'
                            }`}
                        style={{ borderRadius: '8px' }}
                    >
                        {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} strokeWidth={2.5} />}
                        {copied ? '¡Copiado!' : 'Copiar'}
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-hidden flex">
                {/* Editor Panel */}
                <div className="w-full md:w-[400px] bg-gradient-to-b from-[#234a3d] to-[#1a3b2f] overflow-auto p-4 md:p-6 border-r border-[rgba(233,229,220,0.1)]">
                    <h2 className="text-[20px] md:text-[24px] font-black leading-[1.2] mb-6 md:mb-8 text-white">Editar Contenido</h2>

                    {/* Header Section */}
                    <div className="mb-4 md:mb-6 p-4 md:p-6 bg-[#2a5a4a] shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '20px' }}>
                        <h3 className="text-[16px] md:text-[18px] font-black leading-[1.3] mb-4 md:mb-5 text-white">Sección Principal</h3>
                        <div className="space-y-4 md:space-y-5">
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">Foto de Perfil</label>
                                <button className="w-full py-3 md:py-4 bg-[#1a3b2f] hover:bg-[#0f231c] text-[#e9e5dc] hover:text-[#d4ff00] flex items-center justify-center gap-2 md:gap-3 transition-all duration-400 border border-[rgba(233,229,220,0.2)] hover:border-[#d4ff00]" style={{ borderRadius: '12px' }}>
                                    <ImageIcon size={18} strokeWidth={2.5} />
                                    <span className="text-[13px] md:text-[14px] font-bold">Subir Foto</span>
                                </button>
                            </div>
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">Nombre</label>
                                <input
                                    type="text"
                                    defaultValue="John Trainer"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[14px] md:text-[15px] text-white font-medium" style={{ borderRadius: '12px' }}
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">Eslogan</label>
                                <input
                                    type="text"
                                    defaultValue="Tu Entrenador Personal de Fitness"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[14px] md:text-[15px] text-white font-medium" style={{ borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-4 md:mb-6 p-4 md:p-6 bg-[#2a5a4a] shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '20px' }}>
                        <h3 className="text-[16px] md:text-[18px] font-black leading-[1.3] mb-4 md:mb-5 text-white">Acerca de</h3>
                        <textarea
                            rows={3}
                            defaultValue="Entrenador personal certificado con más de 5 años de experiencia. Especializado en entrenamiento de fuerza, pérdida de peso y rendimiento atlético."
                            className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[13px] md:text-[14px] leading-[1.6] text-white resize-none font-medium" style={{ borderRadius: '12px' }}
                        />
                    </div>

                    {/* Services Section */}
                    <div className="mb-4 md:mb-6 p-4 md:p-6 bg-[#2a5a4a] shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '20px' }}>
                        <h3 className="text-[16px] md:text-[18px] font-black leading-[1.3] mb-4 md:mb-5 text-white">Servicios y Precios</h3>
                        <div className="space-y-3">
                            {['Entrenamiento Personal 1-a-1', 'Coaching Online', 'Planificación Nutricional'].map((service, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.1)]" style={{ borderRadius: '12px' }}>
                                    <input type="checkbox" defaultChecked className="w-5 h-5" style={{ accentColor: '#d4ff00' }} />
                                    <span className="text-[14px] text-white font-semibold">{service}</span>
                                </div>
                            ))}
                            <button className="w-full py-4 bg-[#1a3b2f] hover:bg-[#0f231c] border border-[rgba(233,229,220,0.2)] text-[#e9e5dc] hover:text-[#d4ff00] hover:border-[#d4ff00] transition-all duration-400 text-[14px] font-black hover:scale-105" style={{ borderRadius: '12px' }}>
                                + Agregar Servicio
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="mb-4 md:mb-6 p-4 md:p-6 bg-[#2a5a4a] shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '20px' }}>
                        <div className="flex items-center justify-between mb-4 md:mb-5">
                            <h3 className="text-[16px] md:text-[18px] font-black leading-[1.3] text-white">Testimonios</h3>
                            <button className="text-[12px] text-[#d4ff00] hover:text-[#e5ff33] font-black uppercase tracking-wider">Gestionar</button>
                        </div>
                        <p className="text-[13px] text-[#a89f8f] mb-4 font-semibold">3 testimonios seleccionados</p>
                        <div className="space-y-3">
                            {['Ana Martinez', 'Carlos Rodriguez', 'Maria Lopez'].map((name, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.1)]" style={{ borderRadius: '12px' }}>
                                    <span className="text-[14px] text-white font-semibold">✓ {name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-4 md:mb-6 p-4 md:p-6 bg-[#2a5a4a] shadow-[0_4px_16px_rgba(0,0,0,0.2)]" style={{ borderRadius: '20px' }}>
                        <h3 className="text-[16px] md:text-[18px] font-black leading-[1.3] mb-4 md:mb-5 text-white">Información de Contacto</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">WhatsApp</label>
                                <input
                                    type="text"
                                    defaultValue="+1 234 567 8900"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[14px] md:text-[15px] text-white font-medium" style={{ borderRadius: '12px' }}
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">Instagram</label>
                                <input
                                    type="text"
                                    defaultValue="@johntrainer"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[14px] md:text-[15px] text-white font-medium" style={{ borderRadius: '12px' }}
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] md:text-[13px] font-black mb-2 md:mb-3 text-[#e9e5dc] uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    defaultValue="john@trainer.com"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-[#1a3b2f] border border-[rgba(233,229,220,0.2)] focus:outline-none focus:border-[#d4ff00] focus:ring-2 focus:ring-[rgba(212,255,0,0.2)] transition-all text-[14px] md:text-[15px] text-white font-medium" style={{ borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Live Preview - Luxury Link-in-Bio + Landing Page */}
                <div className="hidden md:flex md:flex-1 overflow-auto bg-gradient-to-b from-[#0a0a0a] to-[#0f231c] p-8">
                    <div className="max-w-md mx-auto">
                        {/* Hero Section - Profile */}
                        <div className="text-center mb-6">
                            {/* Profile Photo */}
                            <div className="w-28 h-28 mx-auto mb-4 bg-white/10 border-2 border-white/20 p-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ borderRadius: '50%' }}>
                                <div className="w-full h-full bg-[#1a1a1a] rounded-full flex items-center justify-center border border-white/10">
                                    <div className="text-[40px] font-black text-white">JT</div>
                                </div>
                            </div>

                            {/* Name & Title */}
                            <h1 className="text-[28px] font-black text-white mb-2 tracking-tight">JOHN TRAINER</h1>
                            <p className="text-[14px] font-bold text-[#d4ff00] mb-1 uppercase tracking-wider">Entrenador Personal Elite</p>
                            <p className="text-[13px] text-[#a8a8a8] font-medium">Entrenador Certificado • Especialista en Nutrición</p>
                        </div>

                        {/* Social Media Links - Link-in-Bio Style */}
                        <div className="flex items-center justify-center gap-6 mb-6">
                            {[
                                { Icon: Instagram, label: 'Instagram' },
                                { Icon: Facebook, label: 'Facebook' },
                            ].map((social, i) => (
                                <button key={i} className="group flex flex-col items-center gap-2" aria-label={social.label}>
                                    <social.Icon size={28} className="text-[#e0e0e0] group-hover:text-[#d4ff00] group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                                    <div className="text-[10px] text-[#888] font-semibold group-hover:text-[#d4ff00] transition-colors">{social.label}</div>
                                </button>
                            ))}
                        </div>

                        {/* Social Proof Stats */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {[
                                { value: '500+', label: 'Clientes' },
                                { value: '8', label: 'Años Exp.' },
                                { value: '98%', label: 'Tasa Éxito' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-4 text-center shadow-[0_4px_16px_rgba(0,0,0,0.3)]" style={{ borderRadius: '20px' }}>
                                    <div className="text-[24px] font-black text-white leading-none mb-1">{stat.value}</div>
                                    <div className="text-[11px] font-bold text-[#a8a8a8] uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Primary CTA */}
                        <button className="w-full py-5 bg-[#d4ff00] hover:bg-[#e5ff33] text-[#0a0a0a] font-black text-[16px] transition-all duration-300 shadow-[0_8px_24px_rgba(212,255,0,0.25)] hover:shadow-[0_12px_32px_rgba(212,255,0,0.35)] hover:scale-[1.02] mb-6" style={{ borderRadius: '16px' }}>
                            COMIENZA TU TRANSFORMACIÓN
                        </button>

                        {/* About Section */}
                        <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-6 mb-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ borderRadius: '24px' }}>
                            <h2 className="text-[20px] font-black text-white mb-3 tracking-tight">ACERCA DE MÍ</h2>
                            <p className="text-[14px] text-[#d0d0d0] leading-relaxed font-medium mb-4">
                                Entrenador personal certificado elite con más de 8 años transformando vidas. Especializado en entrenamiento de fuerza, recomposición corporal y rendimiento atlético.
                            </p>
                            <p className="text-[14px] text-[#d0d0d0] leading-relaxed font-medium">
                                Mi enfoque basado en la ciencia combinado con atención personalizada ha ayudado a más de 500 clientes a lograr sus físicos soñados.
                            </p>
                        </div>

                        {/* Services Section */}
                        <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-6 mb-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ borderRadius: '24px' }}>
                            <h2 className="text-[20px] font-black text-white mb-2 tracking-tight">SERVICIOS</h2>
                            <p className="text-[12px] text-[#d4ff00] font-bold mb-5 uppercase tracking-wider">Programas Personalizados Para Ti</p>

                            <div className="space-y-3">
                                {[
                                    { icon: '💪', title: 'Ganancia Muscular', desc: 'Construye masa magra y fuerza' },
                                    { icon: '🔥', title: 'Pérdida de Peso', desc: 'Programas sostenibles de pérdida de grasa' },
                                    { icon: '⚡', title: 'Rendimiento Atlético', desc: 'Mejora velocidad y potencia' },
                                    { icon: '🥗', title: 'Coaching Nutricional', desc: 'Planes de comidas personalizados' },
                                    { icon: '🏋️', title: 'Entrenamiento 1-a-1', desc: 'Sesiones privadas en persona' },
                                    { icon: '📱', title: 'Coaching Online', desc: 'Entrena desde cualquier lugar' }
                                ].map((service, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group" style={{ borderRadius: '16px' }}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/10 border border-white/10 flex items-center justify-center text-2xl shrink-0" style={{ borderRadius: '12px' }}>
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[15px] font-black text-white mb-0.5">{service.title}</div>
                                                <div className="text-[12px] text-[#a8a8a8] font-medium">{service.desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 p-4 bg-white/5 border border-white/10" style={{ borderRadius: '12px' }}>
                                <p className="text-[12px] text-[#a8a8a8] font-semibold text-center">
                                    💰 Precios personalizados según tus objetivos • Contacta para consulta
                                </p>
                            </div>
                        </div>

                        {/* Client Results Gallery */}
                        <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-6 mb-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ borderRadius: '24px' }}>
                            <h2 className="text-[20px] font-black text-white mb-2 tracking-tight">RESULTADOS DE CLIENTES</h2>
                            <p className="text-[12px] text-[#a8a8a8] font-bold mb-5 uppercase tracking-wider">Transformaciones Reales</p>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                    <div key={i} className="aspect-square bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group cursor-pointer" style={{ borderRadius: '16px' }}>
                                        <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/30 transition-all">
                                            <div className="text-[24px]">💪</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] text-[#888] text-center font-medium">
                                Transformaciones reales de clientes • Los resultados pueden variar
                            </p>
                        </div>

                        {/* Testimonials */}
                        <div className="bg-[#1a1a1a]/60 backdrop-blur-sm p-6 mb-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ borderRadius: '24px' }}>
                            <h2 className="text-[20px] font-black text-white mb-2 tracking-tight">TESTIMONIOS</h2>
                            <p className="text-[12px] text-[#a8a8a8] font-bold mb-5 uppercase tracking-wider">Lo Que Dicen Los Clientes</p>

                            <div className="space-y-4">
                                {[
                                    { name: 'Maria Lopez', text: '¡Perdí 15kg en 4 meses! El enfoque de John cambia vidas. La mejor inversión que he hecho.', rating: 5 },
                                    { name: 'Carlos Rodriguez', text: 'Gané 8kg de puro músculo. El plan nutricional y entrenamiento son increíbles. ¡Lo recomiendo!', rating: 5 },
                                    { name: 'Ana Martinez', text: 'Finalmente logré el cuerpo de mis sueños. Profesional, conocedor y siempre motivador. ¡Gracias!', rating: 5 }
                                ].map((testimonial, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-5" style={{ borderRadius: '16px' }}>
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center shrink-0 text-[18px] font-black text-white">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-[15px] font-black text-white mb-1">{testimonial.name}</div>
                                                <div className="flex text-[#d4ff00] text-[14px]">{'★'.repeat(testimonial.rating)}</div>
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-[#d0d0d0] leading-relaxed font-medium">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Buttons */}
                        <div className="space-y-3 mb-6">
                            <button className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]" style={{ borderRadius: '16px' }}>
                                <MessageCircle size={20} strokeWidth={2} />
                                Mensaje por WhatsApp
                            </button>
                            <button className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]" style={{ borderRadius: '16px' }}>
                                <Instagram size={20} strokeWidth={2} />
                                Seguir en Instagram
                            </button>
                            <button className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]" style={{ borderRadius: '16px' }}>
                                <Mail size={20} strokeWidth={2} />
                                Enviar Email
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="text-center py-6 border-t border-white/10">
                            <p className="text-[11px] text-[#888] font-medium mb-2">Desarrollado por</p>
                            <p className="text-[16px] font-black text-[#d4ff00] tracking-tight">FITSALMON</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
