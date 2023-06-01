import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About'
import Privacy from "../pages/Privacy";
import OrderCompleted from "../pages/OrderCompleted";
import Help from '../pages/Help'
import Admin from "../pages/Admin";
import SignIn from "../pages/SignIn";
import PageNotFound from '../pages/PageNotFound';

const routes = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/admin', element: <Admin />},
    {path: '/about', element: <About />},
    {path: '/policy', element: <Privacy />},
    {path: '/help', element: <Help />},
    {path: '/order-completed', element: <OrderCompleted />},
    {path: '/admin/sign-in', element: <SignIn />},
    {path:'*', element: <PageNotFound />}
])

export default routes;