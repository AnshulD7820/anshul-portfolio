import { FaArrowRight } from "react-icons/fa6"
import { FaDownload } from "react-icons/fa6";

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

function Hero() {
    return (
        <section id="home" className="pt-22 pb-15 md:pt-44">
            <div className="max-w-6xl mx-auto px-6">
                {/* Small Introduction */}
                <p className="text-gray-400 mb-6 text-2xl sm:text-2xl">
                    Hi, I'm Anshul
                </p>

                {/* Heading + Short Description */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:items-center gap-8 lg:gap-10 md:grid-cols-2 md:gap-10">
                    <h1 className="min-w-0  text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                        FRONTEND
                        <br />
                        DEVELOPER
                    </h1>

                    <p className="min-w-0  text-xl sm:text-2xl lg:text-2xl text-gray-400 leading-snug max-w-xl">
                        Building responsive, interactive web applications with {" "}
                        <span className="text-green-400">React</span> and modern frontend technologies.
                    </p>
                </div>

                {/* Buttons + Social Icons */}
                <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
                    <a
                        href="#projects"
                        className={`group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-medium text-black transition hover:bg-gray-200 ${focus}`}
                    >
                        View Projects
                        <FaArrowRight
                            size={12}
                            className="transition-transform group-hover:translate-x-1"
                        />
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
        </section>
    )
}

export default Hero