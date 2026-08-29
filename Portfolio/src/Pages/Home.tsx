import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import {
    SiReact,
    SiAngular,
    SiNodedotjs,
    SiTypescript,
    SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";
import profileImage from "../assets/Img_01.jpg";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#050816] text-white">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-lg z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

                    <h1 className="text-2xl font-bold text-cyan-400">
                        {"</> Surya P"}
                    </h1>

                    <ul className="hidden md:flex gap-8">
                        <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                    </ul>

                    {/* <button className="bg-cyan-500 px-5 py-2 rounded-full hover:bg-cyan-600">
                        Hire Me
                    </button> */}

                </div>
            </nav>

            {/* Hero Section */}

            <section
                id="home"
                className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-32"
            >

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    className="flex-1"
                >

                    <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                        👋 Hello I'm
                    </span>

                    <h1 className="text-6xl font-extrabold mt-6 leading-tight">
                        Surya P
                    </h1>

                    <h2 className="text-3xl mt-3 text-cyan-400">
                        Full Stack Developer
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg max-w-xl">
                        I build beautiful, fast and scalable web applications
                        using React, Angular, Node.js and MongoDB.
                    </p>

                    <div className="flex gap-5 mt-10">

                        <button className="bg-cyan-500 px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-600">
                            View Projects
                            <FaArrowRight />
                        </button>

                        <button className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-500/10">
                            Download Resume
                        </button>

                    </div>

                    <div className="flex gap-5 text-3xl mt-10">

                        <a href="#" className="hover:text-cyan-400 cursor-pointer">
                            <FaGithub />
                        </a>

                        <a href="#" className="hover:text-cyan-400 cursor-pointer">
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>

                {/* Right Side */}

                <motion.div
                    initial={{ opacity: 0, scale: .7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex justify-center mt-20 md:mt-0"
                >

                    <div className="relative">

                        <div className="w-80 h-80 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 blur-3xl absolute"></div>

                        <img
                            src={profileImage}
                            alt="profile"
                            className="relative w-90 h-105 m-15 rounded-full border-4 border-cyan-500"
                        />

                        <div className="absolute -left-6 top-7 Channing the I don't know. glass p-4 rounded-xl">
                            <SiReact className="text-5xl text-cyan-400" />
                        </div>

                        <div className="absolute right-0 top-10 glass p-4 rounded-xl">
                            <SiAngular className="text-5xl text-red-500" />
                        </div>

                        <div className="absolute -left-10 bottom-40  glass p-4 rounded-xl">
                            <SiNodedotjs className="text-5xl text-green-500" />
                        </div>

                        <div className="absolute -right-7 bottom-40 glass p-4  rounded-xl">
                            <SiTypescript className="text-5xl text-blue-500" />
                        </div>

                        <div className="absolute -bottom-5 right-50 glass p-4 rounded-xl">
                            <SiMongodb className="text-5xl text-green-400" />
                        </div>

                    </div>

                </motion.div>

            </section>

        </div>
    );
}