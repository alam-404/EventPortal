import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import PrivateRoutes from "./PrivateRoutes";
import Service from "../Pages/Service/Service";
import { serviceLoader } from "../utils/customLoader";
import Error404 from "../Pages/Error/Error404";
import About from "../Pages/About/About";
import ReviewForm from "../Pages/ReviewForm/ReviewForm";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/service/:serviceID',
                element: <PrivateRoutes><Service /></PrivateRoutes>,
                loader: async ({ params }) => await serviceLoader(params.serviceID)
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/review',
                element: <PrivateRoutes><ReviewForm /></PrivateRoutes>
            },
            {
                path: '/terms',
                element: <TermsAndCondition />
            },
        ],
    },
    {
        path: '*',
        element: <Error404 />
    }
])

export default routes;