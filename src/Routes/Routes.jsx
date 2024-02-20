import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import PrivateRoutes from "./PrivateRoutes";
import Service from "../components/Service/Service";
import { serviceLoader } from "../utils/customLoader";
import Error404 from "../Pages/Error/Error404";

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
                path: '/terms',
                element: <TermsAndCondition />
            }
        ],
        errorElement: <Error404 />
    }
])

export default routes;