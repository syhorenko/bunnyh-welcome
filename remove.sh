#!/bin/bash

# S&Y Website Removal Script
# Usage: ./remove.sh [method] [username] [hostname]
# Methods: sftp, ssh

METHOD=${1:-sftp}
USERNAME=${2:-"serg.gorenko@gmail.com"}
HOSTNAME=${3:-"bunnyh.nl"}

echo "🗑️  Removing S&Y website files from $HOSTNAME using $METHOD..."

case $METHOD in
    "sftp")
        echo "📁 Using SFTP (interactive mode)..."
        echo "Commands to run once connected:"
        echo "  cd public_html"
        echo "  rm index.html"
        echo "  rm styles.css"
        echo "  quit"
        echo ""
        sftp $USERNAME@$HOSTNAME
        ;;
    "ssh")
        echo "🔧 Using SSH (direct removal)..."
        ssh $USERNAME@$HOSTNAME "cd public_html && rm -f index.html styles.css"
        echo "✅ Files removed successfully!"
        ;;
    *)
        echo "❌ Invalid method. Use: sftp or ssh"
        echo ""
        echo "Usage examples:"
        echo "  ./remove.sh sftp serg.gorenko@gmail.com bunnyh.nl"
        echo "  ./remove.sh ssh serg.gorenko@gmail.com bunnyh.nl"
        ;;
esac

echo ""
echo "🌐 Your website files have been removed from: http://$HOSTNAME"
