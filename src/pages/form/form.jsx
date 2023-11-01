import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: null,
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
    });

    const handleCreate = (event) => {
        event.preventDefault();
        const token = Cookies.get("token");

        axios
            .post(
                "https://dev-example.sanbercloud.com/api/job-vacancy",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your job vacancy has been create",
                    timer: 1500,
                });
                navigate("/dashboard/list-job-vacancy");
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="bg-lime-50 py-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Form | J-VAC</title>
            </Helmet>
            <div className="card w-11/12 mx-auto shadow-md p-3 bg-white space-y-5">
                <h1 className="text-4xl text-center font-bold">
                    Create Job Vacancy
                </h1>
                <form onSubmit={handleCreate} className="w-full space-y-2">
                    <div className="flex flex-row space-x-5">
                        <div className="form-control w-full">
                            <label className="label" htmlFor="title">
                                <span className="label-text">
                                    Job Title
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="title"
                                type={"text"}
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div
                            className="form-control w-full"
                            htmlFor="company_name"
                        >
                            <label className="label" htmlFor="company_name">
                                <span className="label-text">
                                    Company Name
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="company_name"
                                type="text"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleInputChange}
                                placeholder="Company name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="job_description">
                            <span className="label-text">
                                Job Description
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <textarea
                            id="job_description"
                            type="text"
                            name="job_description"
                            value={formData.job_description}
                            onChange={handleInputChange}
                            placeholder="Job description"
                            className="textarea textarea-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label" htmlFor="job_qualification">
                            <span className="label-text">
                                Job Qualification
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <textarea
                            id="job_qualification"
                            type="text"
                            name="job_qualification"
                            value={formData.job_qualification}
                            onChange={handleInputChange}
                            placeholder="Job qualification"
                            className="textarea textarea-bordered w-full"
                            required
                        />
                    </div>

                    <div className="flex flex-row w-full space-x-5">
                        <div className="form-control w-full">
                            <label className="label" htmlFor="job_type">
                                <span className="label-text">
                                    Job Type
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <select
                                className="select w-full select-bordered"
                                id="job_type"
                                name="job_type"
                                value={formData.job_type}
                                onChange={handleInputChange}
                                required={!formData.job_type}
                            >
                                <option value="" disabled selected>
                                    Select your job type
                                    <span className="text-red-600">&#42;</span>
                                </option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="On site">On site</option>
                                <option value="Work From Home">
                                    Work From Home
                                </option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor="job_tenure">
                                <span className="label-text">
                                    Job Tenure
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <select
                                className="select w-full select-bordered"
                                id="job_tenure"
                                name="job_tenure"
                                value={formData.job_tenure}
                                onChange={handleInputChange}
                                required={!formData.job_tenure}
                            >
                                <option value="" disabled selected>
                                    Select your job tenure
                                    <span className="text-red-600">&#42;</span>
                                </option>
                                <option value="Kontrak">Kontrak</option>
                                <option value="Magang">Magang</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Freelance">Freelance</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-5">
                        <div className="form-control w-full">
                            <label className="label" htmlFor="salary_min">
                                <span className="label-text">
                                    Salary Min
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="salary_min"
                                type="number"
                                name="salary_min"
                                value={formData.salary_min}
                                onChange={handleInputChange}
                                placeholder="Salary Min"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label" htmlFor="salary_max">
                                <span className="label-text">
                                    Salary Max
                                    <span className="text-red-600">&#42;</span>
                                </span>
                            </label>
                            <input
                                id="salary_max"
                                type="number"
                                name="salary_max"
                                value={formData.salary_max}
                                onChange={handleInputChange}
                                placeholder="Salary Max"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="company_image_url">
                            <span className="label-text">
                                Company Image Url
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="company_image_url"
                            type="text"
                            name="company_image_url"
                            value={formData.company_image_url}
                            onChange={handleInputChange}
                            placeholder="Company image url"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="company_city">
                            <span className="label-text">
                                Company City
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <input
                            id="company_city"
                            type="text"
                            name="company_city"
                            value={formData.company_city}
                            onChange={handleInputChange}
                            placeholder="Company city"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="job_status">
                            <span className="label-text ">
                                Job Status
                                <span className="text-red-600">&#42;</span>
                            </span>
                        </label>
                        <select
                            id="job_status"
                            type="number"
                            name="job_status"
                            placeholder="1 or 0"
                            className="input input-bordered w-full"
                            value={formData.job_status}
                            onChange={handleInputChange}
                            required={!formData.job_status}
                        >
                            <option value="" disabled selected>
                                Select your job status
                            </option>
                            <option value="0">0(close)</option>
                            <option value="1">1(open)</option>
                        </select>
                    </div>
                    <button
                        className="btn btn-secondary w-full"
                        type={"submit"}
                    >
                        Create Data
                    </button>
                </form>
            </div>
        </div>
    );
}
