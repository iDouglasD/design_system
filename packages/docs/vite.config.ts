/// <reference types="vite/client" />

import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
})
