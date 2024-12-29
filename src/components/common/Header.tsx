import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, User, Briefcase } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const candidateMenuItems = [
    {
      label: "Find Jobs",
      link: "/jobs",
      subItems: [
        { label: "Browse All Jobs", link: "/jobs", icon: Briefcase },
        {
          label: "Jobs for Disabled",
          link: "/jobs/disabled-friendly",
          icon: Briefcase,
        },
        { label: "Remote Jobs", link: "/jobs/remote", icon: Briefcase },
      ],
    },
    {
      label: "Career Resources",
      link: "/resources",
      subItems: [
        { label: "CV Builder", link: "/candidate/my-resume", icon: User },
        {
          label: "Skill Assessment",
          link: "/candidate/skill-assessment",
          icon: User,
        },
        { label: "Career Guide", link: "/resources/career-guide", icon: User },
      ],
    },
    { label: "About Us", link: "/about" },
  ];

  const employerMenuItems = [
    { label: "Post a Job", link: "/employer/post-job" },
    { label: "Find Candidates", link: "/employer/candidates" },
    { label: "Company Profile", link: "/employer" },
    { label: "Pricing", link: "/employer/pricing" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-gray-900">
              Inclusive Jobs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Main Navigation Links */}
            <div className="flex items-center gap-6">
              {candidateMenuItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-1 py-2 text-gray-700 hover:text-gray-900"
                    aria-expanded={activeDropdown === index}
                    aria-haspopup={item.subItems ? "true" : "false"}
                  >
                    {item.label}
                    {item.subItems && <ChevronDown className="h-4 w-4" />}
                  </button>

                  {item.subItems && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.link}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <subItem.icon className="mr-2 h-4 w-4" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Button variant="outline" className="shadow-none" asChild>
                <Link to="/employer">
                  <Briefcase className="mr-2 h-4 w-4" />
                  For Employers
                </Link>
              </Button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              {/* <Button variant="ghost" asChild>
                <Link to="/my-account">Sign In</Link>
              </Button> */}
              <Button asChild>
                <Link to="/my-account/register">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white w-[300px]">
                <nav className="flex flex-col gap-4">
                  {candidateMenuItems.map((item) => (
                    <div key={item.label} className="border-b pb-4">
                      <p className="font-medium text-gray-700 px-4 py-2">
                        {item.label}
                      </p>
                      {item.subItems && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.link}
                              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                            >
                              <subItem.icon className="mr-2 h-4 w-4" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                      {!item.subItems && (
                        <Link
                          to={item.link}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="border-b pb-4">
                    <Link
                      to="/employer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      For Employers
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 pt-4">
                    {/* <Button variant="outline" asChild>
                      <Link to="/my-account">Sign In</Link>
                    </Button> */}
                    <Button asChild>
                      <Link to="/my-account/register">Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
