import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  MoreVertical,
  Pencil,
  Trash2,
  Accessibility,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CompanyList = () => {
  // Sample data - replace with actual data fetching logic
  const [companies] = useState([
    {
      id: 1,
      companyName: "Tech Corp",
      industry: "technology",
      location: "San Francisco, CA",
      companySize: "51-200",
      disabilitySupport: {
        wheelchairAccessible: true,
        visualAids: true,
        hearingAids: false,
        flexibleWork: true,
      },
    },
    // Add more sample companies as needed
  ]);

  const handleEdit = (id) => {
    console.log("Edit company:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete company:", id);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Companies</CardTitle>
          <Button className="flex items-center gap-2">
            <Link to={"/admin/company-management/add-company"}>
              <Building2 size={18} />
              Add Company
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Disability Support</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">
                  {company.companyName}
                </TableCell>
                <TableCell className="capitalize">{company.industry}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.companySize}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {company.disabilitySupport.wheelchairAccessible && (
                      <Badge variant="secondary" className="flex gap-1">
                        <Accessibility size={14} />
                        Wheelchair
                      </Badge>
                    )}
                    {/* Add more badges for other support options */}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEdit(company.id)}
                        className="flex items-center gap-2"
                      >
                        <Pencil size={14} />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(company.id)}
                        className="flex items-center gap-2 text-red-600"
                      >
                        <Trash2 size={14} />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CompanyList;
