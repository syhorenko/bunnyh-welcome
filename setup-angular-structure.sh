#!/bin/bash

# Create Angular project structure
echo "Creating Angular project structure..."

# Create core directory structure
mkdir -p src/app/core/{services,guards,interceptors,models}
mkdir -p src/app/shared/{components,directives,pipes,models}
mkdir -p src/app/features/welcome/{components,services,models}
mkdir -p src/app/layout
mkdir -p src/styles

echo "Directory structure created successfully!"
echo ""
echo "Next steps:"
echo "1. Run: ng new bunnyh-welcome-angular --routing --style=scss --skip-git"
echo "2. cd bunnyh-welcome-angular"
echo "3. ng add @angular/material"
echo "4. Follow the component creation steps in the guide"
