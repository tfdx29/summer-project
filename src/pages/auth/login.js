import React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'


const Login = () => {


    const [showPassword, setShowPassword] = React.useState(false)

    const router = useRouter()

    const session = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        const res = await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false,
        })
        if (res.status === 401) {
            toast.error(res.error)
            reset({
                username: data.username,
                password: ''
            })
        }
        if (res.status === 200) {
            router.push('/dashboard')
        }
    }

    if (session.status === 'authenticated') {
        router.push('/dashboard')
    }


    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Login to Get started Bidding! 🎉</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Username</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                            placeholder="Username"
                            {...register('username', { required: 'Username is required' })}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                            placeholder="Password"

                            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}

                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                        <button
                            type="button"
                            className="absolute inset-y-0 end-0 grid place-content-center px-4"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <Eye className="h-4 w-4 text-black" />
                            ) : (
                                <EyeOff className="h-4 w-4 text-black" />
                            )}
                        </button>

                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        No account? {''}
                        <Link className="
                        font-medium text-blue-600 hover:text-blue-500
                        " href="/auth/register">Register</Link>
                    </p>

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login