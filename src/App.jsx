import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../public/Logo/TokoPaedi.png";
import Header from "./components/Header"
import Produk from "./components/DataProduk"
// import Deskripsi from "./components/Deskripsi";

function App() {
  return (
    <>
      <Header />
      {/* <Deskripsi/> */}
      {/* <>test</> */}
      <Produk/>
      {/* <ListProduk/> */}
    </>
  );
}

export default App;
