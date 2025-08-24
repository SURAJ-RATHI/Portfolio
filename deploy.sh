#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    git add .
    
    # Commit changes
    git commit -m "Update portfolio build - $(date)"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "🎉 Deployment initiated! Check GitHub Actions for progress."
    echo "🌐 Your portfolio will be available at: https://suraj-rathi.github.io/Portfolio/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
