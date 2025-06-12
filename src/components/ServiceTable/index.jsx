import StatusBadge from "./StatusBadge";
import UpdateStatusDropdown from "./UpdateStatusDropdown";
import { Button } from "@/components/ui/button";

const ServiceTable = ({ services, onEdit, onDelete, onStatusUpdate }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border rounded-md">
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
      </table>
    </div>
  );
};

export default ServiceTable;
