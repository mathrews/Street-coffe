import { PrimeReactProvider } from 'primereact/api';
import Ways from './routers';
import "../public/theme.css"
import 'primeicons/primeicons.css';

function App() {

  return (
    <>
      <PrimeReactProvider>
        <Ways/>
      </PrimeReactProvider>
    </>
  )
}

export default App
