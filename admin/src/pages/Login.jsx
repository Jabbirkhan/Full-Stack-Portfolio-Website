import React, { useContext, useState } from 'react'
import { FiShield, FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { Context } from '../context/Context'
import axiosInstance from '../utils/axiosInstance.js'
import Loader from '../components/Loader.jsx'

const Login = () => {

  const { setAuthState, navigate } = useContext(Context)

  const [state, setState] = useState('login')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [loader, setLoader] = useState(false)

  const onSubmithandler = async (e) => {

    e.preventDefault()

    try {

      if (state === 'login') {

        setLoader(true)

        const response = await axiosInstance.post(
          `/api/v1/admin/login`,
          { email, password }
        )

        if (response.data.success) {

          setAuthState('authenticated')
          navigate("/")
          toast.success(response.data.message || "Login successful")

        }

      } else if (state === 'register') {

        setLoader(true)

        const response = await axiosInstance.post(
          `/api/v1/admin/register`,
          { name, email, password }
        )

        if (response.data.success) {

          setState('login')
          toast.success(response.data.message || "Registration successful")

        }
      }

    } catch (error) {

      toast.error(error.response?.data?.message)

    } finally {

      setLoader(false)

    }
  }

  if (loader) {
    return <Loader />
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 flex items-center justify-center px-4 py-8 sm:px-6">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />


      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />


      {/* Main Card */}

      <div className="relative z-10 w-full max-w-5xl min-h-[620px] grid lg:grid-cols-2 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">


        {/* Left Section */}

        <div className="hidden lg:flex relative bg-gradient-to-br from-blue-600/20 via-gray-900 to-gray-950 p-12 text-white overflow-hidden">

          {/* Decorative Elements */}

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-blue-500/10" />

          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-blue-500/10" />

          <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl" />


          <div className="relative z-10 flex flex-col justify-between w-full">


            {/* Logo */}

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FiShield size={23} />
              </div>

              <div>

                <h1 className="text-xl font-bold text-white">
                  Admin Panel
                </h1>

                <p className="text-xs text-gray-500">
                  Management Dashboard
                </p>

              </div>

            </div>


            {/* Content */}

            <div className="max-w-md">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-5">

                <FiShield size={14} />

                Administrator Access

              </div>


              <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
                Manage everything from one place.
              </h2>


              <p className="text-gray-400 leading-relaxed text-sm xl:text-base">
                Access your administration dashboard to manage
                your platform, users, content and other important
                operations.
              </p>


              {/* Features */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiShield size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-gray-300">
                    Secure administrator authentication
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiCheckCircle size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-gray-300">
                    Centralized platform management
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                    <FiArrowRight size={16} className="text-blue-400" />
                  </div>

                  <span className="text-sm text-gray-300">
                    Fast and reliable dashboard access
                  </span>

                </div>

              </div>

            </div>


            {/* Footer */}

            <div className="flex items-center gap-2 text-xs text-gray-600">

              <FiShield size={14} />

              <span>
                Authorized administrators only
              </span>

            </div>

          </div>

        </div>


        {/* Right Section */}

        <div className="w-full flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">


            {/* Mobile Logo */}

            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <FiShield size={23} />
              </div>

              <div>

                <h1 className="text-lg font-bold text-white">
                  Admin Panel
                </h1>

                <p className="text-xs text-gray-500">
                  Management Dashboard
                </p>

              </div>

            </div>


            {/* Heading */}

            <div className="mb-8">

              <p className="text-sm font-semibold text-blue-400 mb-2">
                {state === 'login' ? 'Welcome back' : 'Get started'}
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {state === 'login' ? 'Admin Login' : 'Create Admin Account'}
              </h2>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {state === 'login'
                  ? 'Sign in to access your administration dashboard.'
                  : 'Create your administrator account to continue.'}
              </p>

            </div>


            {/* Form */}

            <form className="space-y-5" onSubmit={onSubmithandler}>


              {/* Name */}

              {state === 'register' && (

                <div>

                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>

                  <div className="relative">

                    <FiUser
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="w-full bg-gray-800/80 border border-gray-700 text-white placeholder:text-gray-600 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:bg-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                      required
                    />

                  </div>

                </div>

              )}


              {/* Email */}

              <div>

                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FiMail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    placeholder="admin@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full bg-gray-800/80 border border-gray-700 text-white placeholder:text-gray-600 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:bg-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>

                  {state === "login" && (

                    <button
                      type="button"
                      onClick={() => navigate('/forget-password')}
                      className="text-xs text-blue-400 hover:text-blue-300 hover:underline transition cursor-pointer"
                    >
                      Forgot password?
                    </button>

                  )}

                </div>


                <div className="relative">

                  <FiLock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="w-full bg-gray-800/80 border border-gray-700 text-white placeholder:text-gray-600 rounded-xl pl-11 pr-12 py-3.5 outline-none focus:bg-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword
                      ? <FiEyeOff size={18} />
                      : <FiEye size={18} />
                    }
                  </button>

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer"
              >

                {state === 'login'
                  ? 'Login to Dashboard'
                  : 'Create Admin Account'
                }

                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />

              </button>


              {/* Switch */}

              <p className="text-sm text-center text-gray-500 pt-1">

                {state === 'login'
                  ? "Don't have an account? "
                  : "Already have an account? "
                }

                <button
                  type="button"
                  onClick={() => setState(state === 'login' ? 'register' : 'login')}
                  className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition cursor-pointer"
                >
                  {state === 'login'
                    ? 'Register here'
                    : 'Login here'
                  }
                </button>

              </p>

            </form>


            {/* Security Footer */}

            <div className="flex items-center justify-center gap-2 mt-7 pt-5 border-t border-gray-800">

              <FiShield
                size={14}
                className="text-blue-500"
              />

              <p className="text-xs text-gray-600">
                Secure administrator authentication
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login