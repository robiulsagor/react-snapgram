import { Navigate, Outlet } from "react-router-dom"
import { isAuth } from "../auth"

const RootLayout = () => {

    return (
        <>
            {!isAuth ? (
                <Navigate to="/signin" />
            ) : (
                <Outlet />
            )}
        </>
    )
}

export default RootLayout