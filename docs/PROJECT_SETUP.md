# Adding Your Project - Performance Guide

## 🚀 Quick Setup

### 1. Prepare Your Project Image

For optimal performance, your project thumbnail should be:
- **Aspect ratio**: 5:3 (e.g., 500x300px)
- **Format**: JPG or PNG
- **Size**: Ideally under 2MB for processing

### 2. Optimize Your Image

Use our built-in optimization script:

```bash
# Install dependencies (if not already done)
npm install

# Optimize your image
node scripts/optimize-image.js /path/to/your/image.jpg my-project-name

# Example:
node scripts/optimize-image.js ~/Downloads/my-app-screenshot.png todo-app
```

This script will:
- ✅ Generate multiple sizes (500x300, 800x480, 300x180)
- ✅ Create WebP and JPEG versions
- ✅ Generate a blur placeholder for smooth loading
- ✅ Compress files for web optimization

### 3. Add Your Project Data

Edit `src/data/projects.ts` and replace the placeholder project:

```typescript
{
  id: 2, // Use a unique ID
  title: "Your Awesome Project",
  summary: "A brief description of what your project does and the problem it solves. Keep it concise but descriptive.",
  thumbnail: "/images/your-project-name.jpg", // Use the name from step 2
  tags: ["React", "TypeScript", "Tailwind", "API"], // Your tech stack
  color: "#3b82f6", // Choose a color that represents your project
  link: "https://your-project-demo.com" // Live demo or GitHub link
}
```

### 4. Performance Features Included

Your project will automatically benefit from:

- **Next.js Image Optimization**: Automatic format conversion (WebP/AVIF)
- **Lazy Loading**: Images load only when needed
- **Responsive Images**: Different sizes for different screen sizes
- **Blur Placeholders**: Smooth loading experience
- **Optimized Caching**: Better performance on repeat visits

## 🎨 Choosing the Right Color

The `color` field affects:
- Animated border around the project card
- Tag accent colors
- Hover effects

Good color options:
- `#3b82f6` - Blue (tech/professional)
- `#10b981` - Green (nature/health)
- `#f59e0b` - Orange (creative/energetic)
- `#8b5cf6` - Purple (artistic/innovative)
- `#ef4444` - Red (bold/impactful)

## 📝 Writing Effective Project Descriptions

### Good Example:
"A full-stack e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard."

### Why it works:
- ✅ Mentions the type of project
- ✅ Lists key technologies
- ✅ Highlights main features
- ✅ Concise but informative

## 🏷️ Tag Best Practices

- Use **primary technologies** first (React, Vue, Angular)
- Include **key tools** (TypeScript, Tailwind, Firebase)
- Add **notable features** (PWA, Real-time, API)
- Keep to **4-6 tags** maximum for best visual balance

## 🖼️ Image Guidelines

### What makes a good project thumbnail:
- ✅ Clean, professional screenshot
- ✅ Shows the main interface
- ✅ Good contrast and readability
- ✅ Representative of the project's purpose

### Avoid:
- ❌ Cluttered screenshots
- ❌ Too much text in the image
- ❌ Poor quality/blurry images
- ❌ Screenshots with personal data

## 🔧 Troubleshooting

### Image optimization script fails:
1. Ensure the image path is correct
2. Check that the image isn't corrupted
3. Try with a different image format

### Project doesn't appear:
1. Check the projects array syntax in `src/data/projects.ts`
2. Ensure the image exists in `public/images/`
3. Restart the development server

### Performance tips:
- Use the optimized images from the script
- Keep descriptions under 150 characters
- Choose WebP format when possible
- Test on mobile devices

## 🚀 Next Steps

After adding your project:

1. **Test locally**: Run `npm run dev` and check your project appears
2. **Verify mobile**: Test responsiveness on different screen sizes
3. **Check performance**: Use browser dev tools to verify image loading
4. **Deploy**: Your optimized images will automatically be served efficiently

Happy coding! 🎉 