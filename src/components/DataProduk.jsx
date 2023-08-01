import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

// import ReadMoreReact from "read-more-react";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Produk from "./APIProduk";
import Cart from "../../public/Logo/Keranjang.png";

import "../css/DataProduk.css";

function DataProduk() {
  // const Deskripsi = ({ des }) => {
  const [ListProduk, setDataProduk] = useState([]);

  useEffect(() => {
    Produk((data) => {
      setDataProduk(data);
    });
  });

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="cards">
            {ListProduk.map((data) => (
              <div className="card">
                <img width={200} className="m-auto" src={data.image} />
                <span id="brandtitle" className="mb-3 text-uppercase">
                  <b>{data.title}</b>
                </span>

                <span className="mb-3 text-capitalize">
                  <b>Category : {data.category}</b>
                </span>

                {/* <span className="text-capitalize">
                    <p>{data.description}</p>
                  </span> */}

                <span className="text-light bg-success p-2 rounded">
                  <b>
                    Price : <u>${data.price}</u>
                  </b>
                </span>
                <hr />
                <button className="btn1">Buy</button>
                <button className="btn2">Add To Card</button>

                {/* <span className="mb-3 text-capitalize">
                  <b>Category : {data.id}</b>
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export default DataProduk;
