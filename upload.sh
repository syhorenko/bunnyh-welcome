#!/bin/bash

# S&Y Website Upload Script
# Usage: ./upload.sh [method] [username] [hostname]
# Methods: sftp, scp, curl-ftp

METHOD=${1:-sftp}
USERNAME=${2:-"your_username"}
HOSTNAME=${3:-"bunnyh.nl"}

echo "🚀 Uploading S&Y website to $HOSTNAME using $METHOD..."

case $METHOD in
    "sftp")
        echo "📁 Using SFTP (interactive mode)..."
        echo "Commands to run once connected:"
        echo "  cd public_html"
        echo "  put index.html"
        echo "  put styles.css"
        echo "  quit"
        echo ""
        sftp $USERNAME@$HOSTNAME
        ;;
    "scp")
        echo "📤 Using SCP (direct upload)..."
        scp index.html styles.css $USERNAME@$HOSTNAME:public_html/
        echo "✅ Files uploaded successfully!"
        ;;
    "curl-ftp")
        echo "📤 Using Curl with FTP..."
        echo "⚠️  Note: You'll need to enter your password"
        curl -T index.html ftp://$USERNAME@$HOSTNAME/public_html/
        curl -T styles.css ftp://$USERNAME@$HOSTNAME/public_html/
        echo "✅ Files uploaded successfully!"
        ;;
    *)
        echo "❌ Invalid method. Use: sftp, scp, or curl-ftp"
        echo ""
        echo "Usage examples:"
        echo "  ./upload.sh sftp your_username bunnyh.nl"
        echo "  ./upload.sh scp your_username bunnyh.nl"
        echo "  ./upload.sh curl-ftp your_username bunnyh.nl"
        ;;
esac

echo ""
echo "🌐 Your website should now be live at: http://$HOSTNAME"
