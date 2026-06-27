import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { serverUrl } from "../App";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter email and password");
            return;
        }

        try {
            setLoading(true);

            const result = await axios.post(
                `${serverUrl}/api/auth/login`,
                { email, password },
                { withCredentials: true }
            );

            console.log(result.data);
            toast.success("Login successful");

            // login successful hone ke baad redirect course page 
            navigate("/course"); 
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-zinc-900 w-screen min-h-screen flex items-center justify-center p-4">
            <form
                onSubmit={handleLogin}
                className="w-[95%] max-w-6xl min-h-[650px] bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* left part */}
                <div className="md:w-1/2 w-full bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 text-white p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl font-bold shadow-md">
                                NC
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">NOVA COURSE</h2>
                            </div>
                        </div>

                        {/* Main text */}
                        <div className="mt-10">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Welcome back
                            </h1>
                            <p className="mt-4 text-white/80 text-base leading-7 max-w-lg">
                                Sign in to continue your learning journey, access your enrolled
                                courses, and keep track of your progress on NOVA COURSE.
                            </p>
                        </div>

                        {/* Features of courses*/}
                        <div className="mt-10 space-y-5">
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                                    📚
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Continue Courses</h3>
                                    <p className="text-white/80 text-sm">
                                        Pick up where you left off with your enrolled learning paths.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                                    📈
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Track Progress</h3>
                                    <p className="text-white/80 text-sm">
                                        View your achievements, progress reports, and course completion.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                                    🎓
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Learn with Experts</h3>
                                    <p className="text-white/80 text-sm">
                                        Access mentor-led content and stay connected with your learning goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/75 mt-8">
                        <p>© 2026 NOVA COURSE (Ankit).</p>

                        <div className="flex items-center gap-5 flex-wrap justify-center">
                            <Link to="/" className="hover:text-white transition">
                                Home
                            </Link>
                            <Link to="/about" className="hover:text-white transition">
                                About
                            </Link>
                            <Link to="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                            <Link to="/courses" className="hover:text-white transition">
                                Courses
                            </Link>
                        </div>
                    </div>
                </div>

                {/* right part */}
                <div className="md:w-1/2 w-full bg-white p-8 md:p-10 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Sign In
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Enter your credentials to access your account.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl outline-none px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>

                                    <span className="text-sm text-indigo-600 cursor-pointer hover:underline">
                                        Forgot your password?
                                    </span>
                                </div>

                                <div className="relative">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full rounded-xl outline-none px-4 py-3 pr-12 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition"
                                    >
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember me */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="checkbox" className="accent-indigo-600" />
                                    Remember me
                                </label>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-xl font-semibold transition duration-300 flex items-center justify-center ${
                                    loading
                                        ? "bg-indigo-400 cursor-not-allowed"
                                        : "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                                }`}
                            >
                                {loading ? <ClipLoader size={24} color="white" /> : "Sign In"}
                            </button>
                        </div>

                        {/* divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-gray-400 text-sm">or</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>

                        {/* signup */}
                        <p className="text-center text-gray-500 mt-7 text-sm">
                            Don’t have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-indigo-600 font-medium hover:underline"
                            >
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;