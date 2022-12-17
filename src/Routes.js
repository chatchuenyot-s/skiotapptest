import React from "react";
import Singlementordetails from "pages/Singlementordetails";
import Allmentors from "pages/Allmentors";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviCourses from "pages/EduviCourses";
import EduviShop from "pages/EduviShop";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/eduvishop" element={<EduviShop />} />
        <Route path="/eduvicourses" element={<EduviCourses />} />
        <Route path="/eduvicoursesdetails" element={<EduviCoursesDetails />} />
        <Route path="/eduvicoursespricing" element={<EduviCoursesPricing />} />
        <Route path="/eduvijoinasteacher" element={<EduviJoinAsTeacher />} />
        <Route path="/allmentors" element={<Allmentors />} />
        <Route path="/singlementordetails" element={<Singlementordetails />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
