import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  global,
  paymentSvg,
  apiLink,
  databaseLink,
  emailIcon,
  securitySvg,
} from "@/assets/common";
import { Button } from "../ui/button";

const ServiceDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h1 className="text-2xl font-semibold">Services Status</h1>

          <CardAction>
            <Button className="bg-[#6366f1] px-2 py-4 border-none rounded-lg text-md font-medium cursor-pointer text-white">
              Add Service
            </Button>
          </CardAction>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {" "}
          <div className="flex justify-between items-center py-4 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={global} />
              </span>
              <div className="  font-medium">Main Website</div>
            </div>
            <div className="bg-[#b6ebd1] rounded-3xl px-2 py-1 text-[#12AE60]  font-medium text-xs">
              Operational
            </div>
          </div>{" "}
          <div className="flex justify-between items-center py-2 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={apiLink} />
              </span>
              <div className="  font-medium">API Gateway</div>
            </div>
            <div className="bg-[#fef3c7] rounded-3xl px-2 py-1 text-[#d97706]  font-medium text-xs">
              Degraded
            </div>
          </div>{" "}
          <div className="flex justify-between  items-center py-2 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={databaseLink} />
              </span>
              <div className="  font-medium">Database</div>
            </div>
            <div className="bg-[#b6ebd1] rounded-3xl px-2 py-1 text-[#12AE60]  font-medium text-xs">
              Operational
            </div>
          </div>{" "}
          <div className="flex justify-between items-center py-2 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={paymentSvg} />
              </span>
              <div className="  font-medium"> Payment System</div>
            </div>
            <div className="  rounded-3xl px-2 py-1 bg-[#fee2e2] text-[#dc2626]  font-medium text-xs">
              Major Outage
            </div>
          </div>
          <div className="flex justify-between  items-center py-2 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={emailIcon} />
              </span>
              <div className="  font-medium"> Email Service</div>
            </div>
            <div className="bg-[#b6ebd1] rounded-3xl px-2 py-1 text-[#12AE60]  font-medium text-xs">
              Operational
            </div>
          </div>
          <div className="flex justify-between py-2 border-t-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">
                {" "}
                <img src={securitySvg} />
              </span>
              <div className="  font-medium"> Authentication</div>
            </div>
            <div className="bg-[#b6ebd1] rounded-3xl px-2 py-1 text-[#12AE60]  font-medium text-xs">
              Operational
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ServiceDetails;
