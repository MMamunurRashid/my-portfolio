import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Sections/Home/Home/Home";
import ProjectDetails from "../Sections/MyProjects/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: async ({ params }) => {
          const data = await fetch("projects.json");
          data.find((pd) => parseInt(pd.id) === parseInt(params.id));
        },
      },
    ],
  },
]);
export default router;
