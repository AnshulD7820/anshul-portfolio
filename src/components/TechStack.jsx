import { FaJava } from "react-icons/fa";
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiGit,
    SiGithub,
} from "react-icons/si";

const technologies = [
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss, color: "#1572B6" },
    { name: "Java", Icon: FaJava, color: "#ED8B00" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
];

function TechStack() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <p className="text-2xl text-gray-500 mb-8">
                    Technologies I work with
                </p>

                <div className="marquee overflow-hidden">
                    <div className="marquee-track flex w-max">
                        {/* Render the list twice for a seamless loop */}
                        {[0, 1].map((copy) => (
                            <ul
                                key={copy}
                                className="flex shrink-0"
                                aria-hidden={copy === 1}
                            >
                                {technologies.map(({ name, Icon, color }) => (
                                    <li
                                        key={name}
                                        className="mr-12 flex items-center gap-3 text-xl text-gray-400"
                                    >
                                        <Icon size={28} color={color} />
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack