import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../public/Logo/TokoPaedi.png";
import Header from "./components/Header"
import Produk from "./components/DataProduk"

function App() {
  return (
    <>
      <Header />
      {/* <>test</> */}
      <Produk/>
      {/* <ListProduk/> */}
    </>
  );
}

export default App;
