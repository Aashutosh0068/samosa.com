import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {

        try {
            let res = await fetch('/api/loginuser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            setEmail('')
            setPassword('')

            let statusCode = res.status

            if (statusCode === 690) {
                toast.warn('Foodie not found ! create a new foodie account',
                    {
                        autoClose: 5000,
                        position: 'top-right',
                        closeOnClick: false,
                        closeButton: false,
                        hideProgressBar: true,
                        className: "mt-16"
                    })
            }
            else if (statusCode === 699) {
                toast.error('Bad Credentials, try with correct password',
                    {
                        autoClose: 5000,
                        position: 'top-right',
                        closeOnClick: false,
                        closeButton: false,
                        hideProgressBar: true,
                        className: "mt-16"
                    }
                )
            }
            else if (statusCode === 200) {
                toast.success('Authentication Sucessfull, enjoy samosas',
                    {
                        autoClose: 5000,
                        position: 'top-right',
                        closeOnClick: false,
                        closeButton: false,
                        hideProgressBar: true,
                        className: "mt-16"
                    })
                const response = await res.json()
                
                localStorage.setItem('token', response.token)
            }
            else {
                toast.error('Unable to login in your Foodie account, please try again',
                    {
                        autoClose: 5000,
                        position: 'top-right',
                        closeOnClick: false,
                        closeButton: false,
                        hideProgressBar: true,
                        className: "mt-16"
                    }
                )
            }
        }
        catch {
            err => err
        }
    }

    return (
        <section className=" -mb-6 sign-container shadow-lg">
            <div className="flex flex-col rounded-xl items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-xl shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 min-h-max rounded-xl space-y-4 md:space-y-6 sm:p-8 opacity-75 border">
                        <p className="text-2xl font-serif font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in in your foodie account
                        </p>
                        <form className="space-y-4 md:space-y-6" onSubmit={e => e.preventDefault() & handleSubmit()}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="samosa@foodie.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block container-auth mb-2 text-md font-medium text-gray-900">Password</label>
                                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 mt-1.5 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required={true} />
                                    </div>
                                    <div className="ml-3 text-md">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-md font-medium text-indigo-600 cursor-pointer underline dark:text-primary-500">Forgot Password</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-amber-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center">Sign in to foodie Account</button>
                            <p className="text-md font-light text-gray-500">
                                don't have an account yet? <a href="/auth/signup" className="font-medium cursor-pointer text-indigo-600 underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;