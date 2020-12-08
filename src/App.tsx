import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import GlobalStyles from './styles/global'
import Routes from './routes'

import 'react-notifications-component/dist/theme.css'
import AppProvider from './context'

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <ReactNotification />
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </BrowserRouter>
    </div>
  )
}

export default App
