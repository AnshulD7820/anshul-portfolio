import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const EMAIL = "anshul.ad7820@gmail.com"

const links = [
    {
        label: "Email",
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        Icon: SiGmail,
        external: false,
    },
    {
        label: "GitHub",
        value: "github.com/AnshulD7820",
        href: "https://github.com/AnshulD7820",
        Icon: FaGithub,
        external: true,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/anshul-dhumale",
        href: "https://www.linkedin.com/in/anshul-dhumale-a84615290/",
        Icon: FaLinkedin,
        external: true,
    },
]

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"


function Contact() {
    return (
        <section
            id="contact"
        >
            <div className="max-w-6xl mx-auto px-6 pt-28 pb-10">
                <p className="text-2xl uppercase tracking-widest text-gray-500 mb-10">
                    Get in touch
                </p>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none">
                    LET'S WORK
                    <br />
                    <span className="text-gray-500">TOGETHER</span>
                </h2>

                <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <p className="max-w-lg text-lg md:text-xl text-gray-400 leading-relaxed">
                        I'm open to frontend development opportunities and collaborations.
                        Have something in mind?
                        Let's connect.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={`mailto:${EMAIL}`}
                            className={`inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-medium text-black transition hover:bg-gray-300 ${focus}`}
                        >
                            Email me
                            <FaArrowUpRightFromSquare size={12} />
                        </a>

                        <a
                            href="/RESUME_ANSHUL.pdf"
                            download="Anshul-Resume.pdf"
                            className={`inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 ${focus}`}
                        >
                            <FaDownload size={13} />
                            Resume
                        </a>
                    </div>
                </div>

                <div className="mt-20">
                    {links.map(({ label, value, href, Icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={
                                external ? "noopener noreferrer" : undefined
                            }
                            className={`group flex items-center gap-5 py-6 border-b border-white/10 transition-colors hover:border-white/30 ${focus}`}
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10  text-gray-300 transition group-hover:border-white/30 group-hover:text-white">
                                <Icon size={20} />
                            </span>

                            <div className="min-w-0 flex-1">
                                <h3 className="text-xl md:text-2xl text-gray-200 group-hover:text-white transition-colors">
                                    {label}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500 truncate">
                                    {value}
                                </p>
                            </div>
                            <FaArrowUpRightFromSquare
                                size={14}
                                className="shrink-0 text-gray-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                            />
                        </a>
                    ))}
                </div>

                <footer className="mt-12 flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-600">
                    <p>© {new Date().getFullYear()} Anshul</p>
                    <p>Built with React and Tailwind CSS</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact