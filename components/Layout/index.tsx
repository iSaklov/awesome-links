import React from 'react'
import CustomHead from './CustomHead'
import Header from './Header'

interface Props {
	children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<CustomHead />
			<Header />
			{children}
		</>
	)
}

export default Layout
