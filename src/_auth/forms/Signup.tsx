import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className="sm:w-420 mx-auto text-center justify-center items-center flex-col ">
            <img src="/assets/images/logo.svg" alt="logo" className=" mx-auto" />
            <h3 className="text-2xl font-bold mt-3">Create a new account</h3>
            <p className="mt-3 mb-3 text-gray-400 text-[14px]">To use Snapgram, please enter your details</p>

            <form className="mt-2 pt-4 " >

                <div className="mb-5">
                    <label htmlFor="name" className="ml-1 text-left  block">Name</label>
                    <input type="text" name="name" id="name"
                        className="w-full p-2 mt-1 rounded-md bg-slate-700 outline-none" />
                </div>

                <div className="mb-5">
                    <label htmlFor="username" className="ml-1 text-left  block">Username</label>
                    <input type="text" name="username" id="username"
                        className="w-full p-2 mt-1 rounded-md bg-slate-700 outline-none" />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="ml-1 text-left  block">Email</label>
                    <input type="email" name="email" id="email"
                        className="w-full p-2 mt-1 rounded-md bg-slate-700 outline-none" />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="ml-1 text-left  block">Password</label>
                    <input type="password" name="password" id="password"
                        className="w-full p-2 mt-1 rounded-md bg-slate-700 outline-none" />
                </div>

                <div>
                    <button type="submit" className="bg-indigo-600 w-full p-2 rounded-md mt-3 font-bold">Sign Up</button>
                    <p className="mt-4">Have an account? <Link to='/signin' className="font-bold underline">Login</Link> </p>
                </div>

            </form>
        </div>
    )
}

export default Signup