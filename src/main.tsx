import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './i18n'
import './styles/fonts.css'
import './theme/theme.css'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
