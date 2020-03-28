import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

function reducers (state = { login: false }, action) {
  if (action.type === 'login') {
    return { isLogin: true }
  } else if (action.type === 'logout') {
    return { isLogin: false }
  } else {
    return { isLogin: false }
  }
}

const myPersistReducer = persistReducer(persistConfig, reducers)

const store = createStore(myPersistReducer)

export const persistor = persistStore(store)

export default store
