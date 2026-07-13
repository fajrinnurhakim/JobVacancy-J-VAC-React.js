import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function JobVacancy() {
  const [dataJob, setDataJob] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [companyCityFilter, setCompanyCityFilter] = useState('');
  const [companyNameFilter, setCompanyNameFilter] = useState('');
  const [salaryMinFilter, setSalaryMinFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleReset = () => {
    setSearchInput('');
    setCompanyCityFilter('');
    setCompanyNameFilter('');
    setSalaryMinFilter('');
    setFilteredData(dataJob);
  };

  useEffect(() => {
    axios
      .get('https://final-project-api-alpha.vercel.app/api/jobs')
      .then((res) => {
        setDataJob([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filtered = dataJob.filter((job) =>
      job.title.toLowerCase().includes(searchInput.toLowerCase()),
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
        (salaryMinFilter === '' || job.salary_min >= parseInt(salaryMinFilter))
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
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-bold">Browse Jobs</h1>
          <p className="m-auto text-base lg:w-2/3">
            Discover jobs that match your talents and interests. Explore a
            variety of career opportunities that align with your profile and
            move forward toward a successful future.
          </p>
          <div className="flex-row items-center w-full m-auto form-control lg:w-2/3">
            <input
              type="text"
              placeholder="Search by title"
              className="flex-grow input input-bordered"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          <div className="flex-col justify-between w-full m-auto space-y-3 form-control lg:flex-row lg:w-2/3 lg:space-y-0">
            <input
              type="text"
              placeholder="Filter by City"
              className="w-full input input-bordered lg:w-3/12"
              value={companyCityFilter}
              onChange={(e) => setCompanyCityFilter(e.target.value)}
            />
            <input
              type="text"
              placeholder="Filter by Company Name"
              className="w-full input input-bordered lg:w-3/12"
              value={companyNameFilter}
              onChange={(e) => setCompanyNameFilter(e.target.value)}
            />
            <input
              type="number"
              placeholder="Filter Min Salary"
              className="w-full input input-bordered lg:w-3/12"
              value={salaryMinFilter}
              onChange={(e) => setSalaryMinFilter(e.target.value)}
            />
            <button className="btn btn-secondary" onClick={handleSearch}>
              Filter
            </button>
            <button className="btn btn-warning" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 bg-lime-100 lg:p-12">
        <div className="pb-5 text-center">
          <h1 className="text-4xl font-bold">Job Vacancy</h1>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {currentItems.length > 0 ? (
            currentItems.map((res, index) => {
              return (
                <>
                  <div key={index} className="h-56 p-2 bg-white shadow-md card">
                    <div className="flex flex-row space-x-2">
                      <div className="w-12 h-12">
                        <img src={res.company_image_url} alt="card" />
                      </div>
                      <div className="flex flex-col w-3/4">
                        <h1 className="text-xs font-bold lg:text-sm">
                          {res.title}
                        </h1>
                        <h1 className="text-xs font-medium lg:text-sm">
                          {res.company_name}
                        </h1>
                      </div>
                    </div>
                    <div className="p-1 m-1 space-y-2 border-t-2">
                      <div className="flex items-center">
                        <img
                          src="/assets/location.svg"
                          alt="card"
                          className="w-4 h-4 lg:w-5 lg:h-5"
                        />
                        <span className="ml-2 text-xs lg:text-base">
                          {res.company_city}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="/assets/salary.svg"
                          alt="card"
                          className="w-4 h-4 lg:w-5 lg:h-5"
                        />
                        <span className="ml-2 text-xs lg:text-base">
                          Rp. {res.salary_min}-{res.salary_max}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <img
                          src="/assets/time.svg"
                          alt="card"
                          className="w-4 h-4 lg:w-5 lg:h-5"
                        />
                        <span className="ml-2 text-xs lg:text-base">
                          {res.job_tenure}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link
                        to={`/job-vacancy/${res.id}`}
                        className="absolute left-0 right-0 w-11/12 mx-auto btn btn-secondary bottom-2"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="grid w-screen h-screen place-items-center">
              <img
                src="/assets/notfound.svg"
                alt="notfound"
                className="w-4/12"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 btn btn-secondary"
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
