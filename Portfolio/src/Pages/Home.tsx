import { useState } from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import {
    SiReact,
    SiAngular,
    SiNodedotjs,
    SiTypescript,
    SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Project";
import resumePdf from "../assets/Surya_Dev.pdf";

const profileImage = new URL("../assets/Img_01.jpg", import.meta.url).href;
const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#050816] text-white">
            <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800/80 bg-[#050816]/80 backdrop-blur-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
                    <a href="#home" className="text-xl font-bold text-cyan-400 sm:text-2xl">
                        {"</> Surya P"}
                    </a>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900/70 p-2 text-lg text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <ul className="hidden items-center gap-3 text-sm text-gray-300 md:flex md:gap-6 md:text-base">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="transition hover:text-cyan-400">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {menuOpen && (
                    <div className="border-t border-gray-800/80 bg-[#050816]/95 px-4 py-3 md:hidden">
                        <ul className="flex flex-col gap-2 text-sm text-gray-300">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block rounded-lg px-3 py-2 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            <section
                id="home"
                className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:pt-32"
            >
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-center lg:w-1/2 lg:text-left"
                >
                    <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 sm:text-base">
                        👋 Hello I'm
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Surya P
                    </h1>

                    <h2 className="mt-3 text-2xl text-cyan-400 sm:text-3xl">
                        Full Stack Developer
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base text-gray-400 sm:text-lg lg:mx-0">
                        I build beautiful, fast and scalable web applications using React,
                        Angular, Node.js and MongoDB.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <a href="#projects" className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600 sm:px-8">
                            View Projects
                            <FaArrowRight />
                        </a>

                        <a
                            href={resumePdf}
                            download="Surya_Dev.pdf"
                            className="rounded-xl border border-cyan-400 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/10 sm:px-8"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-8 flex justify-center gap-5 text-2xl text-gray-200 sm:text-xl lg:justify-start">
                        <a href="https://github.com/surya-jsdev" className="transition hover:text-cyan-400" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/surya-p-4ba4a9236" className="transition hover:text-cyan-400" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex w-full justify-center lg:w-1/2"
                >
                    <div className="relative flex w-full items-center justify-center">
                        <div className="absolute h-52 w-52 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-70 blur-3xl sm:h-72 sm:w-72"></div>

                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="profile"
                                className="relative h-64 w-64 rounded-full border-4 border-cyan-500 object-center shadow-[0_0_35px_rgba(34,211,238,0.35)] bg:center sm:h-80 sm:w-80 lg:h-[350px] lg:w-[300px]"
                            />

                            <div className="glass absolute -left-2 top-6 rounded-xl p-2.5 sm:-left-6 sm:top-10 sm:p-3">
                                <SiReact className="text-2xl text-cyan-400 sm:text-4xl lg:text-4xl" />
                            </div>

                            <div className="glass absolute right-0 top-8 rounded-xl p-2.5 sm:right-2 sm:top-10 sm:p-3">
                                <SiAngular className="text-2xl text-red-500 sm:text-4xl lg:text-4xl" />
                            </div>

                            <div className="glass absolute -left-4 bottom-20 rounded-xl p-2.5 sm:-left-8 sm:bottom-24 sm:p-3">
                                <SiNodedotjs className="text-2xl text-green-500 sm:text-4xl lg:text-4xl" />
                            </div>

                            <div className="glass absolute -right-2 bottom-20 rounded-xl p-2.5 sm:-right-6 sm:bottom-24 sm:p-3">
                                <SiTypescript className="text-2xl text-blue-500 sm:text-4xl lg:text-4xl" />
                            </div>

                            <div className="glass absolute bottom-1 right-2 rounded-xl p-2.5 sm:bottom-2 sm:right-4 sm:p-3">
                                <SiMongodb className="text-2xl text-green-400 sm:text-4xl  lg:text-4xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* About section */}
            <About />
            {/* Skills Section */}
            <Skills />

            {/* Project Section */}
            <Projects />
        </div>
    );
}
