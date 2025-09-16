import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AddEquipmentPage from "./pages/AddEquipmentPage";
import AllProducts from "./pages/AllProducts";
import DetailsPage from "./pages/DetailsPage";
import EditEquipProductPage from "./pages/EditEquipProductPage";
import MyProductsPage from "./pages/MyProductspage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/add_equipment" element={<AddEquipmentPage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/my_products" element={<MyProductsPage />} />
          <Route
            path="/edit_equip_product/:id"
            element={<EditEquipProductPage />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
