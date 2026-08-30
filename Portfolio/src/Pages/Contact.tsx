import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: "error",
                message: "Email settings are missing. Add your EmailJS credentials to the .env file.",
            });
            return;
        }

        if (!formRef.current) return;

        setIsSending(true);

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, {
                publicKey,
            });

            setStatus({
                type: "success",
                message: "Your message has been sent successfully!",
            });
            formRef.current.reset();
        } catch (error) {
            console.error("Email send error:", error);
            setStatus({
                type: "error",
                message: "Something went wrong while sending your message. Please try again.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-[#050816] text-white py-24"
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
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                        Looking for a Full Stack Developer or need a website for your
                        business? Let's discuss your project.
                    </p>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14 mt-16">

                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        <div className="glass rounded-2xl p-6 flex items-center gap-5">

                            <div className="bg-cyan-500 w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Email
                                </h3>

                                <p className="text-gray-400">
                                    surya.jsdev@gmail.com
                                </p>
                            </div>

                        </div>

                        <div className="glass rounded-2xl p-6 flex items-center gap-5">

                            <div className="bg-cyan-500 w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Phone
                                </h3>

                                <p className="text-gray-400">
                                    +91 6369824771
                                </p>
                            </div>

                        </div>

                        <div className="glass rounded-2xl p-6 flex items-center gap-5">

                            <div className="bg-cyan-500 w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Location
                                </h3>

                                <p className="text-gray-400">
                                    Panruti,Cuddalore District ,Tamil Nadu, India
                                </p>
                            </div>

                        </div>

                        {/* Social Links */}

                        <div className="flex gap-5 mt-10">

                            <a
                                href="https://github.com/surya-jsdev"
                                className="glass w-16 h-16 rounded-xl flex justify-center items-center text-2xl hover:bg-cyan-500 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/surya-p-4ba4a9236"
                                className="glass w-16 h-16 rounded-xl flex justify-center items-center text-2xl hover:bg-cyan-500 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </motion.div>

                    {/* Contact Form */}

                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-10"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="bg-[#111827] p-4 rounded-xl outline-none border border-gray-700 focus:border-cyan-400"
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="bg-[#111827] p-4 rounded-xl outline-none border border-gray-700 focus:border-cyan-400"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="bg-[#111827] w-full mt-6 p-4 rounded-xl outline-none border border-gray-700 focus:border-cyan-400"
                        />

                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Write your message..."
                            required
                            className="bg-[#111827] w-full mt-6 p-4 rounded-xl outline-none border border-gray-700 focus:border-cyan-400 resize-none"
                        />

                        {status && (
                            <p
                                className={`mt-4 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"
                                    }`}
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSending}
                            className="mt-8 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-70 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-lg font-semibold transition w-full"
                        >
                            {isSending ? "Sending..." : "Send Message 🚀"}
                        </button>
                    </motion.form>

                </div>

            </div>
        </section>
    );
}