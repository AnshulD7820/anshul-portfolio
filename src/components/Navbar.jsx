import { useEffect } from "react"
import { useState } from "react"
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

function Navbar() {

    const [active, setActive] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Mark a section "active" it crosses the middle of the screen
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        links.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        });
        return () => observer.disconnect();
    }, [])

    // Close the menu when the user presses Escape.
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        const desktop = window.matchMedia("(min-width: 768px)")
        function handleChange(event) {
            if (event.matches) {
                setIsOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        desktop.addEventListener("change", handleChange)

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            desktop.removeEventListener("change", handleChange)
        }
    }, []);

    return (
        <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-3 md:justify-center">
            {/* Desktop Navbar */}
            <nav
                aria-label="Main navigation"
                className="hidden md:flex items-center gap-8 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl shadow-lg shadow-black/30"
            >
                {links.map(({ label, id }) => {
                    const isActive = active === id;
                    return (
                        <a
                            href={`#${id}`}
                            key={id}
                            aria-current={isActive ? "location" : undefined}
                            className={`relative rounded-full py-2 pl-6 pr-4 text-lg transition-colors ${focus} ${isActive ? "text-white" : "text-gray-400  hover:text-white"}`}
                        >
                            <span
                                className={`absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-400 transition-opacity  ${isActive ? "opacity-100" : "opacity-0"}`}
                            />
                            {label}
                        </a>
                    )
                })}
            </nav>

            {/* Mobile Navbar */}
            <div className="relative w-full max-w-md md:hidden">
                {/* Dimmed backdrop, tap to close */}
                <div
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                    className={`fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                />

                {/* Bar */}
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#171717]/90 py-1.5 pl-6 pr-1.5 shadow-lg shadow-black/30 backdrop-blur-xl">
                    <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className={`rounded-full text-sm font-medium tracking-wide ${focus}`}
                    >
                        ANSHUL
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen((previous) => !previous)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 ${focus}`}
                    >
                        {isOpen ? <FaXmark size={18} /> : <FaBars size={16} />}
                    </button>
                </div>

                {/* Dropdown */}
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className={`absolute inset-x-0 top-full mt-2 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-xl shadow-black/40 backdrop-blur-xl transition-[opacity, transform, visibility] duration-200 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
                >
                    {links.map(({ label, id }) => {
                        const isActive = active === id
                        return (
                            <a
                                href={`#${id}`}
                                key={id}
                                onClick={() => setIsOpen(false)}
                                aria-current={isActive ? "location" : undefined}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base transition-colors ${focus} ${isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                            >
                                <span className={`h-1.5 w-1.5 rounded-full bg-green-400 ${isActive ? "opacity-100" : "opacity-0"}`} />
                                {label}
                            </a>
                        )
                    })}
                </nav>

            </div>
        </header>
    )
}

export default Navbar