import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(
    {
      jsxRuntime: 'automatic',  // Use React's automatic JSX runtime
      include: '**/*.js'  // Make sure Vite processes all .js files with JSX
    }
  )],
  base: "chatify"

})
