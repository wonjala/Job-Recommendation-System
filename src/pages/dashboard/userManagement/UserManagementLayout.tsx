import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Outlet } from "react-router-dom";

const UserManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Manage your Users" />

      <Outlet />
    </>
  );
};

export default UserManagement;
