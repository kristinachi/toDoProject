import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import ToDoPage from "./todo/ToDoPage";
import InProgressPage from "./inprogress/InProgress";
import DonePage from "./done/DonePage";
import DeletedPage from "./deleted/DeletedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ToDoPage />,
      },
      {
        path: "/inprogress",
        element: <InProgressPage />,
      },
      {
        path: "/done",
        element: <DonePage />,
      },
      {
        path: "/deleted",
        element: <DeletedPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
