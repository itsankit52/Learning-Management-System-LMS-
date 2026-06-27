// Import required packages and components
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function Signup() {

    // Show or hide password
    const [showPassword, setShowPassword] = useState(false);

    // Used to move user to another page
    const navigate = useNavigate();

    // Store input values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Default role is student
    const [role, setRole] = useState("student");

    // Loading state for signup button
    const [loading, setLoading] = useState(false);

    // Signup function
    const handleSignup = async () => {

        // Start loading
        setLoading(true);

        try {

            // Send signup data to backend
            const result = await axios.post(
                serverUrl + "/api/auth/signup",
                { name, email, password, role },
                { withCredentials: true }
            );

            console.log(result.data);

            // Stop loading
            setLoading(false);

            // Go to course page after signup
            navigate("/course");

            // Show success message
            toast.success("Signup successfully");

        } catch (error) {

            console.log(error);

            // Show error message
            toast.error("Signup failed");

        } finally {

            // Stop loader in every case
            setLoading(false);
        }
    };

    return (
        // Main background
        <div className="bg-zinc-900 w-screen min-h-screen flex items-center justify-center p-4">

            {/* Signup Form */}
            <form
                className="w-[95%] max-w-6xl min-h-162.5 bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
                onSubmit={(e) => e.preventDefault()}
            >

                {/* ================= Left Section ================= */}
                <div className="md:w-1/2 w-full bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 text-white p-8 md:p-10 flex flex-col justify-between">

                    {/* Brand Information */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

                        {/* Welcome Badge */}
                        <span>Welcome to NOVA COURSE</span>

                        {/* Project Name */}
                        <h1>NOVA COURSE</h1>

                        {/* Small Description */}
                        <p>Smart Learning Platform</p>

                        {/* About Platform */}
                        <p>
                            A modern LMS built to help students learn smarter.
                        </p>

                        {/* Features */}
                        <div>

                            {/* Feature 1 */}
                            <div>
                                📘 Explore structured courses
                            </div>

                            {/* Feature 2 */}
                            <div>
                                📈 Track your learning progress
                            </div>

                            {/* Feature 3 */}
                            <div>
                                🎓 Made for students and educators
                            </div>

                        </div>

                    </div>

                    {/* Footer Links */}
                    <div>

                        {/* Copyright */}
                        <p>© 2026 NOVA COURSE (Ankit).</p>

                        {/* Navigation Links */}
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/course">Courses</Link>
                        </div>

                    </div>

                </div>

                {/* ================= Right Section ================= */}
                <div className="md:w-1/2 w-full bg-white p-8 md:p-10 flex items-center justify-center">

                    <div className="w-full max-w-md">

                        {/* Heading */}
                        <div>
                            <h2>Create Your Account</h2>
                        </div>

                        <div className="space-y-5">

                            {/* Full Name Input */}
                            <div>
                                <label>Full Name</label>

                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label>Email Address</label>

                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Input */}
                            <div>

                                <label>Password</label>

                                <div className="relative">

                                    {/* Password field */}
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                    />

                                    {/* Show/Hide Password Button */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <FiEyeOff />
                                        ) : (
                                            <FiEye />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* Select User Role */}
                            <div>

                                <label>Select Role</label>

                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="student">
                                        Student
                                    </option>

                                    <option value="educator">
                                        Educator
                                    </option>

                                </select>

                            </div>

                            {/* Terms & Privacy */}
                            <div>

                                <input type="checkbox" />

                                <p>
                                    I agree to the Terms and Privacy Policy.
                                </p>

                            </div>

                            {/* Signup Button */}
                            <button
                                type="submit"
                                onClick={handleSignup}
                                disabled={loading}
                            >

                                {/* Show loader while request is processing */}
                                {loading ? (
                                    <ClipLoader
                                        size={30}
                                        color="white"
                                    />
                                ) : (
                                    "SignUp"
                                )}

                            </button>

                        </div>

                        {/* OR Divider */}
                        <div>
                            <span>or</span>
                        </div>

                        {/* Login Link */}
                        <p>
                            Already have an account?
                            <Link to="/login">
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
