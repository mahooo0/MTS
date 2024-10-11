/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['mts.caratcons.az'], // şəkil domeniniz
        unoptimized: true, // Şəkil optimizasiyasını deaktiv edir
    },
    trailingSlash: true, // URL sonuna / əlavə edir
    assetPrefix: './', // Aktivlərin düzgün işləməsi üçün
};

export default nextConfig;
