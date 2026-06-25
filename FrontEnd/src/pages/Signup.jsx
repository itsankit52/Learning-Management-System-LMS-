import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [loading, setLoading] = useState(false)


    const handleSignup = async () => {
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/auth/signup", { name, email, password, role }, { withCredentials: true })

            console.log(result.data);

            setLoading(false)

            navigate("/course");

            toast.success("Signup successfully")
        }
        catch (error) {
            console.log(error);

            toast.error("Signup failed")
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className="bg-zinc-900 w-screen min-h-screen flex items-center justify-center p-4">

            <form className="w-[95%] max-w-6xl min-h-162.5 bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row" onSubmit={(e) => e.preventDefault}>
                {/* left part */}
                <div className="md:w-1/2 w-full bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 text-white p-8 md:p-10 flex flex-col justify-between">

                    {/* Center Brand Content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90">
                            Welcome to NOVA COURSE
                        </span>

                        <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-[0.08em] text-white">
                            NOVA COURSE
                        </h1>

                        <p className="mt-3 text-white/85 text-sm md:text-base font-medium">
                            Smart Learning Platform
                        </p>

                        <p className="mt-4 text-white/75 text-sm md:text-base max-w-md leading-7">
                            A modern LMS built to help students learn smarter and educators teach better
                            through structured courses, progress tracking, and a clean digital learning experience.
                        </p>

                        {/* Feature points */}
                        <div className="mt-8 space-y-3 text-left w-full max-w-sm">
                            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                <span className="text-lg">📘</span>
                                <p className="text-sm md:text-base text-white/90">
                                    Explore curated courses and structured learning paths
                                </p>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                <span className="text-lg">📈</span>
                                <p className="text-sm md:text-base text-white/90">
                                    Track progress, lessons, and milestones in one place
                                </p>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                <span className="text-lg">🎓</span>
                                <p className="text-sm md:text-base text-white/90">
                                    Designed for both students and educators
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/75">
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
                            <Link to="/course" className="hover:text-white transition">
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
                                Create Your Account
                            </h2>
                        </div>

                        <div className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input onChange={(e) => setName(e.target.value)} value={name}
                                    className="w-full rounded-xl outline-none px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email}
                                    className="w-full rounded-xl outline-none px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <input onChange={(e) => setPassword(e.target.value)} value={password}
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

                            {/* Role */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Role
                                </label>
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-60 px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                                >
                                    <option value="student">Student</option>
                                    <option value="educator">Educator</option>
                                </select>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1 accent-indigo-600" />
                                <p className="text-sm text-gray-500 leading-6">
                                    I agree to the{" "}
                                    <span className="text-indigo-600 cursor-pointer hover:underline">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-indigo-600 cursor-pointer hover:underline">
                                        Privacy Policy
                                    </span>.
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl cursor-pointer font-semibold transition duration-300" disabled={loading} onClick={handleSignup}
                            >
                                {loading ? <ClipLoader size={30} color="white" /> : "SignUp"}
                            </button>
                        </div>

                        {/* divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-gray-400 text-sm">or</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>


                        {/* login */}
                        <p className="text-center text-gray-500 mt-7 text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-indigo-600 font-medium hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Signup;