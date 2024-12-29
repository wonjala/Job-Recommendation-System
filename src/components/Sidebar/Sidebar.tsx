import { useEffect, useState } from "react";
import {
  FiBarChart,
  FiBell,
  FiBriefcase,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiMessageSquare,
  FiMonitor,
  FiSettings,
  FiShield,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";

export const Example = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const Sidebar = () => {
  const device = useResponsive();
  // const [open, setOpen] = useState(true);
  const [open, setOpen] = useState(device);
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation(); // Hook to access the current route

  const links = [
    {
      Icon: FiHome,
      title: "Dashboard",
      route: "/admin",
      description: "Overview of users, jobs, and system stats.",
    },
    {
      Icon: FiUsers,
      title: "User Management",
      route: "/admin/user-management",
      description: "Add, edit, or deactivate users. Assign roles.",
    },
    {
      Icon: FiBriefcase,
      title: "Job Management",
      route: "/admin/jobs",
      description: "Manage job listings, approve/reject job posts.",
    },
    {
      Icon: FiSettings,
      title: "System Settings",
      route: "/system-settings",
      description: "Configure filters, APIs, and system preferences.",
    },
    {
      Icon: FiBell,
      title: "Notifications",
      route: "/notifications",
      description: "Set up user notifications, e.g., job alerts.",
    },
    // {
    //   Icon: FiBarChart,
    //   title: "Analytics and Reports",
    //   route: "/analytics",
    //   description: "Track trends, export data, and view performance.",
    // },
    // {
    //   Icon: FiMessageSquare,
    //   title: "Feedback Management",
    //   route: "/feedback",
    //   description: "Handle user feedback and flagged content.",
    // },
    // {
    //   Icon: FiShield,
    //   title: "Authentication & Security",
    //   route: "/authentication",
    //   description: "Admin login and role-based access.",
    // },
    {
      Icon: FiFileText,
      title: "Company",
      route: "/admin/company-management",
      description: "View system logs and user actions.",
    },
  ];

  // Set the active link on component mount or location change
  useEffect(() => {
    const activeLink = links.find((link) => link.route === location.pathname);
    if (activeLink) {
      setSelected(activeLink.title);
    }

    // setOpen(true);
  }, [location, links]);

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        {links.map((link, index) => (
          <Option
            key={index}
            Icon={link.Icon}
            title={link.title}
            route={link.route}
            description={link.description}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        ))}
      </div>

      <ToggleClose open={open} setOpen={setOpen} device={device} />
    </motion.nav>
  );
};

const Option = ({
  Icon,
  title,
  route,
  selected,
  setSelected,
  open,
  notifs,
}) => {
  return (
    <Link
      to={route}
      // layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        // layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </Link>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">TomIsLoading</span>
              <span className="block text-xs text-slate-500">Pro Plan</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen, device }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {!device && open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;
