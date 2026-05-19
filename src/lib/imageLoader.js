export default function myImageLoader({ src, width, quality }) {
  // This removes the /_next/image proxy and points directly to your R2 assets
  return `${src}?w=${width}&q=${quality || 75}`
}
