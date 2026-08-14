import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Split Three.js and postprocessing into its own chunk — they're huge
                    'three-vendor': ['three', 'postprocessing'],
                    // Split framer-motion separately
                    'framer': ['framer-motion'],
                    // Split react-vertical-timeline separately
                    'timeline': ['react-vertical-timeline-component'],
                    // OGL (LightRays WebGL renderer)
                    'ogl': ['ogl'],
                },
            },
        },
        // Raise warning limit since three.js is legitimately large
        chunkSizeWarningLimit: 1500,
    },
})