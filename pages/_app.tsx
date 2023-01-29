import styles from "@/styles/Home.module.css";
import type { AppProps } from 'next/app'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import '../styles/app.css'
import Home from "./index";

export default function App({ Component, pageProps }: AppProps) {
  return (

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>

  )
}
