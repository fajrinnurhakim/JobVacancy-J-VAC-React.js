import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Job() {
    const [dataJob, setDataJob] = useState([]);

    useEffect(() => {
        axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setDataJob([...res.data.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="p-12">
                <div className="text-center pb-5">
                    <h1 className="text-lg font-bold">Job Vacancy</h1>
                </div>
                
                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box bg-lime-50">
                    {dataJob !== null &&
                        dataJob.map((res) => {
                            return (
                                <>
                                    <div className="card shadow-md p-2 bg-white carousel-item h-52">
                                        <div className="flex flex-row space-x-2">
                                            <div className="w-12 h-12">
                                                <img
                                                    src={res.company_image_url}
                                                    alt="card"
                                                />
                                            </div>
                                            <div className="flex flex-col w-3/4">
                                                <h1 className="text-base font-bold">
                                                    {res.title}
                                                </h1>
                                                <h1 className="text-base font-medium">
                                                    {res.company_name}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="border-t-2 p-1 m-1">
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/location.svg"
                                                    alt="card"
                                                    className="w-5 h-5"
                                                />
                                                <span className="ml-2">
                                                    {res.company_city}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/salary.svg"
                                                    alt="card"
                                                    className="w-5 h-5"
                                                />
                                                <span className="ml-2">
                                                    Rp. {res.salary_min}-
                                                    {res.salary_max}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/time.svg"
                                                    alt="card"
                                                    className="w-5 h-5"
                                                />
                                                <span className="ml-2">
                                                    {res.job_tenure}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link
                                                to={`/job-vacancy/${res.id}`}
                                                className="btn btn-secondary w-11/12 absolute bottom-2 left-0 right-0 mx-auto"
                                            >
                                                Detail
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4"></div>
            </div>
        </div>
    );
}
