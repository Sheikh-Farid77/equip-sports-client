import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AddEquipmentPage from "./pages/AddEquipmentPage";
import AllProducts from "./pages/AllProducts";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add_equipment" element={<AddEquipmentPage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
