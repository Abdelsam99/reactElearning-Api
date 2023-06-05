import Header from "../components/Header";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Category from "./Contact";
const Course = () => {
  const [categorie, setCategorie] = useState([]);
  const [vrai, setVrai] = useState(false);
  const [classe, setClasse] = useState('');
  const [cat, setCat] = useState('');
  const [cours, setCours] = useState([]);
  const [isClickCategory, setisClickCategory] = useState(false);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/elearning/categorie/list/").then((res) => {
      setCategorie(res.data);
    });
  }, []);
  const handelClick = (e) => {
    setisClickCategory(true);
    const idCategory = e.target.value;
    axios
      .get(
        "http://127.0.0.1:8000/elearning/courseCategorie/" + idCategory + "/"
      )
      .then((res) => {
        setCours(res.data);
      }).catch(error => console.error(error));
  };
  const handelClickList =(e)=>{
    // setCat(e.target.innerHTML)
    // categorie.map((cat)=>{
    //   setClasse(cat.name)
    //   if(cat===classe){
    //     setVrai(true)
    //     console.log(e.target.innerHTML);
    //   }else if(cat===classe){
    //     setVrai(true)
    //     console.log(e.target.textContent);
    //     // setClasse(true)
    //   }
    // })
  }
  return (
    <div>
      <Header />
      {/* Page info */}
      <div
        className="page-info-section set-bg"
        data-setbg="img/page-bg/1.jpg"
        style={{ backgroundImage: "url('img/page-bg/1.jpg')" }}
      >
        <div className="container">
          <div className="site-breadcrumb">
            <Link to="/">Acceuil</Link>
            <span>Cours</span>
          </div>
        </div>
      </div>
      {/* Page info end */}
      {/* search section */}
      <section className="search-section ss-other-page">
        <div className="container">
          <div className="search-warp">
            <div className="section-title text-white">
              <h2>
                <span>Rechercher tout les cours</span>
              </h2>
            </div>
            <div className="row ">
              <div className="col-lg-10 offset-lg-3 justify-content-center ">
                {/* search form */}
                <form className="course-search-form">
                  <input type="text" placeholder="Cours" />
                  <button className="site-btn btn-dark">Rechercher</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* search section end */}
      {/* course section */}
      <section className="course-section spad pb-0">
        <div className="course-warp">
          <ul className="course-filter controls">
            <li
              className="control active mixitup-control-active"
              data-filter="all"
            >
            <Link to="/course">All</Link>
            </li>
            {categorie.map((category) => (
              <>
                <li
                  onClick={(e) => handelClickList(e)}
                  className='control active'
                  key={category.id}
                >
                  <button
                    onClick={(e) => handelClick(e)}
                    value={category.id}
                    style={{ border: "0px", backgroundColor: "white"}}
                  >
                    {category.name}
                  </button>
                </li>
              </>
            ))}
          </ul>
          {isClickCategory ? (
            <div className="row course-items-area">
            {cours.map((course) => (
                <Body course={course} key={course.id} />
              ))}
          </div>
          ) : (
            <div className="row course-items-area">
              {categorie.map((cat) =>
                cat.categories.map((course) => (
                  <Body course={course} key={course.id} />
                ))
              )}
            </div>
          )}
        </div>
      </section>
      <br />
      {/* course section end */}
      <Footer />
    </div>
  );
};

export default Course;
