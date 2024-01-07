
import Body from "./components/body/Body.tsx";
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen minh-full relative">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
