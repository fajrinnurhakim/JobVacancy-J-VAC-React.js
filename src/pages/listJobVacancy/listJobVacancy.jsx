import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import DataTable from "react-data-table-component";
import axios from "axios";
import Cookies from "js-cookie";
import EditJobVacancy from "./edit/editJobVacancy";
import Swal from "sweetalert2";

export default function ListJobVacancy() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [companyCityFilter, setCompanyCityFilter] = useState("");
    const [companyNameFilter, setCompanyNameFilter] = useState("");
    const [salaryMinFilter, setSalaryMinFilter] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data]);
                setFilterData([...res.data.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleDelete(id) {
        const token = Cookies.get("token");
        axios
            .delete(
                `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                setData(data.filter((item) => item.id !== id));
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Delete success",
                    timer: 1500,
                });
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: err,
                    timer: 1500,
                });
            });
    }

    const [editFormData, setEditFormData] = useState({
        title: "",
        company_name: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_city: "",
        salary_min: 0,
        salary_max: 0,
        company_image_url: "",
        id: null,
    });

    const handleEdit = () => {
        const token = Cookies.get("token");
        const id = editFormData.id;
        const url = `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`;

        axios
            .put(url, editFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                axios
                    .get("https://dev-example.sanbercloud.com/api/job-vacancy")
                    .then((res) => {
                        setData([...res.data.data]);
                        setFilterData([...res.data.data]);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Update Success",
                            timer: 1500,
                        });
                    })
                    .catch((err) => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: err,
                            timer: 1500,
                        });
                    });
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: err,
                    timer: 1500,
                });
            });
        setIsEditing(false);
    };

    const openEditForm = (job) => {
        setEditFormData({ ...job, id: job.id });
        setIsEditing(true);
    };

    const handleInputChange = (fieldName, value) => {
        setEditFormData({
            ...editFormData,
            [fieldName]: value,
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSearch = (event) => {
        const newData = filterData.filter(
            (row) =>
                row.title
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) &&
                row.company_city
                    .toLowerCase()
                    .includes(companyCityFilter.toLowerCase()) &&
                row.company_name
                    .toLowerCase()
                    .includes(companyNameFilter.toLowerCase()) &&
                (salaryMinFilter === "" ||
                    row.salary_min >= parseInt(salaryMinFilter))
        );
        setData(newData);
    };

    const handleResetFilters = () => {
        setCompanyCityFilter("");
        setCompanyNameFilter("");
        setSalaryMinFilter("");

        const newData = filterData.filter(
            (row) =>
                row.title.toLowerCase().includes("") &&
                row.company_city.toLowerCase().includes("") &&
                row.company_name.toLowerCase().includes("") &&
                (salaryMinFilter === "" || row.salary_min >= parseInt(""))
        );
        setData(newData);
    };

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Company Name",
            selector: (row) => row.company_name,
            sortable: true,
        },
        {
            name: "Description",
            selector: (row) => row.job_description.slice(0, 10),
        },
        {
            name: "Qualification",
            selector: (row) => row.job_qualification.slice(0, 10),
        },
        {
            name: "Type",
            selector: (row) => row.job_type,
            sortable: true,
        },
        {
            name: "Tenure",
            selector: (row) => row.job_tenure,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.job_status,
            cell: (row) => (row.job_status === 1 ? "Open" : "Closed"),
        },
        {
            name: "City",
            selector: (row) => row.company_city,
            sortable: true,
        },
        {
            name: "Salary Min",
            selector: (row) => row.salary_min,
        },
        {
            name: "Salary Max",
            selector: (row) => row.salary_max,
        },
        {
            name: "Company Image",
            cell: (row) => (
                <img
                    src={row.company_image_url}
                    alt="joblist"
                    className="w-12 h-12"
                />
            ),
        },
        {
            name: "Actions",
            cell: (row) => (
                <>
                    <button
                        className="btn btn-sm btn-error mr-2"
                        onClick={() => handleDelete(row.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-sm btn-warning"
                        onClick={() => openEditForm(row)}
                    >
                        Update
                    </button>
                </>
            ),
        },
    ];

    return (
        <div className="bg-lime-50 px-6 py-6 lg:px-12">
            <Helmet>
                <meta charSet="utf-8" />
                <title>List Job Vacancy | J-VAC</title>
            </Helmet>
            <div className="card rounded-lg p-2 bg-white shadow-lg">
                {isEditing ? (
                    <EditJobVacancy
                        isEditing={isEditing}
                        editFormData={editFormData}
                        handleInputChange={handleInputChange}
                        handleEdit={handleEdit}
                        handleCancel={handleCancel}
                    />
                ) : (
                    <DataTable
                        title="Job Vacancies"
                        columns={columns}
                        data={data}
                        pagination
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 15, 20]}
                        paginationTotalRows={data.length}
                        paginationComponentOptions={{
                            rowsPerPageText: "Rows per page:",
                        }}
                        subHeader
                        subHeaderComponent={
                            <>
                                <div className="lg:space-y-2 ">
                                    <input
                                        type="text"
                                        placeholder="Search Title"
                                        onChange={handleSearch}
                                        className="input input-bordered mb-2 w-full lg:w-8/12"
                                    />
                                    <div className="lg:space-x-2 space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Filter by City"
                                            className="input input-bordered w-full lg:w-2/12 mr-2"
                                            value={companyCityFilter}
                                            onChange={(e) =>
                                                setCompanyCityFilter(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Filter by Company Name"
                                            className="input input-bordered w-full lg:w-2/12"
                                            value={companyNameFilter}
                                            onChange={(e) =>
                                                setCompanyNameFilter(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            type="number"
                                            placeholder="Filter Min Salary"
                                            className="input input-bordered w-full lg:w-2/12"
                                            value={salaryMinFilter}
                                            onChange={(e) =>
                                                setSalaryMinFilter(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button
                                            className="btn btn-secondary w-full lg:w-2/12"
                                            onClick={handleSearch}
                                        >
                                            Filter
                                        </button>
                                        <button
                                            className="btn btn-warning w-full lg:w-2/12"
                                            onClick={handleResetFilters}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />
                )}
            </div>
        </div>
    );
}
