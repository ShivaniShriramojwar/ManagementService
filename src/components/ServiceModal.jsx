import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AddServiceModal = ({ onAddService }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Operational");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onAddService({
      id: Date.now(),
      name,
      status,
      updatedAt: new Date().toISOString(),
    });
    setName("");
    setStatus("Operational");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Service</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="e.g. API, Website"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm"
            >
              <option>Operational</option>
              <option>Degraded Performance</option>
              <option>Partial Outage</option>
              <option>Major Outage</option>
            </select>
          </div>
        </div>
        <DialogFooter className="pt-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceModal;
