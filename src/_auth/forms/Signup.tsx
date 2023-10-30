import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const [formErr, setFormErr] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const updateFormData = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newFormErr = { ...formErr };

        if (!formData.name || formData.name.length < 3) {
            newFormErr.name = "Please type your full name!";
        } else {
            newFormErr.name = "";
        }

        if (!formData.username || formData.username.length < 5) {
            newFormErr.username = "Please type a valid username!";
        } else {
            newFormErr.username = "";
        }

        if (!formData.email || formData.email.length < 9) {
            newFormErr.email = "Please type a valid email!";
        } else {
            newFormErr.email = "";
        }

        if (!formData.password) {
            newFormErr.password = "Please type a password!";
            console.log("try");
            console.log(formData.password);

        } else {
            if (formData.password.length < 5) {
                console.log("try2");
                newFormErr.password = "Password must be over 5 chars!";
            } else {
                newFormErr.password = "";
            }
        }



        setFormErr(newFormErr);
    }

    return (
        <div className="px-4 sm:w-420 mx-auto text-center justify-center items-center flex-col ">
            <img src="/assets/images/logo.svg" alt="logo" className=" mx-auto" />
            <h3 className="text-2xl font-bold mt-3">Create a new account</h3>
            <p className="mt-3 mb-3 text-gray-400 text-[14px]">To use Snapgram, please enter your details</p>

            <form className="mt-2 pt-4 text-left" onSubmit={handleSubmit}>

                <div className="mb-5">
                    <label htmlFor="name" className="ml-1 text-left  block">Name</label>
                    <input type="text" name="name" id="name"
                        className={`w-full p-2 mt-1 rounded-md bg-slate-700 outline-none ${formErr.name && "border border-rose-400"}`}
                        value={formData.name!}
                        onChange={updateFormData} />

                    {formErr.name && <p className="text-rose-500"> {formErr.name} </p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="username" className="ml-1 text-left  block">Username</label>
                    <input type="text" name="username" id="username"
                        className={`w-full p-2 mt-1 rounded-md bg-slate-700 outline-none  ${formErr.username && "border border-rose-400"}`}
                        value={formData.username!}
                        onChange={updateFormData} />

                    {formErr.username && <p className="text-rose-500"> {formErr.username} </p>}
                </div>

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
                    <button type="submit" className="bg-indigo-600 w-full p-2 rounded-md mt-3 font-bold">Sign Up</button>
                    <p className="mt-4">Have an account? <Link to='/signin' className="font-bold underline">Sign In</Link> </p>
                </div>

            </form>
        </div>
    )
}

export default Signup