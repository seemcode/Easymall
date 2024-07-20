import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import Customers from "./pages/Customers";
import Addblog from "./pages/Addblog";
import Productlist from "./pages/Productlist";
import Brandlist from "./pages/Brandlist";
import Categorylist from "./pages/Categorylist";
// import Addproduct from "./pages/Addproduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<Enquiries />} />
          <Route path="blog-category-list" element={<Enquiries />} />
          <Route path="orders" element={<Enquiries />} />
          <Route path="customers" element={<Customers />} />
          <Route path="blog" element={<Addblog />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="list-category" element={<Categorylist />} />
          {/* <Route path="product" element={<Addproduct />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
