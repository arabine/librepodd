
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default {
  plugins: [vue(), VitePWA(
    {
      //includeAssets: ['fonts/*.ttf', 'images/*.png']
      manifest:{
        "name": "LibrePodd",
        "start_url": "index.html",
        "display": "standalone",
        "orientation": "landscape",
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "icons": [{
                "src": "logo48x48.png",
                "sizes": "48x48",
                "type": "image/png"
            }, {
                "src": "logo72x72.png",
                "sizes": "72x72",
                "type": "image/png"
            }, {
                "src": "logo96x96.png",
                "sizes": "96x96",
                "type": "image/png"
            }, {
                "src": "logo144x144.png",
                "sizes": "144x144",
                "type": "image/png"
            }, {
                "src": "logo168x168.png",
                "sizes": "168x168",
                "type": "image/png"
            }, {
                "src": "logo192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            }, {
                "src": "logo512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    
      }
    }
  )],
  // alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// Set alias
    }
  }
  
}
