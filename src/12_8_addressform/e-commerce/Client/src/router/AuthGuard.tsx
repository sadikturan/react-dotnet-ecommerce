import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store/store";

export default function AuthGuard()
{
    const {user} = useAppSelector(state => state.account);
    const location = useLocation();

    if(!user) {
        return <Navigate to="login" state={{from: location}} />
    }

    return <Outlet/>
}