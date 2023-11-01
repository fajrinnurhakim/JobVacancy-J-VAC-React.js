import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function JobVacancy() {
    const [dataJob, setDataJob] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [companyCityFilter, setCompanyCityFilter] = useState("");
    const [companyNameFilter, setCompanyNameFilter] = useState("");
    const [salaryMinFilter, setSalaryMinFilter] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleReset = () => {
        setSearchInput("");
        setCompanyCityFilter("");
        setCompanyNameFilter("");
        setSalaryMinFilter("");
        setFilteredData(dataJob);
    };

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

    useEffect(() => {
        const filtered = dataJob.filter((job) =>
            job.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchInput, dataJob]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSearch = () => {
        const filtered = dataJob.filter((job) => {
            return (
                job.title.toLowerCase().includes(searchInput.toLowerCase()) &&
                job.company_city
                    .toLowerCase()
                    .includes(companyCityFilter.toLowerCase()) &&
                job.company_name
                    .toLowerCase()
                    .includes(companyNameFilter.toLowerCase()) &&
                (salaryMinFilter === "" ||
                    job.salary_min >= parseInt(salaryMinFilter))
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div className="bg-lime-50">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Job Vacancy | J-VAC</title>
            </Helmet>
            <div className="p-6">
                <div className="text-center space-y-5">
                    <h1 className="text-4xl font-bold">Browse Jobs</h1>
                    <p className="text-base lg:w-2/3 m-auto">
                        Discover jobs that match your talents and interests.
                        Explore a variety of career opportunities that align
                        with your profile and move forward toward a successful
                        future.
                    </p>
                    <div className="form-control flex-row items-center w-full lg:w-2/3 m-auto">
                        <input
                            type="text"
                            placeholder="Search by title"
                            className="input input-bordered flex-grow"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </div>

                    <div className="form-control flex-col lg:flex-row justify-between w-full lg:w-2/3 m-auto space-y-3 lg:space-y-0">
                        <input
                            type="text"
                            placeholder="Filter by City"
                            className="input input-bordered w-full lg:w-3/12"
                            value={companyCityFilter}
                            onChange={(e) =>
                                setCompanyCityFilter(e.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Filter by Company Name"
                            className="input input-bordered w-full lg:w-3/12"
                            value={companyNameFilter}
                            onChange={(e) =>
                                setCompanyNameFilter(e.target.value)
                            }
                        />
                        <input
                            type="number"
                            placeholder="Filter Min Salary"
                            className="input input-bordered w-full lg:w-3/12"
                            value={salaryMinFilter}
                            onChange={(e) => setSalaryMinFilter(e.target.value)}
                        />
                        <button
                            className="btn btn-secondary"
                            onClick={handleSearch}
                        >
                            Filter
                        </button>
                        <button
                            className="btn btn-warning"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-lime-100 p-2 lg:p-12">
                <div className="text-center pb-5">
                    <h1 className="text-4xl font-bold">Job Vacancy</h1>
                </div>

                <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                    {currentItems.length > 0 ? (
                        currentItems.map((res, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        className="card shadow-md p-2 bg-white h-56"
                                    >
                                        <div className="flex flex-row space-x-2">
                                            <div className="w-12 h-12">
                                                <img
                                                    src={res.company_image_url}
                                                    alt="card"
                                                />
                                            </div>
                                            <div className="flex flex-col w-3/4">
                                                <h1 className="text-xs lg:text-sm font-bold">
                                                    {res.title}
                                                </h1>
                                                <h1 className="text-xs lg:text-sm font-medium">
                                                    {res.company_name}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="border-t-2 p-1 m-1 space-y-2">
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/location.svg"
                                                    alt="card"
                                                    className="w-4 h-4 lg:w-5 lg:h-5"
                                                />
                                                <span className="text-xs lg:text-base ml-2">
                                                    {res.company_city}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/salary.svg"
                                                    alt="card"
                                                    className="w-4 h-4 lg:w-5 lg:h-5"
                                                />
                                                <span className="text-xs lg:text-base ml-2">
                                                    Rp. {res.salary_min}-
                                                    {res.salary_max}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <img
                                                    src="/assets/time.svg"
                                                    alt="card"
                                                    className="w-4 h-4 lg:w-5 lg:h-5"
                                                />
                                                <span className="text-xs lg:text-base ml-2">
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
                        })
                    ) : (
                        <div className="grid place-items-center h-screen w-screen">
                            <img
                                src="/assets/notfound.svg"
                                alt="notfound"
                                className="w-4/12"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-secondary mr-2"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={indexOfLastItem >= filteredData.length}
                        className="btn btn-secondary"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
