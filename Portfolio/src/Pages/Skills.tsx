import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiAngular,
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiPostman,
    SiVercel,
} from "react-icons/si";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: <FaHtml5 />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
            { name: "JavaScript", icon: <SiJavascript />, level: 90 },
            { name: "TypeScript", icon: <SiTypescript />, level: 88 },
            { name: "React", icon: <FaReact />, level: 92 },
            { name: "Angular", icon: <SiAngular />, level: 80 },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
        ],
    },

    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs />, level: 90 },
            { name: "Express.js", icon: <SiExpress />, level: 88 },
            { name: "MongoDB", icon: <SiMongodb />, level: 88 },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt />, level: 90 },
            { name: "Postman", icon: <SiPostman />, level: 90 },
            { name: "Vercel", icon: <SiVercel />, level: 88 },
        ],
    },
];

const Icons = [
    <FaReact />,
    <SiAngular />,
    <FaNodeJs />,
    <SiExpress />,
    <SiMongodb />,
    <SiTypescript />,
    <SiTailwindcss />,
    <FaGitAlt />,
    <SiPostman />,
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-[#050816] py-24 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-center">
                        My <span className="text-cyan-400">Skills</span>
                    </h2>

                    <p className="text-center text-gray-400 mt-4">
                        Technologies I use to build scalable web applications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mt-16">

                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: groupIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-cyan-400">
                                {group.title}
                            </h3>

                            {group.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="mb-7"
                                >
                                    <div className="flex justify-between items-center mb-2">

                                        <div className="flex items-center gap-3 text-lg">
                                            <span className="text-cyan-400 text-2xl">
                                                {skill.icon}
                                            </span>

                                            {skill.name}
                                        </div>

                                        <span className="text-gray-400">
                                            {skill.level}%
                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.level}%`,
                                            }}
                                            transition={{
                                                duration: 2,
                                            }}
                                            viewport={{ once: true }}
                                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                                        />

                                    </div>

                                </div>
                            ))}

                        </motion.div>
                    ))}

                </div>

                {/* Technology Icons */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24"
                >

                    <h3 className="text-3xl font-bold text-center">
                        Technologies
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8 mt-12">

                        {Icons.map((icon, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 10,
                                }}
                                className="glass w-24 h-24 rounded-2xl flex items-center justify-center text-5xl text-cyan-400"
                            >
                                {icon}
                            </motion.div>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}