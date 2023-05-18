import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import Account from '../pages/Account'
import SignIn from "../pages/SignIn";

const routes = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/account', element: <Account />},
    {path: '/sign-in', element: <SignIn />},
])

export default routes;