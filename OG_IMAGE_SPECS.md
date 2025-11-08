# OpenGraph Image Specifications

## Image Requirements

Create an image file named `og-image.png` in the `/public/images/` directory with the following specifications:

### Dimensions

- **Width:** 1200px
- **Height:** 630px
- **Aspect Ratio:** 1.91:1
- **Format:** PNG or JPG (PNG recommended for better quality)

### Content Recommendations

The OG image should include:

1. **FitSalmon Logo/Branding**

   - Use the gradient orange logo (from-[#ed6531] to-[#ff7e4d])
   - Include "FitSalmon" text prominently

2. **Key Value Proposition**

   - "Bot WhatsApp IA para Trainers"
   - "Desde 350 MXN/mes"
   - "50% OFF Fundadores"

3. **Visual Elements**

   - Background: Dark gradient (similar to website theme)
   - Colors: Use brand colors (orange #ed6531, lime #d4ff00, dark green #0f231c)
   - Typography: Bold, professional, readable at small sizes

4. **Call to Action**
   - "Solo 89 Plazas Fundadoras"
   - "Cierra 31 Diciembre"

### Design Tools

You can use:

- **Figma** (recommended): Free, professional design tool
- **Canva**: Easy templates, quick creation
- **Adobe Photoshop**: Professional option
- **Sketch**: Mac-only design tool

### Example Layout

```
┌─────────────────────────────────────────────┐
│  [F Logo]  FitSalmon                        │
│                                             │
│      Bot WhatsApp IA                        │
│      para Entrenadores México               │
│                                             │
│      Desde 350 MXN/mes                      │
│      50% OFF Fundadores                     │
│                                             │
│  [Screenshot/Visual Element]                │
│                                             │
│  Solo 89 Plazas • Cierra 31 Dic            │
└─────────────────────────────────────────────┘
```

### Testing

After creating the image:

1. Place it in `/public/images/og-image.png`
2. Test with these tools:
   - https://www.opengraph.xyz/
   - https://cards-dev.twitter.com/validator
   - https://developers.facebook.com/tools/debug/

### Current Fallback

Currently using `/images/profile.png` as a fallback. Replace with proper OG image once created.

### Social Media Preview Sizes

The 1200x630px size works perfectly for:

- Facebook Posts
- Twitter/X Cards
- LinkedIn Shares
- WhatsApp Link Previews
- Telegram Link Previews

### Best Practices

1. ✅ Keep important content within the "safe zone" (center 1200x600px)
2. ✅ Use high contrast text for readability
3. ✅ Avoid placing text too close to edges
4. ✅ Test on both light and dark backgrounds
5. ✅ Ensure text is readable at thumbnail sizes (200px wide)
6. ✅ Use web-safe fonts or embed fonts
7. ✅ Optimize file size (aim for < 300KB)
8. ✅ Use Spanish text targeting Mexican audience

### Quick Canva Template

Search Canva for "Open Graph Image" and customize with:

- Background: Dark gradient (#0f231c to #1a3b2f)
- Headline: "Bot WhatsApp IA para Trainers"
- Price: "Desde 350 MXN/mes"
- Badge: "50% OFF Fundadores"
- Logo: Upload FitSalmon logo
