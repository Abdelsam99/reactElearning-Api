import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/Category";
const Home = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            axios
            .get("http://127.0.0.1:8000/elearning/categorie/list/")
            .then((res) => setData(res.data));
        }, []);
  return (
    <div>
      <Header />
      <section
        className="hero-section set-bg"
        data-setbg="img/bg.jpg"
        style={{ backgroundImage: "url('img/bg.jpg')" }}
      >
        <div className="container">
          <div className="hero-text text-white">
            <h2>Obtenu des meilleurs cours en ligne</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla <br />{" "}
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </div>
        </div>
      </section>
      <section className="categories-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Nos Catégories de cours</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </div>
          <div className="row">
                {data.map((category)=>(
                    <Category category={category} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
