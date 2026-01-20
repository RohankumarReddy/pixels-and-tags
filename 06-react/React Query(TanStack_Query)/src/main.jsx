import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:1000*60
        }
    }
})
createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>

)
