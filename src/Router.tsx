import {
    MainPage, ContactUs, AboutUs, Login, Cart,
    Register, Products, NotFound, Succulent,
    HousePlants, Cactus, ShowProduct, Blogs, ShowBlog, ShowResult
} from './Pages/index';

const routers = [
    { path: "/", element: <MainPage /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/register", element: <Register /> },
    { path: "/products", element: <Products /> },
    { path: "/products/succulent", element: <Succulent /> },
    { path: "/products/housePlants", element: <HousePlants /> },
    { path: "/products/cactus", element: <Cactus /> },
    { path: "/products/:id", element: <ShowProduct /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blogs/:id", element: <ShowBlog /> },
    { path: "/showResult", element: <ShowResult /> },
    { path: "*", element: <NotFound /> },
]

export default routers;