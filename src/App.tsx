import routers from './Router';
import { useRoutes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import './App.scss';

function App() {

  const routes = useRoutes(routers);

  return (
    <>
      <Navbar />
      {routes}
      <Footer />
    </>
  )
}

export default App
