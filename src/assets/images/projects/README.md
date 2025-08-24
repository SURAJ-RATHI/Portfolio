# Project Images Folder

This folder contains images for your portfolio projects.

## Image Requirements

- **Format**: PNG (recommended) or JPG
- **Size**: 64x64 pixels minimum (128x128 recommended for better quality)
- **Background**: Transparent or solid color that matches your design
- **Style**: Clean, professional, and representative of each project

## File Naming Convention

Use numbered images for your projects:

- `1.png` - Dev100X project image
- `2.png` - Dev-lobby project image  
- `3.png` - Dev-lobby0 project image
- `4.png` - Dev-lobby3 project image

## How to Add Images

1. **Save your project images** in this folder with the names above
2. **Ensure images are high quality** and represent each project well
3. **Keep file sizes reasonable** (under 100KB recommended)
4. **Use consistent dimensions** for all project images

## Image Suggestions

- **Dev100X**: EdTech/education related icon or logo
- **Dev-lobby**: VS Code extension or code flow icon
- **Dev-lobby0**: Similar to Dev-lobby but with slight variation
- **Dev-lobby3**: Similar to Dev-lobby but with slight variation

## Current Project Mapping

```typescript
// In constants/techData.ts
{
  id: "dev100x",
  icon: "/src/assets/images/projects/1.png",  // ← Use 1.png
  // ...
},
{
  id: "dev-lobby", 
  icon: "/src/assets/images/projects/2.png",  // ← Use 2.png
  // ...
},
{
  id: "dev-lobby0",
  icon: "/src/assets/images/projects/3.png",  // ← Use 3.png
  // ...
},
{
  id: "dev-lobby3",
  icon: "/src/assets/images/projects/4.png",  // ← Use 4.png
  // ...
}
```

## Tips

- **Test your images** in both light and dark themes
- **Ensure good contrast** between image and background
- **Keep images simple** - avoid complex designs that may not scale well
- **Use consistent style** across all project images for professional appearance
