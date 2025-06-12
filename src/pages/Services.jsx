import { useState } from "react";
import AddServiceModal from "../components/ServiceModal";
import ServiceTable from "../components/ServiceTable";

const Services = () => {
  const [services, setServices] = useState([]);

  const addService = (newService) => {
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const editService = (service) => {
    alert("Edit modal coming soon for: " + service.name);
  };

  const updateServiceStatus = (id, newStatus) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: newStatus, updatedAt: new Date().toISOString() }
          : s
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Service Management</h1>
      <AddServiceModal onAddService={addService} />
      <ServiceTable
        services={services}
        onEdit={editService}
        onDelete={deleteService}
        onStatusUpdate={updateServiceStatus}
      />
    </div>
  );
};

export default Services;
