import StatusBadge from "./StatusBadge";
import UpdateStatusDropdown from "./UpdateStatusDropdown";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  global,
  paymentSvg,
  apiLink,
  databaseLink,
  emailIcon,
  securitySvg,
} from "@/assets/common";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ServiceTable = ({ services, onEdit, onDelete, onStatusUpdate }) => {
  return (
    <div>
      {/* <table className="min-w-full bg-white border rounded-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-600">Service</th>
            <th className="px-4 py-2 font-medium text-gray-600">Status</th>
            <th className="px-4 py-2 font-medium text-gray-600">
              Last Updated
            </th>
            <th className="px-4 py-2 font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-t">
              <td className="px-4 py-3">{service.name}</td>
              <td className="px-4 py-3">
                <StatusBadge status={service.status} />
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {new Date(service.updatedAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 flex flex-wrap gap-2">
                <UpdateStatusDropdown
                  currentStatus={service.status}
                  onChange={(newStatus) =>
                    onStatusUpdate(service.id, newStatus)
                  }
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(service)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(service.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Card className="bg-white mb-3">
        <CardHeader>
          <CardTitle>
            <h1>Service Management</h1>
          </CardTitle>
          <CardAction>
            <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
              + Add New Service
            </Button>
          </CardAction>
        </CardHeader>
      </Card>

      <div className="border-1    rounded-xl">
        <Card className="bg-white mb-3 rounded-b-none ">
          <CardHeader>
            {/* <CardTitle>Service Management</CardTitle>
            <CardAction> + Add New Service</CardAction> */}
            <CardTitle>All Services</CardTitle>
            <div className="w-70">
              {" "}
              <Input type="email" placeholder="Search services..." />
            </div>
          </CardHeader>
        </Card>
        {/* <Card className="bg-white">
        <CardHeader>
          <CardTitle>All Services</CardTitle>
          <CardDescription>
            {" "}
            <Input type="email" placeholder="Search services..." />
          </CardDescription>
        </CardHeader>
        <CardContent> */}
        <Table className="bg-white rounded-xl overflow-hidden shadow">
          <TableHeader className="bg-[#f8fafc]">
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            <TableRow className="py-4">
              <TableCell className="font-medium bg-white">
                {" "}
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">
                    {" "}
                    <img src={global} />
                  </span>
                  <div className="font-medium">Main Website</div>
                </div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="bg-[#b6ebd1] rounded-3xl px-1 py-1 text-[#12AE60]  font-medium text-xs">
                  Operational
                </div>
              </TableCell>
              <TableCell className="bg-white">2 hours ago</TableCell>
              <TableCell className="bg-white">
                <div>99.9%</div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="flex gap-3">
                  <Button className="bg-[#f1f5f9] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-[#475569]">
                    Edit
                  </Button>
                  <Button className="bg-[#ef4444] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="py-4">
              <TableCell className="font-medium bg-white">
                {" "}
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">
                    {" "}
                    <img src={global} />
                  </span>
                  <div className="font-medium">Main Website</div>
                </div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="bg-[#b6ebd1] rounded-3xl px-1 py-1 text-[#12AE60]  font-medium text-xs">
                  Operational
                </div>
              </TableCell>
              <TableCell className="bg-white">2 hours ago</TableCell>
              <TableCell className="bg-white">
                <div>99.9%</div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="flex gap-3">
                  <Button className="bg-[#f1f5f9] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-[#475569]">
                    Edit
                  </Button>
                  <Button className="bg-[#ef4444] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="py-4">
              <TableCell className="font-medium bg-white">
                {" "}
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">
                    {" "}
                    <img src={global} />
                  </span>
                  <div className="font-medium">Main Website</div>
                </div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="bg-[#b6ebd1] rounded-3xl px-1 py-1 text-[#12AE60]  font-medium text-xs">
                  Operational
                </div>
              </TableCell>
              <TableCell className="bg-white">2 hours ago</TableCell>
              <TableCell className="bg-white">
                <div>99.9%</div>
              </TableCell>
              <TableCell className="bg-white">
                {" "}
                <div className="flex gap-3">
                  <Button className="bg-[#f1f5f9] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-[#475569]">
                    Edit
                  </Button>
                  <Button className="bg-[#ef4444] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* </CardContent>
      </Card> */}
    </div>
  );
};

export default ServiceTable;
