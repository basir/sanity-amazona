import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StoreProvider } from '../utils/Store';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </CacheProvider>
  );
}

export default MyApp;
