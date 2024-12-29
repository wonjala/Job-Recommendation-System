import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  link: {
    path: string;
    icon: JSX.Element;
    title: string;
    dropdown?: {
      title: string;
      links: {
        path: string;
        title: string;
      }[];
    };
  };
  sidebarExpanded: boolean;
}

const SidebarLink = ({ link, sidebarExpanded }: SidebarLinkProps) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <li>
      <NavLink
        to={link.path}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          pathname.includes(link.path) && "bg-graydark dark:bg-meta-4"
        }`}
      >
        {link.icon}
        {link.title}
        {link.dropdown && (
          <>
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                !sidebarExpanded && "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H3.7124V4.83745C3.7124 4.50001 3.99365 4.21876 4.35928 4.21876C4.7249 4.21876 5.00615 4.50001 5.00615 4.83745V8.21245H1.77178ZM5.42803 8.21245H8.38115V4.83745C8.38115 4.50001 8.6624 4.21876 9.0002 4.21876C9.33795 4.21876 9.6192 4.50001 9.6192 4.83745V8.21245H5.42803ZM8.38115 12.2625V14.5406H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V14.5406H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V4.83745C16.228 4.50001 16.5093 4.21876 16.8749 4.21876C17.2405 4.21876 17.5218 4.50001 17.5218 4.83745V8.21245H13.8374ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.484"
                      fill=""
                    />
                  </svg>
                )}
              </NavLink>
              {link.dropdown && (
                <div
                  className={`translate transform overflow-hidden ${
                    !sidebarExpanded && "hidden"
                  }`}
                >
                  <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                    {link.dropdown.links.map((dropdownLink) => (
                      <li key={dropdownLink.path}>
                        <NavLink
                          to={dropdownLink.path}
                          className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white`}
                        >
                          {dropdownLink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </>
          )}
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default SidebarLink;