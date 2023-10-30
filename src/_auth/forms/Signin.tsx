import { useState } from "react"
import { Link } from "react-router-dom"

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [formErr, setFormErr] = useState({
        email: "",
        password: ""
    })

    const updateFormData = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newFormErr = { ...formErr };

        if (!formData.email) {
            newFormErr.email = "Please type your email!";
        } else {
            newFormErr.email = "";
        }

        if (!formData.password) {
            newFormErr.password = "Please type your password!";
        } else {
            newFormErr.password = "";
        }

        setFormErr(newFormErr);
    }

    return (
        <div className="px-4 sm:w-420 mx-auto text-center justify-center items-center flex-col ">
            <img src="/assets/images/logo.svg" alt="logo" className=" mx-auto" />
            <h3 className="text-2xl font-bold mt-3">Login to your account</h3>
            <p className="mt-3 mb-3 text-gray-400 text-[14px]">Please enter your details</p>

            <form className="mt-2 pt-4 text-left" onSubmit={handleSubmit}>

                <div className="mb-5">
                    <label htmlFor="email" className="ml-1 text-left  block">Email</label>
                    <input type="email" name="email" id="email"
                        className={`w-full p-2 mt-1 rounded-md bg-slate-700 outline-none ${formErr.email && "border border-rose-400"}`}
                        value={formData.email!}
                        onChange={updateFormData} />

                    {formErr.email && <p className="text-rose-500"> {formErr.email} </p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="ml-1 text-left  block">Password</label>
                    <input type="password" name="password" id="password"
                        className={`w-full p-2 mt-1 rounded-md bg-slate-700 outline-none ${formErr.password && "border border-rose-400"}`}
                        value={formData.password!}
                        onChange={updateFormData} />

                    {formErr.password && <p className="text-rose-500"> {formErr.password} </p>}
                </div>

                <div>
                    <button type="submit" className="bg-indigo-600 w-full p-2 rounded-md mt-3 font-bold">Sign In</button>
                    <p className="mt-4">Don't have an account? <Link to='/signup' className="font-bold underline">Sign Up</Link> </p>
                </div>

            </form>
        </div>
    )
}

export default Signin