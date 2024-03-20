import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import MapContextProvider from './context/map.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapContextProvider>
      <App />
    </MapContextProvider>
  </React.StrictMode>,
)

export default root