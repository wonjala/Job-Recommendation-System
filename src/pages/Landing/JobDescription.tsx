import { Button } from "@/components/ui/button";
import { RecentJobCards } from "../../components/candidate/Cards";
import { Link } from "react-router-dom";
import { CaseLower, LocateIcon } from "lucide-react";

const jobs = [
  {
    logoSrc:
      "data:image/png;base64,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",
    position: "Digital Marketing Executive",
    location: "Balkumari, Lalitpur",
    type: "Full Time",
    published: "11 months ago",
    salary: "20 - 40",
  },
  {
    logoSrc:
      "data:image/png;base64,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",
    position: "Software Engineer",
    location: "Kathmandu, Nepal",
    type: "Part Time",
    published: "2 months ago",
    salary: "30 - 50",
  },
  // Add more job objects as needed
];

const JobDescription = () => {
  return (
    <div>
      {" "}
      <section className="bg-blue-50 w-full relative">
        <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl min-h-[40vh] flex">
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex gap-6">
              <img
                // src={logoSrc}
                alt={` logo`}
                className="aspect-square lg:h-24 h-16 bg-blue-200 rounded-sm p-1"
              />
              <div className="w-full space-y-3">
                <h3 className="text-2xl font-semibold p-0 m-0 text-gray-800">
                  UI/UX Position
                </h3>
                <div className="space-x-4">
                  <span>Catalyse</span>
                  <span>London</span>
                  <span>Date</span>
                  <span>Salary</span>
                </div>

                <div className="space-x-2">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-normal">
                    Freelance
                  </span>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-normal">
                    Freelance
                  </span>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 font-normal">
                    Freelance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white min-h-[10vh] p-4">
        <div className="max-w-7xl p-4 mx-auto">
          <div className=" grid grid-cols-[1fr_300px] gap-6">
            <div>
              <h4>Job Description </h4>
              <p className="text-gray-600">
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You
                will help the team design beautiful interfaces that solve
                business challenges for our clients. We work with a number of
                Tier 1 banks on building web-based applications for AML, KYC and
                Sanctions List management workflows. This role is ideal if you
                are looking to segue your career into the FinTech or Big Data
                arenas. Key Responsibilities
              </p>
              <h4>Key Responsibilities </h4>
              <p>
                Be involved in every step of the product design cycle from
                discovery to developer handoff and user acceptance testing. Work
                with BAs, product managers and tech teams to lead the Product
                Design Maintain quality of the design process and ensure that
                when designs are translated into code they accurately reflect
                the design specifications. Accurately estimate design tickets
                during planning sessions. Contribute to sketching sessions
                involving non-designersCreate, iterate and maintain UI
                deliverables including sketch files, style guides, high fidelity
                prototypes, micro interaction specifications and pattern
                libraries. Ensure design choices are data led by identifying
                assumptions to test each sprint, and work with the analysts in
                your team to plan moderated usability test sessions. Design
                pixel perfect responsive UI’s and understand that adopting
                common interface patterns is better for UX than reinventing the
                wheel Present your work to the wider business at Show & Tell
                sessions. Skill & Experience You have at least 3 years’
                experience working as a Product Designer. You have experience
                using Sketch and InVision or Framer X You have some previous
                experience working in an agile environment – Think two-week
                sprints. You are familiar using Jira and Confluence in your
                workflow
              </p>
            </div>
            <aside className="bg-blue-50 rounded-md p-4">
              <header>
                <h4 className="text-neutral-800"> Job Overview</h4>
              </header>

              <div className="flex items-start gap-2">
                <CaseLower />
                <div>
                  <h4 className="text-lg m-0 p-0">Date Posted:</h4>
                  <p>Posted: 1 hours ago</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-white min-h-[10vh] p-4">
        <div className="max-w-7xl p-4 mx-auto">
          <header className="flex justify-between items-center">
            <div className="">
              <p className="text-neutral-700 text-2xl uppercase font-semibold">
                Related jobs
              </p>
            </div>

            <Button className="bg-blue-700 sm:px-1">
              <Link to="/home/browse-job-list" className=" text-white">
                {" "}
                Browse All Jobs
              </Link>
            </Button>
          </header>
          <div className=" grid grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <RecentJobCards
                key={index}
                logoSrc={job.logoSrc}
                position={job.position}
                location={job.location}
                type={job.type}
                published={job.published}
                salary={job.salary}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
