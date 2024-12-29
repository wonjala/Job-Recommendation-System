import ResponsiveTable from "@/components/Tables/GenericTable";
import { Button } from "@/components/ui/button";
import { fetchAllUsers } from "@/services/userApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchAllUsers();
        setUsers(Array.isArray(response) ? response : []);
      } catch (err) {
        setError("Failed to load users. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // Column definitions for user data
  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Location",
      accessor: "city",
      cell: (row) => `${row.city}, ${row.country}`,
    },
    {
      header: "Skills",
      accessor: "skills",
      cell: (row) => row.skills.map((skill) => skill.skillName).join(", "),
    },
    {
      header: "Languages",
      accessor: "languages",
    },
    {
      header: "Salary",
      accessor: "currentSalary",
      cell: (row) => (
        <div className="flex flex-col">
          <span>Current: ${row.currentSalary.toLocaleString()}</span>
          <span className="text-sm text-gray-500">
            Expected: ${row.expectedSalary.toLocaleString()}
          </span>
        </div>
      ),
    },
    {
      header: "Contact",
      accessor: "phone",
      cell: (row) => (
        <div className="flex flex-col">
          <span>{row.phone}</span>
          <span className="text-sm text-gray-500">{row.email}</span>
        </div>
      ),
    },
    {
      header: "Actions",
      accessor: "userId",
      cell: (row) => (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/admin/user-management/edit/${row.userId}`}>Edit</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDeleteUser(row.userId)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleDeleteUser = (userId) => {
    // Implement delete functionality
    console.log("Delete user:", userId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">User Management</h2>
        <Button asChild className="bg-primary text-white">
          <Link to="/admin/user-management/add-user">Add New User</Link>
        </Button>
      </div>

      <ResponsiveTable data={users} columns={columns} title="User List" />
    </div>
  );
};

export default UserManage;
