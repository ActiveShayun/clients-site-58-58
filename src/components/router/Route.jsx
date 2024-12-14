import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Register from "../auth/Register"
import Login from "../auth/Login"
import AddJobs from "../pages/AddJobs"
import JobDetails from "../pages/jobDetails/JobDetails"
import PrivateRoute from "./PrivateRoute"
import JobApply from "../pages/jobDetails/JobApply"
import MyApplications from "../myApplication/MyApplications"
import MyPostedJobs from "../mypostedJobs/MyPostedJobs"
import ViewApplications from "../viewApplications/ViewApplications"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "/myApplication",
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: "/job-application/:job_id",
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute><JobApply /></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "addJobs",
                element: <AddJobs />
            }
        ]
    }
])

export default router