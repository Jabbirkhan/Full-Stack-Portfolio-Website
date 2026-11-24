import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FiMail, FiShield, FiArrowRight, FiLock } from 'react-icons/fi';
import { Context } from '../context/Context';
import axiosInstance from '../utls/axiosInstance.js';
import Loader from '../components/Loader.jsx';

const VerifyEmail = () => {
    const { authState, navigate, fetchUserProfile } = useContext(Context);
    const [otp, setOtp] = useState('');
    const [loader, setLoader] = useState(false);

    const onSubmitHandler = async () => {
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }

            setLoader(true);

            const response = await axiosInstance.post(
                '/api/v1/user/verify-email-otp',
                { otp }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                fetchUserProfile();
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    };

    if (loader) {
        return <Loader />;
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6">

            {/* Background Decorations */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

            {/* Verification Card */}
            <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">

                    {/* Icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10">
                        <FiMail className="text-4xl" />
                    </div>

                    {/* Heading */}
                    <div className="mt-8 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-400">
                            <FiShield className="text-sm" />
                            EMAIL VERIFICATION
                        </span>

                        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Verify Your Email
                        </h1>

                        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                            We've sent a verification code to your email address.
                            Please enter the OTP below to verify your account.
                        </p>
                    </div>

                    {/* OTP Input */}
                    <div className="mt-8">
                        <label
                            htmlFor="otp"
                            className="mb-3 block text-sm font-semibold text-slate-200"
                        >
                            Verification Code
                        </label>

                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-500" />

                            <input
                                id="otp"
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.trim())}
                                placeholder="Enter verification OTP"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-4 pl-12 pr-4 text-center text-lg font-semibold tracking-[0.35em] text-white outline-none transition-all duration-200 placeholder:text-sm placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        <p className="mt-3 text-xs leading-5 text-slate-500">
                            Enter the verification code sent to your registered email.
                        </p>
                    </div>

                    {/* Verify Button */}
                    <button
                        onClick={() => onSubmitHandler()}
                        className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0"
                    >
                        Verify Email
                        <FiArrowRight className="text-lg" />
                    </button>

                    {/* Bottom Information */}
                    <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
                        <FiShield className="mt-0.5 shrink-0 text-lg text-blue-400" />

                        <p className="text-xs leading-6 text-slate-400">
                            Email verification helps protect your account and
                            ensures that you can securely access your account
                            features.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-slate-500">
                    Secure Account Verification
                </p>

            </div>
        </div>
    );
};

export default VerifyEmail;
