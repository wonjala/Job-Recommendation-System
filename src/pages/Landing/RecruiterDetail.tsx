import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocateIcon, MapPin } from "lucide-react";

const RecruiterDetail = () => {
  return (
    <>
      <section className="p-4 bg-white">
        <div className="flex min-h-[20vh] items-center rounded-lg justify-between max-w-7xl px-0 py-10 mx-auto">
          <div className="mx-auto w-full flex flex-col gap-0 md:items-center ">
            <div className="w-full max-w-[1350px] h-auto flex flex-col items-center -space-y-12">
              {/* Image Section */}
              <div className="w-full max-w-[1326px] h-auto flex justify-center items-center">
                <img
                  className="w-full aspect-auto rounded-2xl"
                  src="/images/recruiter-banner-14.png"
                  alt="Banner"
                />
              </div>

              {/* Content Section */}
              <div className="w-full px-8 flex flex-col lg:flex-row items-center -mt-[-50px]">
                {/* Profile Section */}
                <div className="flex flex-col items-start space-y-2">
                  <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center">
                    <img src="/images/Aceable-inc-logo.svg" alt="logo" />
                  </div>

                  <div className="text-[#05264e] text-lg font-bold font-['Plus Jakarta Sans']">
                    Aceable, Inc.
                  </div>
                  <div className="text-[#a0abb8] text-xs font-normal font-['Plus Jakarta Sans']">
                    Chicago, US
                  </div>
                  <p className="text-[#66789c] text-base font-normal font-['Plus Jakarta Sans']">
                    Our Mission to make working life simple
                  </p>
                </div>

                {/* Contact Button */}
                <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-auto flex items-center">
                  <Button className="bg-[#3c65f5] text-white text-base font-bold font-['Plus Jakarta Sans'] px-6 py-3 rounded">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            {/* Links Section */}
            <div className="w-full flex justify-start items-center mt-4  space-x-4">
              {["About Us", "Recruitments", "People"].map((label, idx) => (
                <button
                  key={idx}
                  className="w-auto px-4 py-2 bg-white rounded-[10px] border border-neutral-200 text-base font-medium text-[#4f5e64] font-['Plus Jakarta Sans'] hover:border-[#b4c0e0] hover:text-[#05264e]"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-[1326px] border-b border-[#dee2e6] mt-4"></div>

            <section className="mx-auto mt-4">
              <div className=" w-full grid grid-cols-[1fr_400px] gap-4">
                <div className=" space-y-8">
                  {/* Welcome Section */}
                  <header className="space-y-4">
                    <h1 className="text-[#4f5e64] text-2xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                      Welcome to JThemes Team
                    </h1>
                    <p className="text-[#05264e] text-sm font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                      The JThemes Design team has a vision to establish a
                      trusted platform that enables productive and healthy
                      enterprises in a world of digital and remote everything,
                      constantly changing work patterns and norms, and the need
                      for organizational resiliency. The ideal candidate will
                      have strong creative skills and a portfolio of work that
                      demonstrates their passion for illustrative design and
                      typography. This candidate will have experience in working
                      with numerous design platforms such as digital and print
                      forms.
                    </p>
                  </header>

                  {/* Essential Knowledge Section */}
                  <section className="space-y-4">
                    <h2 className="text-[#4f5e64] text-2xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                      Essential Knowledge, Skills, and Experience
                    </h2>
                    <ul className="pl-8 space-y-2 list-disc text-[#4f5e64] text-base font-normal font-['Plus Jakarta Sans'] leading-loose">
                      <li>
                        A portfolio demonstrating well thought through and
                        polished end-to-end customer journeys
                      </li>
                      <li>
                        5+ years of industry experience in interactive design
                        and/or visual design
                      </li>
                      <li>Excellent interpersonal skills</li>
                      <li>
                        Aware of trends in mobile, communications, and
                        collaboration
                      </li>
                      <li>
                        Ability to create highly polished design prototypes,
                        mockups, and other communication artifacts
                      </li>
                      <li>
                        Ability to scope and estimate efforts accurately, and
                        prioritize tasks and goals independently
                      </li>
                      <li>
                        History of impacting shipping products with your work
                      </li>
                      <li>
                        Bachelor’s Degree in Design (or related field) or
                        equivalent professional experience
                      </li>
                      <li>
                        Proficiency in a variety of design tools such as Figma,
                        Photoshop, Illustrator, and Sketch
                      </li>
                    </ul>
                  </section>
                </div>
                <div>
                  <div className="min-h-screen flex flex-col gap-12 ">
                    {/* Company Info Card */}
                    <div className="w-full max-w-4xl p-7 bg-white rounded-lg border border-gray-200 flex flex-col gap-6">
                      {/* Company Header */}
                      <div className="flex justify-between items-start">
                        <div className="">
                          <h1 className="text-lg inline font-bold text-blue-900">
                            Aceable, Inc.
                          </h1>
                          <p className="text-sm flex items-center gap-2 text-gray-400">
                            {" "}
                            <MapPin className="" /> Chicago, US
                          </p>
                        </div>
                      </div>

                      {/* Map Section */}
                      <div className="border-t border-gray-200 pt-6 flex justify-center">
                        <div className="bg-gray-300 rounded-lg overflow-hidden w-full max-w-md h-40 flex items-center justify-center">
                          {/* Replace these divs with a real map component or image */}
                          <img
                            className="object-cover"
                            src="https://via.placeholder.com/256x256"
                            alt="Map placeholder"
                          />
                        </div>
                      </div>

                      {/* Company Details */}
                      <div className="border-t border-gray-200 pt-6 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-blue-500 text-sm">
                            Company Field
                          </span>
                          <p className="text-blue-900 font-semibold">
                            Accounting / Finance
                          </p>
                        </div>
                        <div>
                          <span className="text-blue-500 text-sm">
                            Location
                          </span>
                          <p className="text-blue-900 font-semibold">
                            Chicago, US Remote Friendly
                          </p>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t border-gray-200 pt-6 flex flex-col gap-4">
                        <p className="text-sm text-gray-600">
                          205 North Michigan Avenue, Suite 810, Chicago, 60601,
                          USA
                        </p>
                        <p className="text-sm text-gray-600">
                          Phone: (123) 456-7890
                        </p>
                        <p className="text-sm text-gray-600">
                          Email: contact@Evara.com
                        </p>
                      </div>

                      {/* Send Message Button */}
                      <div className="flex justify-center mt-4">
                        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded">
                          Send Message
                        </button>
                      </div>
                    </div>

                    {/* Hiring Section */}
                    <div className="w-full max-w-md p-8 bg-blue-50 rounded-lg border border-gray-200 text-center">
                      <h2 className="text-2xl text-blue-300 uppercase tracking-widest">
                        We Are
                      </h2>
                      <h3 className="text-4xl font-extrabold text-blue-700 uppercase tracking-widest mt-2">
                        Hiring
                      </h3>
                      <p className="text-xs text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto
                      </p>
                      <button className="bg-blue-600 text-white mt-6 py-2 px-4 rounded">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-white px-4">
        <div className="flex  flex-col items-center justify-between max-w-7xl px-0 py-8 mx-auto">
          <div className="flex w-full  flex-col items-center justify-between ">
            <div className=" md:p-11 p-4 rounded-2xl flex bg-[#3c65f5] md:gap-[61.3px] items-start">
              {/* Main Image */}
              <img
                className="w-1/3 md:inline hidden aspect-square"
                src="/images/newsletter-image-left.png"
                alt="Main Image"
              />

              {/* Content Section */}
              <div className="flex-grow flex flex-col gap-10 items-center">
                {/* Heading */}
                <div className="text-center text-white md:text-[37px] text-lg font-bold md:leading-[55px] font-['Inter']">
                  New Things Will Always <br /> Update Regularly
                </div>

                {/* Subscription Section */}
                <div className="w-full justify-between bg-white rounded-[10px] flex items-center px-2">
                  {/* Email Input */}
                  <div className="w-full bg-white rounded-l-lg">
                    <Input
                      type="email"
                      className="shadow-none border-none text-[#777f87] h-[60px] w-full text-sm font-normal"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <Button className="w-[139.67px] py-4 bg-[#3c65f5] text-white text-sm font-medium rounded-r-lg">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Secondary Image */}
              <img
                className="w-1/3 md:inline hidden aspect-square"
                src="/images/newsletter-image-right.png"
                alt="Secondary Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruiterDetail;
