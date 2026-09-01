import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGlobe,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Business Website",
    description:
      "Modern, responsive business websites with SEO optimization, contact forms, and fast performance.",
  },

  {
    icon: <FaLaptopCode />,
    title: "Custom Web Application",
    description:
      "Build secure and scalable web applications using React, Angular, Node.js, Express, and MongoDB.",
  },

  {
    icon: <FaDatabase />,
    title: "ERP & Admin Dashboard",
    description:
      "Develop ERP systems, admin dashboards, inventory, employee, customer, and reporting modules.",
  },

  {
    icon: <FaServer />,
    title: "REST API Development",
    description:
      "Design secure REST APIs with JWT Authentication, role-based access, and MongoDB integration.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive UI Design",
    description:
      "Create mobile-first responsive interfaces that work perfectly across all screen sizes.",
  },

  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Provide bug fixing, performance optimization, feature enhancement, deployment, and long-term support.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#08111F] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            I help startups, schools, and businesses build modern,
            scalable, and user-friendly web applications using the latest
            technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

              {/* <button className="mt-8 text-cyan-400 font-semibold hover:text-cyan-300 transition">
                Learn More →
              </button> */}
            </motion.div>
          ))}

        </div>

        {/* Call To Action */}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-3xl p-10 text-center border border-cyan-500/20"
        >
          <h3 className="text-4xl font-bold">
            Have a Project in Mind?
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's work together to build a high-quality website or web
            application that helps your business grow.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}