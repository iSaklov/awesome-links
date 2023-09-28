import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import apolloClient from '../lib/apollo'
import Layout from '../components/Layout'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<ApolloProvider client={apolloClient}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</UserProvider>
	)
}

export default MyApp
