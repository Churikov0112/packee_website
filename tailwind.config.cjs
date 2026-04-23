module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#0B5D4A',
          navy: '#0E1A2B',
          graphite: '#1A1F2E',
          gold: '#C8A45B',
          mist: '#F5F7FB'
        }
      },
      boxShadow: {
        card: '0 12px 32px rgba(14, 26, 43, 0.12)',
        glow: '0 0 0 1px rgba(200, 164, 91, 0.35), 0 14px 40px rgba(11, 93, 74, 0.25)'
      },
      backgroundImage: {
        pitch: 'radial-gradient(circle at 20% 20%, rgba(200,164,91,0.12), transparent 35%), linear-gradient(120deg, rgba(11,93,74,0.92), rgba(14,26,43,0.96))',
        gridline: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
