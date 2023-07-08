
// import AllRoutes from './Components/AllRoutes';
// import Product from './Components/Product';

import AllRoutes from "./Components/Home/AllRoutes";
import Footer from "./Components/Home/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
