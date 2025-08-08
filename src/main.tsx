import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RegionProvider } from './interface/regionContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RegionProvider>
			<App />
		</RegionProvider>
	</React.StrictMode>
)
