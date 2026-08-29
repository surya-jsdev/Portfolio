import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaUserTie,
    FaLightbulb,
} from "react-icons/fa";

const CodingImage = new URL("../assets/Coding_Img.jpg", import.meta.url).href;

const cards = [
    {
        icon: <FaGraduationCap size={28} />,
        title: "Education",
        desc: "M.Sc. Information Technology (2025)",
    },
    {
        icon: <FaLaptopCode size={28} />,
        title: "Full-Stack Developer",
        desc: "React • Angular • Node.js • MongoDB",
    },
    {
        icon: <FaUserTie size={28} />,
        title: "Freelancer",
        desc: "Business Websites & ERP Systems",
    },
    {
        icon: <FaLightbulb size={28} />,
        title: "Problem Solver",
        desc: "Clean Code & Modern UI",
    },
];

export default function About() {
    return (
        <section id="about" className="bg-[#08111F] py-20 text-white sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        About <span className="text-cyan-400">Me</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
                        I'm a passionate Full-Stack Developer who enjoys creating modern,
                        responsive and scalable web applications. I focus on performance,
                        clean architecture and great user experiences.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src={CodingImage}
                            alt="coding"
                            className="w-full max-w-md rounded-3xl border border-cyan-500/20 object-cover shadow-2xl sm:max-w-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            {cards.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-2xl p-5 transition duration-300 hover:scale-[1.02] sm:p-6"
                                >
                                    <div className="text-cyan-400">{item.icon}</div>

                                    <h3 className="mt-4 text-lg font-semibold sm:text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="glass rounded-xl p-4 text-center">
                                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                                    1.5+
                                </h3>
                                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                                    Years Learning
                                </p>
                            </div>

                            <div className="glass rounded-xl p-4 text-center">
                                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                                    5+
                                </h3>
                                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                                    Projects
                                </p>
                            </div>

                            <div className="glass rounded-xl p-4 text-center">
                                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                                    100%
                                </h3>
                                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                                    Responsive
                                </p>
                            </div>

                            <div className="glass rounded-xl p-4 text-center">
                                <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                                    24/7
                                </h3>
                                <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                                    Support
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
