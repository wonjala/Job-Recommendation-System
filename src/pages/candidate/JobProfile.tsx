import ProfileCard from "../../components/candidate/ProfileCard";
import { Outlet } from "react-router-dom";

const JobProfile = () => {
  return (
    <section className="min-h-screen">
      <div className="p-4 max-w-7xl mx-auto grid md:grid-cols-[350px_1fr] gap-4">
        <ProfileCard />
        <Outlet />
      </div>
    </section>
  );
};

export default JobProfile;
