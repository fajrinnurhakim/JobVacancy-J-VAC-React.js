import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

export default function JobDetail() {
    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then((res) => {
                setJobDetail(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleApply = () => {
        if (jobDetail.job_status === 1) {
            navigate("/apply-job");
        } else {
            Swal.fire({
                title: "Application Error",
                text: "This job vacancy is closed and no longer accepting applications.",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "OK",
            });
            navigate("/job-vacancy");
        }
    };

    return (
        <div className="bg-lime-50">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Job Detail | J-VAC</title>
            </Helmet>
            <div className="card w-11/12 mx-auto shadow-md p-3 bg-white">
                <div className="flex flex-row item-center justify-between">
                    <div className="flex flex-row">
                        <img
                            src={jobDetail.company_image_url}
                            alt="detail"
                            className="w-24 h-24 lg:w-36 lg:h-36 pr-5 border-r-2"
                        />
                        <div className="flex flex-col pl-5 space-y-1">
                            <h1 className="text-xl lg:text-2xl font-bold">
                                {jobDetail.title}
                            </h1>
                            <h1 className="text-sm lg:text-base font-bold text-secondary">
                                {jobDetail.company_name}
                            </h1>
                            <span className="text-sm lg:text-base">
                                <div className="flex items-center">
                                    <img
                                        src="/assets/location.svg"
                                        alt="detail"
                                        className="w-4 h-4 lg:w-5 lg:h-5"
                                    />
                                    <span className="ml-1">
                                        {jobDetail.company_city}
                                    </span>
                                </div>
                            </span>
                            <span className="text-sm lg:text-base">
                                <div className="flex items-center">
                                    <img
                                        src="/assets/time.svg"
                                        alt="detail"
                                        className="w-4 h-4 lg:w-5 lg:h-5"
                                    />
                                    <span className="ml-1">
                                        {jobDetail.job_type}
                                    </span>
                                </div>
                            </span>
                            <span className="text-sm lg:text-base">
                                <div className="flex items-center">
                                    <img
                                        src="/assets/jobtenure.svg"
                                        alt="detail"
                                        className="w-4 h-4 lg:w-5 lg:h-5"
                                    />
                                    <span className="ml-1">
                                        {jobDetail.job_tenure}
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        {jobDetail.job_status === 1 ? (
                            <span className="text-medium font-bold text-secondary">
                                Open
                            </span>
                        ) : (
                            <span className="text-medium font-bold text-error">
                                Closed
                            </span>
                        )}
                        <button
                            onClick={handleApply}
                            className="btn btn-secondary"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            <div className="card w-11/12 m-6 mx-auto shadow-md p-3 space-y-2 bg-white">
                <h1 className="text-xl lg:text-2xl font-bold">Salary</h1>
                <p className="text-sm lg:text-base">
                    <span>Rp. {jobDetail.salary_min}</span> -{" "}
                    <span>{jobDetail.salary_max}</span>
                </p>
                <hr />
                <h1 className="text-xl lg:text-2xl font-bold">
                    Job Description
                </h1>
                <p className="text-sm lg:text-base">
                    {jobDetail.job_description}
                </p>
                <hr />
                <h1 className="text-xl lg:text-2xl font-bold">
                    Job Qualification
                </h1>
                <p className="text-sm lg:text-base">
                    {jobDetail.job_qualification}
                </p>
                <hr />
            </div>
        </div>
    );
}
