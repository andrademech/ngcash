import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import type { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
