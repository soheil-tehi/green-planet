import routers from './Router';
import { useRoutes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import './App.scss';

function App() {

  const routes = useRoutes(routers);

  return (
    <>
      <Navbar />
      {routes}
    </>
  )
}

export default App
