import axios from "axios";

function Produk(callback) {

    axios.get("https://fakestoreapi.com/products").then((res)=> {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })

}

export default Produk
