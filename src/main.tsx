import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QUERY_CLIENT } from 'services/apis/queryConstants'
import { AppRoutes } from './components/0app/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <AppRoutes />
    </QueryClientProvider>
  </StrictMode>,
)
