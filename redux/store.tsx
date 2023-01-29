import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducer'


const persistConfig = {
    key: 'root',
    storage,
}

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer) //enhancer
export let store = createStore(persistedReducer) // creates a store and saves the current store of the store
export let persistor = persistStore(store) //creates an instance store
// enhancer  allows a user to continuer their work from where they left off