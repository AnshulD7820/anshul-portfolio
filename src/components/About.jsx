const education = {
    degree : "B.E. Mechanical Engineering",
    institution : "Prof. Ram Meghe Institute of Technology and Research",
    location : "Badnera, Amravati, Maharashtra",
    years : "2023 - 2027",
    cgpa : "CGPA 8.16",
}

function About() {
    return (
        <section id="about">
            <div className="max-w-6xl mx-auto px-6 py-28">
                {/* Section Heading */}
                <p className="mb-8 text-2xl text-gray-500">
                    About
                </p>

                {/* Main Statement */}
                <div className="grid md:grid-cols-2 gap-8">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight tracking-tight">
                        I'm a Mechanical Engineering student who found my way into {" "}
                        <span className="text-green-400">software development.</span>
                    </h2>

                    <div className="md:pt-2">
                        <p className="lg:text-2xl md:text-2xl text-gray-300 leading-relaxed">
                            I enjoy building responsive web applications,
                            learning new technologies and solving problems
                            through code.
                        </p>

                        <p className="mt-8 text-xl text-gray-400 leading-relaxed">
                            My current focus is frontend development with
                            React and JavaScript, while continuously improving
                            my Data Structures & Algorithms and software
                            engineering fundamentals.
                        </p>
                    </div>
                </div>

                {/* Education  */}
                <div className="mt-5 pt-5 md:mt-10 border-t border-white/10">
                    <p className="mb-5 text-2xl text-gray-500">
                        Education
                    </p>

                    <div className="flex flex-col gap-6 border-b border-white/10 pb-5 md:flex-row md:justify-between md:gap-10">
                        {/* Degree Details */}
                        <div className="min-w-0">
                            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                {education.degree}
                            </h3>

                            <p className="mt-2 max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed">
                                {education.institution}
                            </p>

                            <p className="mt-1 text-base text-gray-500">
                                {education.location}
                            </p>
                        </div>

                        {/* Years + CGPA */}
                        <div className="shrink-0 md:text-right">
                            <p className="text-lg text-gray-300">
                                {education.years}
                            </p>

                            <p className="mt-4 inline-block rounded-full border border-white/15 px-3 py-1 text-sm text-gray-400">
                                {education.cgpa}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About