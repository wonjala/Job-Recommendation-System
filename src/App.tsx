import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./pages/Landing/Home";
// import BrowseJobList from "./pages/Landing/BrowseJobList";

import Landing from "./components/LandingLayout";
// import Resume from "./pages/candidate/Resume";
import About from "./pages/Landing/About";
import Profile from "./pages/candidate/Profile";
import { MyJobs } from "./pages/candidate/MyJobs";
import CandidateLayout from "./components/CandidateLayout";
import EmployerLayout from "./components/EmployerLayout";
import PostJob from "./pages/employer/JobForm";
import CompanyProfile from "./pages/employer/CompanyProfile";
import PageNotFound from "./pages/shared/PageNotFound";
// import JobDescription from "./pages/Landing/JobDescription";
import NewHome from "./pages/Landing/NewHome";
import Jobs from "./pages/Landing/Jobs";
import Recruiters from "./pages/Landing/Recruiters";
import RecruiterDetail from "./pages/Landing/RecruiterDetail";
import JobDetail from "./pages/Landing/JobDetail";
import { FavoritesProvider } from "./context/FavoritesContext";
import CvBuilder from "./pages/Landing/CvBuilder";
import NewLayout from "./components/DashboardLayout";
import AuthLayout from "./components/AuthLayout";
import PageTitle from "./components/PageTitle";
import Dashboard from "./pages/dashboard/Dashboard";
import AddEmployers from "./pages/dashboard/employerManagement/AddEmployers";
import EmployerList from "./pages/dashboard/employerManagement/EmployerList";
import EmployerManagement from "./pages/dashboard/employerManagement/EmployerManagement";
import AddJob from "./pages/dashboard/jobManagement/AddJob";
import JobManagement from "./pages/dashboard/jobManagement/JobManagement";
import AddUser from "./pages/dashboard/userManagement/AddUser";
import UserManage from "./pages/dashboard/userManagement/UserManage";
import UserManagement from "./pages/dashboard/userManagement/UserManagementLayout";
import DefaultLayout from "./pages/theme/DefaultLayout";
import JobLists from "./pages/dashboard/jobManagement/JobDetail";
import CompanyManagement from "./pages/dashboard/CompanyManagement/CompanyManagement";
import CompanyProfileForm from "./pages/dashboard/CompanyManagement/CompanyProfileForm";
import CompanyDisplay from "./pages/dashboard/CompanyManagement/CompanyDisplay";
import CompanyList from "./pages/dashboard/CompanyManagement/CompanyList";
function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/admin" element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />

            {/* <Route
            path="jobs"
            element={
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <JobForm />
              </>
            }
          /> */}
            <Route path="user-management" element={<UserManagement />}>
              <Route index element={<UserManage />} />
              <Route path="add-user" element={<AddUser />} />
            </Route>

            <Route path="jobs" element={<JobManagement />}>
              <Route index element={<JobLists />} />
              {/* <Route index element={<JobLists />} /> */}
              <Route path="add-job" element={<AddJob />} />
              <Route path="job-details" element={<JobDetail />} />
            </Route>

            <Route path="employer-management" element={<EmployerManagement />}>
              <Route index element={<EmployerList />} />
              <Route path="add-employer" element={<AddEmployers />} />
              {/* <Route path="add-company" element={<CompanyGrid />} /> */}
            </Route>
            <Route path="company-management" element={<CompanyManagement />}>
              <Route index element={<CompanyList />} />
              <Route path="add-company" element={<CompanyProfileForm />} />
              <Route path="add-employer" element={<AddEmployers />} />
            </Route>

            <Route
              path="profile"
              element={
                <>
                  <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Profile />
                </>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/" element={<Landing />}>
            <Route index element={<NewHome />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="/job-details/:id" element={<JobDetail />} />
            <Route path="recruiters" element={<Recruiters />} />
            <Route path="recruiter-details" element={<RecruiterDetail />} />
            {/* <Route path="find-jobs" element={<BrowseJobList />} /> */}
            {/* <Route path="browse-jobs" element={<BrowseJobList />} /> */}
            {/* <Route path="job-description" element={<JobDescription />} /> */}
            <Route path="about" element={<About />} />
            <Route path="cv-builder" element={<CvBuilder />} />{" "}
            {/* New Route */}
          </Route>

          <Route path="/candidate" element={<CandidateLayout />}>
            <Route index element={<Profile />} />
            {/* <Route path="/candidate/my-resume" element={<Resume />} /> */}
            <Route path="/candidate/my-jobs" element={<MyJobs />} />
            <Route path="/candidate/*" element={<PageNotFound />} />
            {/* 
          <Route path="job-alerts" element={<JobAlerts />} />
          <Route path="cv-manager" element={<CVManager />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} /> */}
          </Route>

          <Route path="/employer" element={<EmployerLayout />}>
            <Route index element={<CompanyProfile />} />
            <Route path="/employer/post-job" element={<PostJob />} />
            {/* <Route path="/employer/my-resume" element={<Resume />} /> */}
            <Route path="/employer/*" element={<PageNotFound />} />
          </Route>

          <Route path="/my-account" element={<AuthLayout />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
