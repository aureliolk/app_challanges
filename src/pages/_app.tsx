import '../style/global.css'
import { ChallangeContextsProvider } from '../contexts/ChallangeContexts'


function MyApp({ Component, pageProps }) {
  
  

  return (
    <ChallangeContextsProvider>
      <Component {...pageProps} />
    </ChallangeContextsProvider>
  )
}

export default MyApp
