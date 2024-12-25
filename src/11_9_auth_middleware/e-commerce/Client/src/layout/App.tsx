import { useEffect, useState } from "react";
import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import requests from "../api/requests";
import { useAppDispatch } from "../hooks/hooks";
import { setCart } from "../features/cart/cartSlice";
import { logout, setUser } from "../features/account/accountSlice";
import Header from "./Header";

function App() {  

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));

    requests.Account.getUser()
      .then(user => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch(error => {
        console.log(error);
        dispatch(logout());
      });

    requests.Cart.get()
      .then(cart => dispatch(setCart(cart)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
      
  }, []);

  if(loading) return <CircularProgress />;

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
