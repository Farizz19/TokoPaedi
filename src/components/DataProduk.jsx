import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Produk from "./APIProduk";
import Cart from "../../public/Logo/Keranjang.png";

import "../css/DataProduk.css";

function DataProduk() {
  const [ListProduk, setDataProduk] = useState([]);

  useEffect(() => {
    Produk((data) => {
      setDataProduk(data);
    });
  });

  return (
    <div>
      <section>
        <div className="container">
          <div className="cards">
            {ListProduk.map((data) => (
              <div className="card">
                <img width={200} className="m-auto" src={data.image} />
                <span className="mb-3 text-uppercase">
                  <b>{data.title}</b>
                </span>
                <span className="mb-3 text-capitalize">
                  Category : {data.category}
                </span>

                <span className="text-light bg-success p-2 rounded">
                  Price : <u>{data.price}</u>
                </span>
                <hr />
                <button className="btn1">Buy</button>
                <button className="btn2">Add To Card</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataProduk;
