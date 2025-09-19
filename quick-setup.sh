#!/bin/bash

echo "🚀 Angular Refactor Quick Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install Angular CLI if not present
if ! command -v ng &> /dev/null; then
    echo "📦 Installing Angular CLI..."
    npm install -g @angular/cli@latest
    echo "✅ Angular CLI installed"
else
    echo "✅ Angular CLI already installed: $(ng version | head -n 1)"
fi

echo ""
echo "🏗️  Creating Angular project..."
echo "This will create a new Angular project in the parent directory"
echo ""

# Create Angular project
cd ..
ng new bunnyh-welcome-angular --routing --style=scss --skip-git --package-manager=npm

if [ $? -eq 0 ]; then
    echo "✅ Angular project created successfully!"
    echo ""
    echo "📁 Project location: $(pwd)/bunnyh-welcome-angular"
    echo ""
    echo "Next steps:"
    echo "1. cd bunnyh-welcome-angular"
    echo "2. ng add @angular/material"
    echo "3. Follow the detailed guide in angular-refactor-guide.md"
    echo ""
    echo "🎉 Happy coding!"
else
    echo "❌ Failed to create Angular project"
    exit 1
fi
