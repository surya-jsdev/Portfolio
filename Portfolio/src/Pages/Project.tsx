import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import amdoxImage from "../assets/AmdoxErpimg.png";

export default function Projects() {
    const projects = [
        {
            id: 1,

            title: "AMDOX ERP System",

            category: "Full Stack",

            image: amdoxImage,

            description:
                "A modern enterprise ERP system developed to streamline business operations. The application provides role-based authentication, employee management, customer management, inventory tracking, reports, dashboards, and secure REST APIs.",

            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Tailwind CSS",
            ],

            features: [
                "Role Based Authentication",
                "Employee Management",
                "Customer Management",
                "Inventory Module",
                "Analytics Dashboard",
                "REST API Integration",
                "Responsive Design",
            ],

            github: "https://github.com/surya-jsdev/amdox-erp",

            demo: "https://amdox-erp-two.vercel.app",

            featured: true,
        },

        {
            id: 2,

            title: "CRUD Operations",

            category: "Angular",

            image: "/projects/weather.png",

            description:
                "A responsive Angular CRUD application that demonstrates Create, Read, Update, and Delete operations with REST APIs. The application includes search, pagination, form validation, reusable components, and responsive UI.",
            technologies: [
                "Angular",
                "TypeScript",
                "Bootstrap",
                "REST API",
                "RxJS",
            ],

            features: [
                "Create Records",
                "Update Records",
                "Delete Records",
                "Search & Filter",
                "Reactive Forms",
                "REST API Integration",
                "Responsive Design",
            ],

            github: "https://github.com/surya-jsdev/angular-json-crud",

            demo: "https://weather-app.vercel.app",

            featured: true,
        },
    ];
    return (
        <section
            id="projects"
            className="bg-[#08111F] py-24 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                        A selection of projects showcasing my expertise in building
                        enterprise applications and modern React applications.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .2 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl overflow-hidden hover:scale-[1.02] duration-300 border border-cyan-500/20"
                        >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover hover:scale-110 duration-500"
                                />

                            </div>

                            <div className="p-8">

                                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm">
                                    {project.category}
                                </span>

                                <h3 className="text-3xl font-bold mt-5">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-5 leading-7">
                                    {project.description}
                                </p>

                                {/* Technologies */}

                                <div className="flex flex-wrap gap-3 mt-8">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="bg-[#111827] border border-cyan-400/20 px-3 py-2 rounded-lg text-sm"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                {/* Features */}

                                <div className="mt-8">

                                    <h4 className="font-semibold text-cyan-400 mb-4">
                                        Key Features
                                    </h4>

                                    <ul className="grid grid-cols-2 gap-3">

                                        {project.features.map((feature) => (

                                            <li
                                                key={feature}
                                                className="text-gray-300"
                                            >
                                                ✅ {feature}
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                                {/* Buttons */}

                                <div className="flex gap-5 mt-10">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-3 bg-gray-900 px-6 py-3 rounded-xl hover:bg-cyan-500 duration-300"
                                    >
                                        <FaGithub />

                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center gap-3 bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 duration-300"
                                    >
                                        <FaExternalLinkAlt />

                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}