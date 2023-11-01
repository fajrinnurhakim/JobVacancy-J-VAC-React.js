import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ApplyJob() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        address: "",
        cvlink: "",
        email: "",
        linkedin: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleApply = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Application Submitted Successfully",
            timer: 2000,
        });
        navigate("/job-vacancy");
    };

    return (
        <div className="bg-lime-50 py-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Form Apply Job | J-VAC</title>
            </Helmet>
            <div className="card w-11/12 mx-auto shadow-md p-3 bg-white space-y-5">
                <h1 className="text-4xl text-center font-bold">
                    Form Apply Job
                </h1>
                <form className="w-full space-y-2" onSubmit={handleApply}>
                    <div className="flex flex-row space-x-5">
                        <div className="form-control w-full">
                            <label className="label" htmlFor="name">
                                <span className="label-text">
                                    Name
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="name"
                                type={"text"}
                                name="name"
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor="date">
                                <span className="label-text">
                                    Date Of Birth
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                onChange={handleInputChange}
                                placeholder="Date birth"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="address">
                            <span className="label-text">
                                Address
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                            onChange={handleInputChange}
                            placeholder="address"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="cv">
                            <span className="label-text">
                                Cv Link
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="cv"
                            type="text"
                            name="cv"
                            onChange={handleInputChange}
                            placeholder="link cv"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="email">
                            <span className="label-text">
                                Email<span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="email@yourmail.com"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="linkedin">
                            <span className="label-text">
                                Linkedin
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="linkedin"
                            type="text"
                            name="linkedin"
                            onChange={handleInputChange}
                            placeholder="link linkedin"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button className="btn btn-secondary w-full" type="submit">
                        Apply
                    </button>
                </form>
            </div>
        </div>
    );
}
