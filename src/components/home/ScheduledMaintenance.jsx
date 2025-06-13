import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ScheduledMaintenance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scheduled Maintenance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-t-1 py-3">
          <p className="font-medium">Database Migration</p>
          <p className="text-xs text-[#64748b]">
            {" "}
            Tomorrow • 2:00 AM - 4:00 AM
          </p>
        </div>
        <div className="border-t-1 py-3">
          <p className="font-medium">Server Updates</p>
          <p className="text-xs text-[#64748b]">Next Week • Sunday 1:00 AM</p>
        </div>
      </CardContent>
    </Card>
  );
};
export default ScheduledMaintenance;
