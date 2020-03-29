import React from 'react'
import Routes from '@/router/Routes'
import '@/assets/App.css'
import { Provider } from 'react-redux';
import store, { persistor } from './redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Routes></Routes>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
