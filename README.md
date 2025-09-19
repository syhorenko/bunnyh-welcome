# S&Y Welcome Page

A simple, elegant welcome page for S&Y with a pastel dark blue color scheme.

## Features

- Responsive design that works on all devices
- Modern glassmorphism design with backdrop blur effects
- Pastel dark blue gradient background
- Clean typography using Inter font
- Smooth hover animations
- Three feature cards highlighting key values

## Files Structure

```
bunnyh-welcome/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with pastel dark blue theme
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## How to Deploy to bunnyh.nl

### Option 1: Using FTP/SFTP (Recommended for simple hosting)

1. **Prepare your files:**
   - Make sure you have `index.html` and `styles.css` ready
   - These are the only files you need to upload

2. **Connect to your hosting:**
   - Use an FTP client like FileZilla, WinSCP, or Cyberduck
   - Connect to your hosting server using your FTP credentials
   - Usually provided by your hosting provider

3. **Upload files:**
   - Navigate to the `public_html` or `www` folder (this is your website root)
   - Upload `index.html` and `styles.css` to this folder
   - Make sure `index.html` is in the root directory

4. **Test your site:**
   - Visit `http://bunnyh.nl` in your browser
   - Your welcome page should be live!

### Option 2: Using cPanel File Manager

1. **Access cPanel:**
   - Log into your hosting control panel (cPanel)
   - Look for "File Manager" in the Files section

2. **Navigate to web root:**
   - Open File Manager
   - Navigate to `public_html` folder

3. **Upload files:**
   - Click "Upload" button
   - Select your `index.html` and `styles.css` files
   - Upload them to the `public_html` directory

### Option 3: Using Git with Hosting Provider

If your hosting provider supports Git deployment:

1. **Push to remote repository:**
   ```bash
   git remote add origin <your-repository-url>
   git push -u origin master
   ```

2. **Set up auto-deployment:**
   - Configure your hosting provider to auto-deploy from your Git repository
   - Many providers like Netlify, Vercel, or GitHub Pages can do this automatically

### Option 4: Using Command Line (if you have SSH access)

1. **Connect via SSH:**
   ```bash
   ssh username@bunnyh.nl
   ```

2. **Navigate to web directory:**
   ```bash
   cd public_html
   ```

3. **Upload files:**
   ```bash
   # Copy files from your local machine
   scp index.html username@bunnyh.nl:public_html/
   scp styles.css username@bunnyh.nl:public_html/
   ```

## Customization

To customize the website:

1. **Change colors:** Edit the CSS variables in `styles.css`
2. **Update content:** Modify the text in `index.html`
3. **Add features:** Add new sections or modify existing ones

## Browser Support

This website works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about this website, contact S&Y team.

---

**Note:** Make sure your hosting provider supports static HTML files and has the necessary permissions set up for your domain.
