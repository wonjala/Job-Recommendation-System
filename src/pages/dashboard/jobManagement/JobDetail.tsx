import ResponsiveTable from "@/components/Tables/GenericTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPin, Clock, Building2, Calendar, DollarSign } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const jobsData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "Google",
    companyLogo: "/path/to/logo1.svg",
    postedDate: "2024-12-01",
    status: "Pending",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-time",
    salary: "$120,000 - $180,000",
    department: "Engineering",
    description:
      "We are looking for a Frontend Developer to join our team and help build outstanding user experiences...",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of modern JavaScript",
      "Experience with state management (Redux, MobX)",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
    ],
  },
  {
    id: 2,
    jobTitle: "Backedn Developer",
    companyName: "Facebook",
    companyLogo: "/path/to/logo1.svg",
    postedDate: "2024-12-01",
    status: "Pending",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-time",
    salary: "$120,000 - $180,000",
    department: "Engineering",
    description:
      "We are looking for a Frontend Developer to join our team and help build outstanding user experiences...",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of modern JavaScript",
      "Experience with state management (Redux, MobX)",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
    ],
  },
  {
    id: 3,
    jobTitle: "UI/Ux Design",
    companyName: "Google",
    companyLogo: "/path/to/logo1.svg",
    postedDate: "2024-12-01",
    status: "Pending",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-time",
    salary: "$120,000 - $180,000",
    department: "Engineering",
    description:
      "We are looking for a Frontend Developer to join our team and help build outstanding user experiences...",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of modern JavaScript",
      "Experience with state management (Redux, MobX)",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
    ],
  },
  // Add more job entries with detailed information...
];

// JobDetails component for the sheet
const JobDetails = ({ job }) => {
  if (!job) return null;

  return (
    <ScrollArea className="h-[calc(100vh-180px)]">
      <div className="space-y-6 px-6">
        <div className="flex items-center gap-4">
          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="h-16 w-16 rounded-lg"
          />
          <div>
            <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {job.companyName}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span>{job.employmentType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-gray-500" />
            <span>{job.department}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-6 pb-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3">Description</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {job.description}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3">Requirements</h4>
            <ul className="list-disc pl-5 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="text-lg font-semibold mb-3">Benefits</h4>
            <ul className="list-disc pl-5 space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

const JobLists = () => {
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="shadow-none px-4 py-2">
                View Details
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white w-full sm:w-[540px] p-0"
            >
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle>Job Details</SheetTitle>
                <SheetDescription>
                  View complete information about this position
                </SheetDescription>
              </SheetHeader>

              <JobDetails job={row} />

              <SheetFooter className="sticky bottom-0 px-6 py-4 border-t bg-white">
                <div className="flex w-full items-center justify-between gap-4">
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
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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
            Add Job
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
