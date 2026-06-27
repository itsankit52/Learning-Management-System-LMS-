import { Link } from "react-router-dom";

function Courses() {
    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Development",
            level: "Beginner to Advanced",
            duration: "12 Weeks",
            students: "2.4K+",
            instructor: "Ankit Thakur",
            lessons: 48,
            color: "from-indigo-600 to-blue-500",
            icon: "💻",
            desc: "Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and build complete full stack projects."
        },
        {
            id: 2,
            title: "Data Structures & Algorithms",
            category: "Programming",
            level: "Intermediate",
            duration: "10 Weeks",
            students: "1.8K+",
            instructor: "Raju Kumar Thakur",
            lessons: 36,
            color: "from-cyan-600 to-sky-500",
            icon: "🧠",
            desc: "Master arrays, linked lists, trees, graphs, recursion, sorting, searching, and problem solving patterns."
        },
        {
            id: 3,
            title: "Database Management Systems",
            category: "Database",
            level: "Beginner",
            duration: "8 Weeks",
            students: "1.2K+",
            instructor: "NOVA Mentor",
            lessons: 28,
            color: "from-emerald-600 to-teal-500",
            icon: "🗄️",
            desc: "Understand DBMS concepts, SQL, normalization, ER models, indexing, transactions, and database design."
        },
        {
            id: 4,
            title: "Operating Systems Fundamentals",
            category: "Computer Science",
            level: "Beginner to Intermediate",
            duration: "9 Weeks",
            students: "980+",
            instructor: "NOVA Faculty",
            lessons: 32,
            color: "from-pink-600 to-rose-500",
            icon: "⚙️",
            desc: "Explore processes, threads, CPU scheduling, deadlocks, memory management, file systems, and OS basics."
        },
        {
            id: 5,
            title: "AI Tools & Prompt Engineering",
            category: "AI",
            level: "Beginner",
            duration: "6 Weeks",
            students: "1.6K+",
            instructor: "AI Lab",
            lessons: 24,
            color: "from-violet-600 to-fuchsia-500",
            icon: "🤖",
            desc: "Learn practical AI tools, prompt writing, automation ideas, and productivity workflows for modern learners."
        },
        {
            id: 6,
            title: "UI/UX Design for Developers",
            category: "Design",
            level: "Beginner",
            duration: "7 Weeks",
            students: "860+",
            instructor: "Design Mentor",
            lessons: 20,
            color: "from-amber-500 to-orange-500",
            icon: "🎨",
            desc: "Build visually strong interfaces with layout, spacing, typography, color systems, and modern UI practices."
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-900 text-white">
            {/* HERO SECTION */}
            <section className="w-full bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 md:px-12 py-16">
                <div className="max-w-7xl mx-auto">

                    {/* Back button */}
                    <div className="mb-8">
                        <Link
                            to="/"
                            className="inline-flex px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-zinc-100 transition"
                        >
                            Back
                        </Link>
                    </div>

                    {/* Main hero content */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* Left text */}
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Discover courses built for modern learners
                            </h1>

                            <p className="mt-6 text-white/85 text-base md:text-lg leading-8 max-w-2xl">
                                Browse industry-focused courses across development, programming,
                                AI, design, and core computer science subjects. Learn at your pace
                                with structured lessons and guided learning paths.
                            </p>

                            <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 px-5 py-4 backdrop-blur-sm">
                                <p className="text-white/90 text-sm md:text-base leading-7">
                                    <span className="font-semibold">Note:</span> NOVA COURSE is a demo learning platform
                                    developed as a portfolio and project showcase. It is created for
                                    demonstration, learning, and presentation purposes only.
                                </p>
                            </div>
                        </div>

                        {/* Right logo */}
                      
                    </div>
                </div>
            </section>

            {/* FEATURED TITLE */}
            <section className="px-6 md:px-12 py-10">
                <div className="max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
                        <p className="text-zinc-400 mt-3 text-base md:text-lg">
                            Explore curated courses designed to showcase the NOVA COURSE learning experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* COURSE GRID */}
            <section className="px-6 md:px-12 pb-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-zinc-800 rounded-[28px] overflow-hidden border border-white/5 shadow-xl hover:-translate-y-1 transition duration-300"
                        >
                            {/* Top banner */}
                            <div className={`h-44 bg-gradient-to-r ${course.color} p-6 flex flex-col justify-between`}>
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">
                                        {course.category}
                                    </span>
                                    <div className="text-3xl">{course.icon}</div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold leading-snug">
                                        {course.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                <p className="text-zinc-400 leading-7 text-sm md:text-base">
                                    {course.desc}
                                </p>

                                {/* Meta */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5">
                                        <p className="text-xs text-zinc-500">Level</p>
                                        <h4 className="mt-1 font-semibold text-sm">{course.level}</h4>
                                    </div>

                                    <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5">
                                        <p className="text-xs text-zinc-500">Duration</p>
                                        <h4 className="mt-1 font-semibold text-sm">{course.duration}</h4>
                                    </div>

                                    <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5">
                                        <p className="text-xs text-zinc-500">Students</p>
                                        <h4 className="mt-1 font-semibold text-sm">{course.students}</h4>
                                    </div>

                                    <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5">
                                        <p className="text-xs text-zinc-500">Lessons</p>
                                        <h4 className="mt-1 font-semibold text-sm">{course.lessons} Lessons</h4>
                                    </div>
                                </div>

                                {/* Instructor */}
                                <div className="mt-6 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs text-zinc-500">Instructor</p>
                                        <h4 className="mt-1 font-semibold">{course.instructor}</h4>
                                    </div>

                                    <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition">
                                        View Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY LEARN WITH US */}
            <section className="px-6 md:px-12 pb-16">
                <div className="max-w-7xl mx-auto rounded-4xl bg-zinc-800 border border-white/5 p-8 md:p-10">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Why learn with NOVA COURSE?
                        </h2>
                        <p className="mt-4 text-zinc-400 leading-8 text-base md:text-lg">
                            NOVA COURSE is designed as a modern LMS demo platform where students can
                            explore curated courses, monitor progress, and experience a premium
                            digital learning environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <div className="bg-zinc-900 rounded-3xl p-6 border border-white/5">
                            <div className="text-3xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold">Structured Learning</h3>
                            <p className="mt-3 text-zinc-400 leading-7">
                                Courses are designed with lessons, modules, and guided learning flow.
                            </p>
                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-6 border border-white/5">
                            <div className="text-3xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold">Track Progress</h3>
                            <p className="mt-3 text-zinc-400 leading-7">
                                Students can monitor milestones, learning activity, and completion.
                            </p>
                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-6 border border-white/5">
                            <div className="text-3xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold">Modern Experience</h3>
                            <p className="mt-3 text-zinc-400 leading-7">
                                A clean, engaging, and premium UI designed for modern education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 md:px-12 pb-16">
                <div className="max-w-7xl mx-auto rounded-4xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Start learning with NOVA COURSE
                            </h2>
                            <p className="mt-4 text-white/85 leading-8">
                                Explore demo courses, experience the LMS interface, and showcase a modern
                                learning platform.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/signup"
                                className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-zinc-100 transition"
                            >
                                Create Account
                            </Link>

                            <Link
                                to="/login"
                                className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Courses;