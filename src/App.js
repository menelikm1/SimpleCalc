import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CalculationsProvider } from "./context/CalculationsContext";

function App() {
  return (
    <CalculationsProvider>
      <div className="flex flex-col justify-center justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-12 pb-12">
          <Calculator />
        </main>
        <Footer />
      </div>
    </CalculationsProvider>
  );
}

export default App;
