import {
  checkMarkSvg,
  lightBolt,
  redIncident,
  serverSvg,
} from "@/assets/common";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ServiceValues = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div>
        {" "}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1 className="text-2xl font-semibold">Status Dashboard</h1>

              <div className="flex items-center gap-3">
                <span className="text-gray-800 font-medium">
                  Welcome, Admin
                </span>
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
                  A
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="flex w-full gap-5">
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h6 className="text-gray-500">Total Services</h6>
                  <img src={serverSvg} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl p-2 bg-[#b6ebd1] text-[#12AE60]">
                  8
                </div>
                <div className="font-bold text-xs p-2 bg-[#b6ebd1] text-[#12AE60] border rounded-2xl">
                  +2 this month
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h6 className="text-gray-500">Services Online</h6>
                  <img src={checkMarkSvg} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl p-2 bg-[#b6ebd1] text-[#12AE60]">
                  6
                </div>
                <div className="font-bold text-xs p-2 bg-[#b6ebd1] text-[#12AE60] border rounded-2xl">
                  75% uptime
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h6 className="text-gray-500">Active Incidents</h6>
                  <img src={redIncident} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl p-2 bg-[#fee2e2] text-[#dc2626]">
                  2
                </div>
                <div className="font-bold text-xs p-2 bg-[#fee2e2] text-[#dc2626] border rounded-2xl">
                  +1 today
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>
                {" "}
                <div className="flex justify-between">
                  {" "}
                  <h6 className="text-gray-500">Avg Response Time</h6>
                  <img src={lightBolt} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl p-2">1.2s</div>
                <div className="font-bold text-xs p-2 bg-[#b6ebd1] text-[#12AE60] border rounded-2xl">
                  -0.3s improved
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ServiceValues;
