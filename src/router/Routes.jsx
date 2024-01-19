import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import Cart from "../Pages/Cart/Cart";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import RecoverPassword from "../Pages/RecoverPassword";
import RecuperarPassword from "../Pages/RecuperarPassword";
import UserPanel from "../Pages/UserPanel/UserPanel";
import Help from "../Pages/Help";

export  const routes = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
        errorElement: <Error />
    },
    {
        path: "/carrito",
        element: <Cart />,
        errorElement: <Error />

    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />

    },
/*     {
        path: "/productos",
        element: <Products />,
        errorElement: <Error />

    }, */
    {
        path: "/user_panel",
        element: <UserPanel />,
        errorElement: <Error />

    },
    {
        path: "/dashboard",
        element: <UserPanel />,
        errorElement: <Error />

    },
    {
        path: "/admin_panel",
        element: <AdminPanel />,
        errorElement: <Error />
    },
    {
        path: "/recoverPasword",
        element: <RecoverPassword />,
        errorElement: <Error />

    },
    {
        path: "/recuperarPassword",
        element: <RecuperarPassword />,
        errorElement: <Error />

    },
    {
        path: "/ayuda",
        element: <Help />,
        errorElement: <Error />

    },
]);