import { serverSvg } from "@/assets/common";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div>
        {" "}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1 className="text-2xl">Status Dashboard</h1>

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
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
