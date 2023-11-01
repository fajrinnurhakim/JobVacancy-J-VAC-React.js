import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationDashboard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(Cookies.get("user"));

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

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        navigate("/login");
    };
    return (
        <div
            className={`navbar bg-lime-50 shadow-md px-2 lg:px-12 ${
                navbarFixed ? "fixed top-0 left-0 w-full z-50" : ""
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown" onClick={toggleDropdown}>
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    </label>

                    {dropdownOpen && (
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            onClick={closeDropdown}
                        >
                            <li className="hover:bg-secondary rounded-md">
                                <a href="/dashboard">
                                    <img
                                        src="/assets/home.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    Dashboard
                                </a>
                            </li>
                            <li className="hover:bg-secondary rounded-md">
                                <a href="/dashboard/list-job-vacancy">
                                    <img
                                        src="/assets/listjob.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    List job vacancy
                                </a>
                            </li>
                            <li className="hover:bg-secondary rounded-md">
                                <a href="/dashboard/list-job-vacancy/form">
                                    <img
                                        src="/assets/form.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    Form
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="navbar-center">
                <a href="/dashboard">
                    <img
                        className="w-24 h-9"
                        src="/assets/logo.svg"
                        alt="logo"
                    />
                </a>
            </div>
            
            <div className="navbar-end">
                <div
                    className="dropdown dropdown-bottom dropdown-end"
                    onClick={toggleDropdown}
                >
                    <label tabIndex="0" className="btn btn-circle btn-ghost">
                        <img
                            src={user.image_url}
                            alt=""
                            className="rounded-full"
                        />
                    </label>
                    {dropdownOpen && (
                        <ul
                            tabIndex="0"
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li onClick={handleLogout}>
                                <a href="/login">
                                    <img
                                        src="/assets/logout.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    Logout
                                </a>
                            </li>
                            <li className="hover:bg-secondary rounded-md">
                                <a href="/dashboard/profile">
                                    <img
                                        src="/assets/profile.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    Profile
                                </a>
                            </li>
                            <li className="hover:bg-secondary rounded-md">
                                <a href="/dashboard/change-password">
                                    <img
                                        src="/assets/changepassword.svg"
                                        alt="navbar"
                                        className="w-5 h-5"
                                    />
                                    Change password
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
