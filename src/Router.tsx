import { MainPage, ContactUs, AboutUs, Login, Cart, Register, Products } from './Pages/index';

const routers = [
    { path: "/", element: <MainPage /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/register", element: <Register /> },
    { path: "/products", element: <Products /> },
]

export default routers;