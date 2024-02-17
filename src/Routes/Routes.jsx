import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../components/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default routes;