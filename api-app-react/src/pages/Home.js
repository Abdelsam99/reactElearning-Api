import Header from "../components/Header";
import { Button, Modal, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/Category";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formValues));
    if (name === "") {
      setError(true);
    } else {
      axios
        .post("http://127.0.0.1:8000/elearning/categorie/list/", {
          name: name,
        })
        .then(() => {
          setError(false);
          setShowModal(false);
          setName("");
          getData();
        });
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/elearning/categorie/list/")
      .then((res) => setData(res.data));
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (checked) => {
    setIsChecked(checked);
    // console.log(checked);
    if (isChecked) {
      getData();
    }else{
      getData();
    }
  };
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
              <Button
                onClick={() => setShowModal(true)}
                className="site-btn readmore"
              >
                Ajouter Catégorie
              </Button>
            </p>
          </div>
          <div className="row">
            {data
              .sort((a, b) => b.id - a.id)
              .map((cat) => (
                <Category key={cat.id} category={cat} isChecked={isChecked} onCheck={handleCheck}/>
              ))}
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une nouvelle catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nom du catégorie</Form.Label>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="name"
                placeholder="Entrer le nom du catégorie"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error ? (
                <Form.Text className="text-danger">
                  Veuillez saisir le nom de la catégorie
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Button variant="primary mt-2" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
