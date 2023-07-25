import routers from './Routers';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/navbar';

function App() {

  const routes = useRoutes(routers);

  return (
    <>
      <Navbar />
      {/* {routes} */}
    </>
  )
}

export default App
