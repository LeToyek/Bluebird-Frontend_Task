import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import WishlistPage from "./pages/WishlistPage.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen minh-full relative">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
