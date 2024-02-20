import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 10) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    return (
        <div
            className={`navbar bg-lime-50 shadow-md px-2 lg:px-12 ${
                navbarFixed ? "fixed top-0 left-0 w-full z-50" : ""
            }`}
        >
            <div className="navbar-start">
                <details class="dropdown">
                    <summary class="m-1 btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li className="rounded-md hover:bg-secondary">
                            <a href="/">
                                <img
                                    src="/assets/home.svg"
                                    alt="navbar"
                                    className="w-5 h-5"
                                />
                                Home
                            </a>
                        </li>
                        <li className="rounded-md hover:bg-secondary">
                            <a href="/job-vacancy">
                                <img
                                    src="/assets/jobvacancy.svg"
                                    alt="navbar"
                                    className="w-5 h-5"
                                />
                                Job Vacancy
                            </a>
                        </li>
                    </ul>
                </details>

                <a href="/" className="hidden lg:block">
                    <img
                        className="w-24 h-9"
                        src="/assets/logo.svg"
                        alt="logo"
                    />
                </a>
            </div>

            <div className="navbar-center">
                <ul className="hidden px-1 menu menu-horizontal lg:flex">
                    <li className="rounded-md hover:bg-secondary">
                        <a href="/">Home</a>
                    </li>
                    <li className="rounded-md hover:bg-secondary">
                        <a href="/job-vacancy">Job Vacancy</a>
                    </li>
                </ul>
                <a href="/" className="lg:hidden">
                    <img
                        className="w-24 h-9"
                        src="/assets/logo.svg"
                        alt="logo"
                    />
                </a>
            </div>

            <div className="navbar-end">
                {!isLoginPage && !isRegisterPage && (
                    <a href="/login" className="btn btn-sm btn-secondary">
                        LOGIN
                    </a>
                )}
            </div>
        </div>
    );
}
