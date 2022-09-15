import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';

function ErrorFallback() {
  return <div>Somthing Went Wrong..</div>;
}

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GlobalStyle />
        <HelmetProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
