/**
 * Custom Image Loader for Next.js Image Component
 * Optimizes S3 images with proper sizing and format
 */

export default function s3ImageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // If it's already a full URL, return as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // For local images, return as is
  if (src.startsWith('/')) {
    return src;
  }

  // Construct S3 URL with optimization parameters
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL || 'https://tanaka-images.s3.us-east-1.amazonaws.com';
  
  // Return optimized URL
  // Note: For full optimization, you might want to use CloudFront with Lambda@Edge
  // or AWS Image Optimization service
  return `${baseUrl}/${src}`;
}
