import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { PublicLayout } from '@/modules/common/layouts/PublicLayout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PublicLayout>
      <Component {...pageProps} />
      </PublicLayout>
    </QueryClientProvider>
  )
}
