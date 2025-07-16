# Deployment Guide

## 🚀 Vercel Deployment

### Automatic Deployment (Recommended)

1. **Connect Repository**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import `Govandwia/portofoliV1`

2. **Configure Build Settings**:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out` (for static export)
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed):
   - No environment variables required for this static site

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The built files will be in the 'out' directory
# Upload the 'out' folder to your hosting provider
```

## 📝 Build Configuration

The project is configured for static export in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  transpilePackages: ['framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
```

## 🔧 Troubleshooting

### Common Issues:

1. **TypeScript Errors**: Fixed in latest commit
2. **Image Optimization**: Disabled for static export
3. **Framer Motion**: Added to transpilePackages

### Build Commands:
- Development: `npm run dev`
- Production Build: `npm run build`
- Start Production: `npm start`

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel:
1. Go to your project dashboard
2. Click "Domains" 
3. Add your custom domain
4. Follow DNS configuration instructions

## 📊 Performance Optimization

The site is optimized for:
- ✅ Static generation
- ✅ Image optimization (disabled for export)
- ✅ Code splitting
- ✅ CSS optimization
- ✅ SEO-friendly URLs
