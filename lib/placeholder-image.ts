/**
 * Generates a placeholder image URL for lodges/camps without images
 * Uses Unsplash's API for safari-themed placeholder images
 */

export function getPlaceholderImage(type: 'safari' | 'lodge' | 'wildlife' | 'landscape' = 'safari'): string {
  const queries = {
    safari: 'botswana-safari',
    lodge: 'safari-lodge',
    wildlife: 'african-wildlife',
    landscape: 'okavango-delta'
  };
  
  const query = queries[type];
  const width = 1200;
  const height = 800;
  
  // Using Unsplash Source API for placeholder images
  return `https://source.unsplash.com/${width}x${height}/?${query}`;
}

/**
 * Validates if an image URL is accessible
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets image with fallback
 */
export function getImageWithFallback(
  imageUrl: string | undefined,
  fallbackType: 'safari' | 'lodge' | 'wildlife' | 'landscape' = 'safari'
): string {
  if (imageUrl && isValidImageUrl(imageUrl)) {
    return imageUrl;
  }
  
  return getPlaceholderImage(fallbackType);
}
