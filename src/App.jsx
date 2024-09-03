import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Blogs from "@pages/Blogs";
import BlogDetails from "@pages/BlogDetails";
import Register from "@pages/Register";
import BookAppointment from "@pages/BookAppointment";
import Payment from "@pages/Payment";
import Profile from "@pages/Profile";
import Payments from "@pages/Payments";
import Appointments from "@pages/Appointments";
import Error from "@pages/Error";
import ProtectedRoutes from "@components/ProtectedRoutes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Cases from "@pages/Cases";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  const definedRoutes = [
    "/",
    "/about",
    "/contact",
    "/blogs",
    "/blogs/:blogId",
    "/cases",
    "/register",
    "/login",
    "/book",
    "/payment",
    "/profile/:profileId",
    "/profile/:profileId/payments",
    "/profile/:profileId/appointments",
  ];

  const isDefinedRoute = definedRoutes.some((route) =>
    location.pathname.match(new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`))
  );
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile/:profileId" element={<Profile />}>
              <Route
                path="/profile/:profileId/payments"
                element={<Payments />}
              />
              <Route
                path="/profile/:profileId/appointments"
                element={<Appointments />}
              />
            </Route>
          </Route>
        </Routes>
      </main>
      {isDefinedRoute && <Footer />}
    </>
  );
}

export default App;
