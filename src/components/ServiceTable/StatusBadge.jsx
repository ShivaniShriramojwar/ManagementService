const statusColors = {
  Operational: "bg-green-100 text-green-700",
  "Degraded Performance": "bg-yellow-100 text-yellow-700",
  "Partial Outage": "bg-orange-100 text-orange-700",
  "Major Outage": "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded ${
        statusColors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
