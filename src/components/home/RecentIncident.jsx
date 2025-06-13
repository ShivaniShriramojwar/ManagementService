import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecentIncident = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Incidents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-t-1 py-3">
          <p className="font-medium"> Payment Gateway Timeout</p>
          <p className="text-xs text-[#64748b]">
            {" "}
            Active • Started 2 hours ago
          </p>
        </div>
        <div className="border-t-1 py-3">
          <p className="font-medium">API Rate Limiting Issues</p>
          <p className="text-xs text-[#64748b]">Resolved • Yesterday</p>
        </div>
        <div className="border-t-1 py-3">
          <p className="font-medium">Database Connection Pool</p>
          <p className="text-xs text-[#64748b]">Resolved • 2 days ago</p>
        </div>
      </CardContent>
    </Card>
  );
};
export default RecentIncident;
