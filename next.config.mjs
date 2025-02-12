/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: '5mb', // กำหนดขนาดไฟล์สูงสุดเป็น 5MB
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avyvlspxssxihfxzfdgf.supabase.co',
          port: '', // ปล่อยว่างถ้าไม่มีพอร์ต
          pathname: '/storage/v1/object/public/**', // ระบุ path ที่อนุญาตให้โหลดภาพ
        },
      ],
    },
  };
  
  export default nextConfig;
  