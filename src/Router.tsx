import { MainPage, ContactUs } from './Pages/index';

const routers = [
    { path: "/", element: <MainPage /> },
    { path: "/contact-us", element: <ContactUs /> },
]

export default routers;