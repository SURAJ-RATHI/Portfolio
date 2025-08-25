# Image Placement Instructions

## Where to save kalpkriti_logo.jpg:

Save the `kalpkriti_logo.jpg` image file in the following directory:

```
src/assets/images/kalpkriti_logo.jpg
```

## What I've implemented:

1. **Updated `constants/techData.ts`**: 
   - Added TypeScript interfaces for type safety
   - Changed Kalpkriti's icon from 💼 emoji to `/src/assets/images/kalpkriti_logo.jpg`
   - Added `iconType: 'image'` for Kalpkriti
   - Added `iconType: 'emoji'` for all other items

2. **Updated `components/sections/ProjectsSection.tsx`**:
   - Modified the icon display logic to handle both image and emoji icons
   - Images are displayed with proper sizing and styling
   - Emojis are wrapped in spans for consistent styling

## How it works:

- When `iconType` is `'image'`, the component displays an `<img>` tag
- When `iconType` is `'emoji'` or undefined, it displays the emoji as before
- The image will be automatically sized to match the emoji dimensions

## Next steps:

1. Save `kalpkriti_logo.jpg` in `src/assets/images/`
2. The image will automatically appear in place of the 💼 emoji for Kalpkriti
3. All other projects and skills will continue to show their emoji icons

## Image requirements:

- Format: JPG
- Recommended size: At least 64x64 pixels (will be scaled down automatically)
- File name: `kalpkriti_logo.jpg` (exact match)
