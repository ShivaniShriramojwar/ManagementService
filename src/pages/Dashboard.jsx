import QuickAction from "@/components/home/quickAction";
import RecentIncident from "@/components/home/RecentIncident";
import ScheduledMaintenance from "@/components/home/ScheduledMaintenance";
import ServiceDetails from "@/components/home/ServiceDetails";
import ServiceValues from "@/components/home/ServiceValues";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
      <div className="col-span-full">
        <ServiceValues />
      </div>

      <div className="col-span-full lg:col-span-4 space-y-6">
        <ServiceDetails />
        <QuickAction />
      </div>

      <div className="col-span-full lg:col-span-2 space-y-6">
        <RecentIncident />
        <ScheduledMaintenance />
      </div>
    </div>
  );
};

export default Dashboard;
