# Dagona Farms Open Graph Image Instructions

## Overview
A custom Open Graph image has been created for social media sharing on WhatsApp, Facebook, LinkedIn, and X (Twitter).

## Image Specifications
- **Size**: 1200 × 630 pixels
- **Format**: JPEG (recommended) or PNG
- **Design**: Modern agricultural branding with Dagona Farms logo

## How to Generate the OG Image

### Method 1: Screenshot the OG Image Route (Recommended)

1. **Navigate to the OG image page**:
   - Visit: `http://localhost:5173/og-image` (or your development URL)
   - The page will display the Open Graph image at exactly 1200×630px

2. **Take a screenshot**:
   - Use browser developer tools to set viewport to exactly 1200×630px
   - Or use a screenshot tool to capture the entire component
   - Tools you can use:
     - Chrome DevTools Device Toolbar (set custom size to 1200×630)
     - Firefox Responsive Design Mode
     - Screenshot tools like GoFullPage or Fireshot

3. **Save the image**:
   - Save as `og-image.jpg` in your `/public/images/` directory
   - Or upload to your CDN/hosting provider

4. **Update the image URL**:
   - In `src/app/components/Root.tsx`, find the line:
     ```typescript
     const ogImageUrl = "https://www.dagonafarms.org/images/og-image.jpg";
     ```
   - Update it to your actual image URL

### Method 2: Use Browser Developer Tools

1. Open Chrome/Firefox Developer Tools
2. Set device to custom size: 1200 × 630
3. Navigate to `/og-image`
4. Use "Capture screenshot" or "Capture node screenshot"
5. Save and upload the image

### Method 3: Use Online Screenshot Tools

1. Deploy your site to a staging URL
2. Use services like:
   - https://www.screenshotmachine.com/
   - https://www.browserstack.com/screenshots
   - Set size to 1200×630px
   - Capture the `/og-image` route

## Production Setup

Once you have the image file:

1. **Upload to your server**:
   ```
   /public/images/og-image.jpg
   ```

2. **Or use a CDN**:
   - Upload to Cloudinary, AWS S3, or similar
   - Update the `ogImageUrl` in `Root.tsx`

3. **Verify the setup**:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/
   - Twitter Validator: https://cards-dev.twitter.com/validator
   - WhatsApp: Just share the link and check the preview

## Testing Social Previews

### Facebook
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://www.dagonafarms.org/`
3. Click "Debug" to see the preview
4. Use "Scrape Again" if you update the image

### LinkedIn
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Check the preview

### Twitter/X
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Preview the card

### WhatsApp
1. Simply share the link in a chat
2. The preview will appear automatically
3. If it doesn't update, wait a few hours (WhatsApp caches aggressively)

## Current Implementation

The metadata is configured in `src/app/components/Root.tsx` with:
- Title: "Dagona Farms | Home of Agriculture"
- Description: "Modern agriculture, sustainable farming, and food production solutions by Dagona Farms."
- OG Image: Points to `https://www.dagonafarms.org/images/og-image.jpg`

All metadata includes:
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Card tags
- ✅ SEO meta tags
- ✅ Mobile web app tags
- ✅ Proper image dimensions and alt text

## Design Features

The OG image includes:
- ✅ Dagona Farms logo prominently displayed
- ✅ "Dagona Farms" and "Home of Agriculture" text
- ✅ Agricultural theme with crop, livestock, and aquaculture icons
- ✅ Earthy green and warm gold color scheme
- ✅ Modern, professional, and trustworthy design
- ✅ Clean and minimal with good readability
- ✅ Decorative agricultural elements (leaves, patterns)
- ✅ Est. 2025 badge
- ✅ Optimized for social preview readability

## Troubleshooting

**Image not showing in social previews?**
- Clear the social platform's cache using their debug tools
- Wait 24-48 hours for cache to expire
- Ensure the image URL is publicly accessible
- Check image file size (keep under 8MB for best compatibility)

**WhatsApp not showing the image?**
- WhatsApp caches very aggressively
- Try sharing with `?v=2` or similar cache-busting parameter
- Wait up to 7 days for cache to clear naturally

**Preview looks different on mobile?**
- Test on actual mobile devices
- Some platforms crop or resize differently
- The 1200×630 ratio should work well across all platforms
