import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import Router from "./components/Router";


function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
      <Footer />
      <Copyright />
    </HashRouter>
  );
}

export default App;
