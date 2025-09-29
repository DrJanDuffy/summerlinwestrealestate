#!/bin/bash

# V0-Generated Deployment Script for Summerlin West Real Estate
# Optimized for Vercel deployment

echo "🚀 V0-Generated Deployment Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check environment variables
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Creating from template..."
    if [ -f .env.template ]; then
        cp .env.template .env.local
        echo "📝 Please update .env.local with your actual values"
    else
        echo "❌ .env.template not found"
        exit 1
    fi
fi

# Run audit before deployment
echo "🔍 Running pre-deployment audit..."
node scripts/v0-vercel-comprehensive-audit.js

# Deploy to preview
echo "🚀 Deploying to preview..."
vercel

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Production URL: https://www.summerlinwestrealestate.com"
echo "🔗 Preview URL: Check Vercel dashboard"
