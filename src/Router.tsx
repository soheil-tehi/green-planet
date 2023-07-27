import { MainPage, ContactUs, AboutUs } from './Pages/index';

const routers = [
    { path: "/", element: <MainPage /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/about-us", element: <AboutUs /> },
]

export default routers;