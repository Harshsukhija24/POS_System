import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import ReceiptPage from "./Pages/ReceiptPage";
import CheckoutPage from "./Pages/CheckOutPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/CheckOutPage" element={<CheckoutPage />} />
            <Route path="/ReceiptPage" element={<ReceiptPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
