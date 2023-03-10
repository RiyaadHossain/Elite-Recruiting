import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";
import AddJob from "../pages/dashboard/employee/AddJob";
import AppliedJob from "../pages/dashboard/candidate/AppliedJob";
import MyJobs from "../pages/dashboard/employee/MyJobs";
import DashboardHome from "../layout/dashboard/DashboardHome";
import Applications from "../pages/applications/Applications";
import ApplicantDetails from "../pages/dashboard/candidate/ApplicantDetails";
import MyProfile from "../pages/dashboard/candidate/MyProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/applications/:id",
        element: <Applications />,
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/applicant-details/:email",
        element: (
          <PrivateRoute>
            <ApplicantDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/:email/:role",
        element: <DashboardHome />
      },
      {
        path: "add-job",
        element: <AddJob />
      },
      {
        path: "my-jobs/:email",
        element: <MyJobs />
      },
      {
        path: "applied-job/:email",
        element: <AppliedJob />
      },
      {
        path: "my-profile/:email",
        element: <MyProfile />
      }
    ]
  },
]);

export default routes;
