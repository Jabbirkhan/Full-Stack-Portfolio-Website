import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FiMail, FiShield, FiLock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Context } from '../context/Context';
import axiosInstance from '../utls/axiosInstance.js';
import Loader from '../components/Loader.jsx';

const ForgetPassword = () => {

    const { navigate } = useContext(Context);

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [loader, setLoader] = useState(false);

    const sendResetOtp = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/user/send-reset-password-otp', { email });
            if (response.data.success) {
                toast.success(response.data.message);
                setStep(2);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    const verifyResetOtp = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/user/verify-reset-password-otp', { email, otp });
            if (response.data.success) {
                toast.success(response.data.message);
                setStep(3);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    const resetPassword = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/user/reset-password', { email, otp, newPassword });
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    if (loader) {
        return <Loader />
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6">

            {/* Background Decorations */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

            <div className="relative w-full max-w-lg">

                {/* Main Card */}
                <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">

                    {/* Header */}
                    <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-3xl text-blue-400 shadow-lg shadow-blue-500/10">
                            <FiShield />
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
                            Reset Password
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Follow the steps below to securely recover access to your account.
                        </p>
                    </div>

                    {/* Step Progress */}
                    <div className="mt-10">
                        <div className="flex items-center">

                            <div className="flex flex-col items-center gap-2">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${step >= 1 ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'border-slate-700 bg-slate-800 text-slate-500'}`}>
                                    {step > 1 ? <FiCheckCircle className="text-lg" /> : '01'}
                                </div>
                                <span className={`text-xs font-medium ${step >= 1 ? 'text-blue-400' : 'text-slate-500'}`}>
                                    Email
                                </span>
                            </div>

                            <div className={`mb-6 h-1 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-blue-500' : 'bg-slate-700'}`} />

                            <div className="flex flex-col items-center gap-2">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${step >= 2 ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'border-slate-700 bg-slate-800 text-slate-500'}`}>
                                    {step > 2 ? <FiCheckCircle className="text-lg" /> : '02'}
                                </div>
                                <span className={`text-xs font-medium ${step >= 2 ? 'text-blue-400' : 'text-slate-500'}`}>
                                    Verification
                                </span>
                            </div>

                            <div className={`mb-6 h-1 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-blue-500' : 'bg-slate-700'}`} />

                            <div className="flex flex-col items-center gap-2">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${step >= 3 ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'border-slate-700 bg-slate-800 text-slate-500'}`}>
                                    03
                                </div>
                                <span className={`text-xs font-medium ${step >= 3 ? 'text-blue-400' : 'text-slate-500'}`}>
                                    New Password
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="mt-10">

                        {/* Step 1: Enter Email */}
                        {step === 1 && (
                            <div className="animate-in fade-in duration-300">
                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                                        <FiMail />
                                    </div>

                                    <h2 className="mt-5 text-xl font-semibold text-white">
                                        Enter Your Email
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Enter the email address you used to register. We'll send you a password reset verification code.
                                    </p>
                                </div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value.trim())}
                                    value={email}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    placeholder="Enter your email address"
                                />

                                <button
                                    onClick={() => sendResetOtp()}
                                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0"
                                >
                                    Send Verification Code
                                    <FiArrowRight className="text-lg" />
                                </button>
                            </div>
                        )}

                        {/* Step 2: Verify OTP */}
                        {step === 2 && (
                            <div className="animate-in fade-in duration-300">
                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl text-indigo-400">
                                        <FiShield />
                                    </div>

                                    <h2 className="mt-5 text-xl font-semibold text-white">
                                        Verify Your Email
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        A verification code has been sent to your email. Enter the OTP below to continue resetting your password.
                                    </p>
                                </div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Verification Code
                                </label>

                                <input
                                    type="text"
                                    onChange={(e) => setOtp(e.target.value.trim())}
                                    value={otp}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-center text-lg font-semibold tracking-[0.4em] text-white outline-none transition-all duration-200 placeholder:text-sm placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    placeholder="Enter OTP"
                                />

                                <button
                                    onClick={() => verifyResetOtp()}
                                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0"
                                >
                                    Verify Code
                                    <FiArrowRight className="text-lg" />
                                </button>
                            </div>
                        )}

                        {/* Step 3: Set New Password */}
                        {step === 3 && (
                            <div className="animate-in fade-in duration-300">
                                <div className="mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-2xl text-green-400">
                                        <FiLock />
                                    </div>

                                    <h2 className="mt-5 text-xl font-semibold text-white">
                                        Create New Password
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Your email has been verified. Enter a new password for your account.
                                    </p>
                                </div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    New Password
                                </label>

                                <input
                                    type="text"
                                    onChange={(e) => setNewPassword(e.target.value.trim())}
                                    value={newPassword}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    placeholder="Enter your new password"
                                />

                                <button
                                    onClick={() => resetPassword()}
                                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0"
                                >
                                    Reset Password
                                    <FiArrowRight className="text-lg" />
                                </button>
                            </div>
                        )}

                    </div>

                    {/* Security Notice */}
                    <div className="mt-9 flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
                        <FiShield className="mt-0.5 shrink-0 text-lg text-blue-400" />
                        <p className="text-xs leading-6 text-slate-400">
                            Your account security matters. Never share your verification code or password with anyone.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-slate-500">
                    Secure Account Recovery
                </p>

            </div>
        </div>
    )
}

export default ForgetPassword;
