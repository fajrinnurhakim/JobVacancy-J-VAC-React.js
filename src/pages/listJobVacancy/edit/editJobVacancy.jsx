import PropTypes from "prop-types";
export default function EditJobVacancy(props) {
    const {
        isEditing,
        editFormData,
        handleInputChange,
        handleEdit,
        handleCancel,
    } = props;

    if (!isEditing) {
        return null;
    }

    return (
        <div>
            <div className="w-full p-3 mx-auto bg-white card">
                <h1 className="text-4xl font-bold text-center">
                    Update Job Vacancy
                </h1>
                <div className="w-full space-y-2 form-control">
                    <div className="flex flex-row space-x-5">
                        <div className="w-full">
                            <label className="label" htmlFor="title">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input
                                id="title"
                                type="text"
                                name="title"
                                value={editFormData.title}
                                onChange={(e) =>
                                    handleInputChange("title", e.target.value)
                                }
                                placeholder="Title"
                                className="w-full input input-bordered"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="label" htmlFor="company_name">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input
                                id="company_name"
                                type="text"
                                name="company_name"
                                value={editFormData.company_name}
                                onChange={(e) =>
                                    handleInputChange(
                                        "company_name",
                                        e.target.value
                                    )
                                }
                                placeholder="Company name"
                                className="w-full input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="label" htmlFor="job_description">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea
                            id="job_description"
                            title="job_description"
                            type="text"
                            name="job_description"
                            value={editFormData.job_description}
                            onChange={(e) =>
                                handleInputChange(
                                    "job_description",
                                    e.target.value
                                )
                            }
                            placeholder="Job description"
                            className="w-full textarea textarea-bordered"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="label" htmlFor="job_qualification">
                            <span className="label-text">
                                Job Qualification
                            </span>
                        </label>
                        <textarea
                            id="job_qualification"
                            type="text"
                            name="job_qualification"
                            value={editFormData.job_qualification}
                            onChange={(e) =>
                                handleInputChange(
                                    "job_qualification",
                                    e.target.value
                                )
                            }
                            placeholder="Job qualification"
                            className="w-full textarea textarea-bordered"
                            required
                        />
                    </div>

                    <div className="flex flex-row space-x-5">
                        <div className="w-full">
                            <label className="label" htmlFor="job_type">
                                <span className="label-text">Job Type</span>
                            </label>

                            <select
                                id="job_type"
                                name="job_type"
                                value={editFormData.job_type}
                                onChange={(e) =>
                                    handleInputChange(
                                        "job_type",
                                        e.target.value
                                    )
                                }
                                className="w-full select select-bordered"
                                required
                            >
                                <option value="Hybrid">Hybrid</option>
                                <option value="On site">On site</option>
                                <option value="Work From Home">
                                    Work From Home
                                </option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label className="label" htmlFor="job_tenure">
                                <span className="label-text">Job Tenure</span>
                            </label>
                            <select
                                id="job_tenure"
                                name="job_tenure"
                                value={editFormData.job_tenure}
                                onChange={(e) =>
                                    handleInputChange(
                                        "job_tenure",
                                        e.target.value
                                    )
                                }
                                className="w-full select select-bordered"
                                required
                            >
                                <option value="Kontrak">Kontrak</option>
                                <option value="Magang">Magang</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Freelance">Freelance</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-5">
                        <div className="w-full">
                            <label className="label" htmlFor="salary_min">
                                <span className="label-text">Salary Min</span>
                            </label>
                            <input
                                id="salary_min"
                                type="number"
                                name="salary_min"
                                value={editFormData.salary_min}
                                onChange={(e) =>
                                    handleInputChange(
                                        "salary_min",
                                        e.target.value
                                    )
                                }
                                placeholder="Salary Min"
                                className="w-full input input-bordered"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="label" htmlFor="salary_max">
                                <span className="label-text">Salary Max</span>
                            </label>
                            <input
                                id="salary_max"
                                type="number"
                                name="salary_max"
                                value={editFormData.salary_max}
                                onChange={(e) =>
                                    handleInputChange(
                                        "salary_max",
                                        e.target.value
                                    )
                                }
                                placeholder="Salary Max"
                                className="w-full input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="label" htmlFor="company_image_url">
                            <span className="label-text">
                                Company Image Url
                            </span>
                        </label>
                        <input
                            id="company_image_url"
                            type="text"
                            name="company_image_url"
                            value={editFormData.company_image_url}
                            onChange={(e) =>
                                handleInputChange(
                                    "company_image_url",
                                    e.target.value
                                )
                            }
                            placeholder="Company image url"
                            className="w-full input input-bordered"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="label" htmlFor="company_city">
                            <span className="label-text">Company City</span>
                        </label>
                        <input
                            id="company_city"
                            type="text"
                            name="company_city"
                            value={editFormData.company_city}
                            onChange={(e) =>
                                handleInputChange(
                                    "company_city",
                                    e.target.value
                                )
                            }
                            placeholder="Company city"
                            className="w-full input input-bordered"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="label" htmlFor="job_status">
                            <span className="label-text">Job Status</span>
                        </label>
                        <select
                            type="number"
                            id="job_status"
                            name="job_status"
                            value={editFormData.job_status}
                            onChange={(e) =>
                                handleInputChange("job_status", e.target.value)
                            }
                            className="w-full select select-bordered"
                            required
                        >
                            <option value="0">0(close)</option>
                            <option value="1">1(open)</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full space-y-2">
                        <button
                            className="btn btn-secondary"
                            onClick={handleEdit}
                        >
                            Update Data
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="btn btn-error"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

EditJobVacancy.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    editFormData: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};
