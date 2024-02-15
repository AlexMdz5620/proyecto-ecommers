import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //añado el path para saber la ruta

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //configurar alias para mis componentes con @
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
