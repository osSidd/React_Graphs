import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import DimensionContextProvider from './context/dimensions'

const root = ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DimensionContextProvider>
      <App />
    </DimensionContextProvider>
  </React.StrictMode>,
)

export default root