/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Pastikan isi Markdown artikel ikut terbawa saat build/deploy Netlify.
  outputFileTracingIncludes: {
    "/artikel/[slug]": ["./CONTENT/03-ARTICLES/posts/**/*.md"],
  },
};

export default nextConfig;
