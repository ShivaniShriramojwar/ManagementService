const UpdateStatusDropdown = ({ currentStatus, onChange }) => {
  return (
    <select
      value={currentStatus}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm border border-gray-300 rounded px-2 py-1"
    >
      <option>Operational</option>
      <option>Degraded Performance</option>
      <option>Partial Outage</option>
      <option>Major Outage</option>
    </select>
  );
};

export default UpdateStatusDropdown;
