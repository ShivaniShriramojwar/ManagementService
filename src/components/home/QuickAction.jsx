import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const QuickAction = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" flex gap-3">
          {" "}
          <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
            🚨 Report Incident
          </Button>
          <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
            🛠️ Schedule Maintenance
          </Button>
          <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
            📊 View Analytics
          </Button>
          <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
            👥 Manage Team
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default QuickAction;
