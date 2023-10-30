import { Navigate, Outlet } from "react-router-dom"
import { isAuth } from "../auth"

const AuthLayout = () => {
    return (
        <>
            {isAuth ? (
                <Navigate to="/home" />
            ) : (
                <>
                    <section className="flex flex-1 flex-row justify-center items-center  h-screen">
                        <div className="bg-red-200 flex-1">
                            <Outlet />
                        </div>

                        <img src="/assets/images/side-img.svg"
                            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                            alt="auth img" />
                    </section>
                </>
            )}
        </>
    )
}

export default AuthLayout