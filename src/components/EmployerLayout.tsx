import Header from "./candidate/Header";
import { EmployerCard } from "./candidate/ProfileCard";
import { Outlet } from "react-router-dom";

const EmployerLayout = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto grid md:grid-cols-[200px_1fr] gap-4">
        <aside className="sticky">
          <EmployerCard />
        </aside>
        <Outlet />
      </div>
    </section>
  );
};

export default EmployerLayout;
