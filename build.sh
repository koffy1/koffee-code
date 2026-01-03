#!/bin/bash

# Production Build Script for Koffee Digital Website

echo "🚀 Building Koffee Digital Website for Production..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
mkdir -p dist/assets/css dist/assets/js

# Build optimized CSS
echo "🎨 Building optimized CSS..."
npx tailwindcss -i ./assets/css/tailwind.css -o ./dist/assets/css/output.css --minify

# Copy and optimize HTML files
echo "📄 Copying HTML files..."
cp *.html dist/

# Copy directory-based pages
echo "📁 Copying directory-based pages..."
cp -r about dist/
cp -r services dist/
cp -r contact dist/

# Copy optimized JavaScript
echo "⚡ Copying optimized JavaScript..."
cp assets/js/app.js dist/assets/js/

# Copy other assets if they exist
if [ -d "assets/images" ]; then
    echo "🖼️  Copying images..."
    cp -r assets/images dist/assets/
fi

if [ -d "assets/fonts" ]; then
    echo "🔤 Copying fonts..."
    cp -r assets/fonts dist/assets/
fi

# Generate sitemap
echo "🗺️  Generating sitemap..."
cat > dist/sitemap.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://digital.koffeeplace.com/</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://digital.koffeeplace.com/about</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://digital.koffeeplace.com/services</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://digital.koffeeplace.com/contact</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>
EOF

# Generate robots.txt
echo "🤖 Generating robots.txt..."
cat > dist/robots.txt << EOF
User-agent: *
Allow: /

Sitemap: https://digital.koffeeplace.com/sitemap.xml
EOF

echo "✅ Production build complete! Files are in the 'dist' directory."
echo "📊 Build summary:"
echo "   - Minified CSS: $(du -h dist/assets/css/output.css | cut -f1)"
echo "   - Optimized JS: $(du -h dist/assets/js/app.js | cut -f1)"
echo "   - Total size: $(du -sh dist | cut -f1)"