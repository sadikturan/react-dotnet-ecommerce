import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import AboutPage from "../features/AboutPage";
import HomePage from "../features/HomePage";
import ContactPage from "../features/ContactPage";
import CatalogPage from "../features/catalog/CatalogPage";
import ProductDetailsPage from "../features/catalog/ProductDetails";
import ErrorPage from "../features/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";
import RegisterPage from "../features/account/RegisterPage";
import LoginPage from "../features/account/loginPage";
import CheckoutPage from "../features/checkout/CheckoutPage";
import AuthGuard from "./AuthGuard";
import OrderList from "../features/orders/OrderList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { element: <AuthGuard />, children: [
                    { path: "checkout", element: <CheckoutPage /> },
                    { path: "orders", element: <OrderList /> },
                ] 
            },
            { path: "", element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "catalog", element: <CatalogPage /> },
            { path: "cart", element: <ShoppingCartPage /> },
            { path: "catalog/:id", element: <ProductDetailsPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "error", element: <ErrorPage /> },
            { path: "server-error", element: <ServerError /> },
            { path: "not-found", element: <NotFound /> },
            { path : "*", element: <Navigate to="/not-found" />}
        ]
    }
])