# Cardamomo Guatemala — Landing Page

Landing page profesional para empresa familiar guatemalteca exportadora de cardamomo premium, orientada a importadores en Europa y Medio Oriente.

## Stack

- **Angular 16** (standalone components)
- **HTML5 + CSS3** personalizado (sin Bootstrap)
- Diseño responsive (desktop, tablet, móvil)
- Tipografías: Cormorant Garamond + Source Sans 3

## Inicio rápido

```bash
cd cardamomo-landing
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200) en el navegador.

## Estructura de secciones

1. **Hero** — Mensaje principal + video de YouTube integrado
2. **Quiénes Somos** — Historia familiar y valores
3. **Productos** — Catálogo de exportación
4. **Calidades** — Grados de cardamomo (Extra Bold, Bold, Medium, FAQ)
5. **Procesos** — Maquilado y transformación
6. **Logística** — Tiempos de entrega y rutas de exportación
7. **Contacto** — Formulario y datos de la empresa

## Personalización

| Archivo | Qué personalizar |
|---------|------------------|
| `hero.component.ts` | ID del video de YouTube (`youtubeVideoId`) |
| `contact.component.ts` | Email, teléfono, dirección |
| `styles.css` | Variables CSS (colores, tipografía, espaciado) |
| `logistics.component.ts` | Rutas, tiempos de tránsito, incoterms |
| `qualities.component.ts` | Grados y especificaciones de calidad |
| `products.component.ts` | Catálogo de productos |

## Build de producción

```bash
npm run build
```

Los archivos se generan en `dist/cardamomo-landing/`.

## Requisitos

- Node.js 16+ (recomendado 18+)
- npm 8+
