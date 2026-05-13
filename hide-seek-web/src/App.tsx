import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./make/About";
import { CourseDetail } from "./make/CourseDetail";
import { Experiences } from "./make/Experiences";
import { Home } from "./make/Home";
import { NotFound } from "./make/NotFound";
import { Root } from "./make/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experiences", element: <Experiences /> },
      { path: "experiences/:courseId", element: <CourseDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
