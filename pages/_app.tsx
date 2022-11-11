
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

export default appWithTranslation(({ Component, pageProps }: AppProps) => {
    return (
        <Component
            {...pageProps}
        />
    )
})
