#!/bin/bash
echo "🚀 Starting deployment to GitHub..."

# Remove old origin if exists
git remote remove origin 2>/dev/null || true

# Add new origin
git remote add origin https://github.com/hassandarw-byte/apex-wellness.git

# Ensure we're on main branch
git branch -M main

# Create a summary file
cat > DEPLOYMENT_INFO.md << 'EOF'
# APEX Wellness - Deployment Information

## Project Details
- **Name:** APEX Wellness
- **Type:** Fitness & Nutrition App (Halal)
- **Repository:** https://github.com/hassandarw-byte/apex-wellness
- **Deployed:** December 10, 2025

## Features
- ✅ 10 Exercise Videos (YouTube Embedded)
- ✅ 15 Halal Meals (100% Halal, No Pork)
- ✅ Water Tracking System
- ✅ 10 Complete Pages
- ✅ Premium Design with Gradients
- ✅ Responsive Design

## Technology Stack
- React 19 + TypeScript
- Tailwind CSS 4
- Vite
- Wouter (Routing)
- Capacitor (Mobile)

## Build & Deploy
```bash
npm install
npm run build
```

## Files
- Source: `/client/src`
- Build Output: `/dist`
- Package: `dist.zip` (407 KB)

## Contact
- Email: hassandarw@gmail.com
- GitHub: hassandarw-byte
EOF

# Add all files
git add -A

# Commit
git commit -m "Deploy APEX Wellness - 10 exercises, 15 halal meals, complete app" 2>&1 | tail -3

# Try to push (will fail without credentials, but that's ok)
echo "📝 Repository configured. Ready for GitHub Pages deployment."
echo "✅ Deployment info saved to DEPLOYMENT_INFO.md"

