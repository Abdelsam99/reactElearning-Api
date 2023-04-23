import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
const Body = ({ course }) => {
  // console.log(course[0]);
  const taille = 25;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [error, setError] = useState(false);

  const handelButtonEdit = (e) => {
    setShowEditModal(true);
    // setisEdit(true);
    // const categorieName = e.target.value;
    // axios
    //   .get("http://127.0.0.1:8000/elearning/categorie/" + categorieName + "/")
    //   .then((res) => {
    //     // setName(res.data.name);
    //   });
  };
  const handelSubmitEdit = (e) => {
    e.preventDefault();
    // if (error) {
    //   setError(true);
    // } else {
    //   const id = id;
    //   console.log(id);
    //   axios
    //     .put("http://127.0.0.1:8000/elearning/categorie/" + id + "/update", {
    //       name: name,
    //     })
    //     .then(() => {
    //       setError(false);
    //       setName("");
    //       setisEdit(false);
    //       setIsCat(true)
    //       onCheck(isCat)
    //     });
    // }
  };
  const handelDelete = (e) => {
    setShowDeleteModal(true);
    // setDelete(true);
    // const deleteCategorieID = e.target.value;
    // setdeleteCategorieID(deleteCategorieID)
  };
  const handelSubmitDelete = () => {
    // console.log('moi');
    // axios
    //   .delete("http://127.0.0.1:8000/elearning/categorie/" + deleteCategorieID+ "/delete")
    //   .then(() => {
    //     setShowDeleteModal(false);
    //     // setIsCat(true)
    //     // onCheck(isCat)
    //   });
  };
  return (
    <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
      <div className="course-item">
        <div
          className="course-thumb set-bg"
          data-setbg="img/courses/1.jpg"
          style={{ backgroundImage: "url('" + course.filePresentation + "')" }}
        >
          {/* <Link to='/login'>
                <div className="price" >Suivre</div>
                </Link> */}
          <Link to="/leson">
            <div className="price">Suivre</div>
          </Link>
        </div>
        <div className="course-info">
          <div className="course-text">
            <h6>{course.title}</h6>
            <p>
              {course.description.length > taille
                ? course.description.slice(0, taille) + "..."
                : course.description}
            </p>
            <div className="course-rating" style={{ color: "#e59819" }}>
              4.5
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half" />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button
                variant="primary "
                value=""
                onClick={(e) => handelButtonEdit(e)}
              >
                Ajouter
              </Button>
              <Button
                variant="warning ms-2"
                value=""
                onClick={(e) => handelButtonEdit(e)}
              >
                Modif
              </Button>
              <Button
                value=""
                onClick={(e) => handelDelete(e)}
                variant="danger ms-2"
              >
                Supp
              </Button>
            </div>
            <div className="" style={{ color: "blue", marginTop: "10px" }}>
              {course.student.length}{" "}
              {course.student.length > 1 ? "Etudiants" : "Etudiant"}
            </div>
          </div>
          <div className="course-author">
            <div
              className="ca-pic set-bg"
              data-setbg="img/authors/1.jpg"
              style={{ backgroundImage: "url('img/authors/1.jpg')" }}
            />
            <p>
              Créer par , <span>{course.user_name}</span>
            </p>
          </div>
        </div>
      </div>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier la catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmitEdit} encType="multipart/form-data">
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom du catégorie</Form.Label>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="text"
                placeholder="Entrer le nom du catégorie"
                name="title"
                // onChange={(e) => setName(e.target.value)}
                // value={name}
              />
              {error ? (
                <Form.Text className="text-danger">
                  Veuillez saisir le title
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="warning mt-2" type="submit">
              Modifier
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowEditModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer la catégorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicName">
            <h5>Voulez-vous vraiment supprimer la catégorie ?</h5>
          </Form.Group>
          <Button
            onClick={() => handelSubmitDelete()}
            variant="danger mt-2"
            type="submit"
          >
            Oui je confirme
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Body;
