import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Register() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        email: "",
        password: "",
    });

    const [isAgreed, setIsAgreed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isAgreed) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please agree to the Terms and Conditions",
                timer: 1500,
            });
            return;
        }

        axios
            .post("https://dev-example.sanbercloud.com/api/register", formData)

            .then((response) => {
                if (response.data.token) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Account has been create",
                        timer: 1500,
                    });
                    navigate("/login");
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Your Account hasn't been create",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })

            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: error,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="px-6 lg:px-12 py-6 bg-lime-50">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register | J-VAC</title>
            </Helmet>
            <div className="flex flex-col-reverse justify-center items-center lg:flex-row">
                <div className="hidden lg:w-2/5 lg:inline">
                    <img src="/assets/image-hero4.svg" alt="" />
                </div>

                <div className="card w-full md:w-3/5 md:mx-auto lg:w-2/5 shadow-lg bg-white items-center text-center p-4 lg:p-12">
                    <div className="flex flex-col space-y-3 lg:space-y-6 w-full">
                        <h1 className="text-xl lg:text-4xl font-bold">
                            Register
                        </h1>
                        <img
                            src="/assets/logo.svg"
                            alt=""
                            className="w-32 mx-auto"
                        />
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-3 lg:space-y-6"
                        >
                            <div className="form-control w-full">
                                <label className="label" htmlFor="name">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label" htmlFor="image">
                                    <span className="label-text">
                                        Image url
                                    </span>
                                </label>
                                <input
                                    id="image"
                                    type="text"
                                    name="image_url"
                                    value={formData.image_url}
                                    onChange={handleChange}
                                    placeholder="URL Image"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label" htmlFor="email">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="yourmail@mail.com"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label" htmlFor="password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Your password"
                                    className="input input-bordered w-full"
                                    minLength="8"
                                    required
                                />
                            </div>

                            <div className="form-control w-full text-left">
                                <label className="text-left" htmlFor="agree">
                                    <input
                                        id="agree"
                                        type="checkbox"
                                        name="agree"
                                        checked={isAgreed}
                                        onChange={handleCheckboxChange}
                                        className="checkbox-xs"
                                    />
                                    <span className="text-sm text-left">
                                        {" "}
                                        I agree to the Terms and Conditions
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-secondary w-full"
                            >
                                Register
                            </button>
                        </form>

                        <span>
                            Do you have an account?
                            <a
                                href="/login"
                                className="font-bold text-secondary"
                            >
                                {" "}
                                Login
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
