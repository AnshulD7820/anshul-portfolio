import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import projects from "../data/projects";

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

function Projects() {
    return (
        <section id="projects">
            <div className="max-w-6xl mx-auto px-6 py-28">
                {/* Projects */}
                <p className="mb-6 text-2xl text-gray-500">
                    Projects
                </p>
                <div>
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group border-b border-white/10 py-14 first:pt-0 last:border-b-0"
                        >
                            <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[80px_minmax(0,1fr)] gap-4 md:gap-10">
                                {/* Number */}
                                <span className="text-lg text-gray-600">
                                    {project.number}
                                </span>

                                <div>
                                    {/* Project Information */}
                                    <div>
                                        <div>
                                            <h3 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:text-gray-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="mt-5 max-w-2xl text-lg text-gray-400 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <ul className="mt-6 flex flex-wrap gap-2">
                                                {project.technologies.map((technology) => (
                                                    <li
                                                        key={technology}
                                                        className="rounded-full border border-white/15 px-3 py-1 text-sm text-gray-400"
                                                    >
                                                        {technology}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Links  */}
                                        <div className="mt-8 flex flex-wrap gap-3">

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-medium text-black transition hover:bg-gray-200 ${focus}`}
                                            >
                                                Live Demo
                                                <FaArrowUpRightFromSquare
                                                    size={12}
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Browser-style frame, links to the live demo */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Open ${project.title} live demo`}
                                        className={`mt-12 block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors group-hover:border-white/25 ${focus}`}
                                    >
                                        <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                            <span className="min-w-0 flex-1 truncate text-center text-sm text-gray-500">
                                                {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                            </span>
                                            <span className="w-12" />
                                        </div>


                                        <div className="overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} project preview`}
                                                loading="lazy"
                                                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects