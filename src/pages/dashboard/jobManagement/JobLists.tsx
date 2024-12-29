import ResponsiveTable from "@/components/Tables/GenericTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Corp",
    status: "Pending",
  },
  { id: 2, title: "Backend Developer", company: "XYZ Ltd", status: "Approved" },
  {
    id: 3,
    title: "Fullstack Engineer",
    company: "TechWorld",
    status: "Pending",
  },
];

const JobLists = () => {
  const jobData = [
    {
      id: 1,
      companyLogo: "/path/to/logo1.svg",
      jobTitle: "Frontend Developer",
      companyName: "Google",
      postedDate: "2024-12-01",
      status: "Pending",
    },
    {
      id: 2,
      companyLogo: "/path/to/logo2.svg",
      jobTitle: "Backend Engineer",
      companyName: "Twitter",
      postedDate: "2024-12-05",
      status: "Approved",
    },
    {
      id: 3,
      companyLogo: "/path/to/logo3.svg",
      jobTitle: "UI/UX Designer",
      companyName: "Facebook",
      postedDate: "2024-12-10",
      status: "Pending",
    },
  ];

  // Column definitions
  const jobColumns = [
    {
      header: "Job Title",
      accessor: "jobTitle",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.companyLogo}
            alt={row.companyName}
            className="h-8 w-8"
          />
          <div>
            <div className="font-semibold">{row.jobTitle}</div>
            <div className="text-sm text-gray-500">{row.companyName}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Posted Date",
      accessor: "postedDate",
      cell: (row) => new Date(row.postedDate).toLocaleDateString(),
    },
    {
      header: "Status",
      accessor: "status",
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded text-sm ${
            row.status === "Approved"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "actions",
      cell: (row) => (
        <div className="flex gap-2">
          <Button
            onClick={() => handleStatusChange(row.id, "Approved")}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Approve
          </Button>
          <Button
            onClick={() => handleStatusChange(row.id, "Rejected")}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const handleStatusChange = (id, status) => {
    console.log(`Job ID: ${id}, New Status: ${status}`);
    // Add your logic here to update the job status (e.g., API call)
  };

  return (
    <>
      <div className="w-full pb-4">
        <Button asChild className="text-white">
          <Link to={"/admin/jobs/add-job"} className="bg-red text-white">
            {" "}
            Add{" "}
          </Link>
        </Button>
      </div>
      <ResponsiveTable
        data={jobsData}
        columns={jobColumns}
        title="Job Listings"
      />
    </>
  );
};

export default JobLists;
