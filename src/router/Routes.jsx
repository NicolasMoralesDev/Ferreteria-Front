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
import ProductCategory from "../components/ProductCategory"
import RequireAdminRole from "./RequireAdminRole";
import RequireAuth from "./RequireAuth";
import CompareProduct from "../Pages/CompareProduct";

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
     {
        path: "/productos",
        element: <ProductCategory />,
        errorElement: <Error />

    }, 
    {
        path: "/user_panel",
        element: <RequireAuth><UserPanel /></RequireAuth> ,
        errorElement: <Error />

    },
    {
        path: "/dashboard",
        element: <RequireAuth><UserPanel /> </RequireAuth> ,
        errorElement: <Error />

    },
    {
        path: "/admin_panel",
        element: <RequireAdminRole><AdminPanel /></RequireAdminRole> ,
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
    {
        path: "/comparar",
        element: <CompareProduct />,
        errorElement: <Error />

    },
]);