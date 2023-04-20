import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
const Category = ({isChecked,onCheck, category }) => {

  const [isCat, setIsCat] = useState(isChecked);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filePresentation, setFilePresentation] = useState("");
  const [categoryId, setCategoryId] = useState(category.id);
  const [autor, setAutor] = useState(1);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [name, setName] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [deleteCategorieID, setdeleteCategorieID] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" || description === "" || filePresentation === "") {
      setError(true);
    } else {
      axios
        .post(
          "http://127.0.0.1:8000/elearning/course/list/",
          {
            title: title,
            description: description,
            filePresentation: filePresentation,
            autor: autor,
            categoryId: categoryId,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          setError(false);
          setShowModal(false);
          setIsCat(true)
          onCheck(isCat)
          setDescription("");
          setFilePresentation("");
          setTitle("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };



  const handelButtonEdit = (e) => {
    setShowEditModal(true);
    setisEdit(true);
    const categorieName = e.target.value;
    axios
      .get("http://127.0.0.1:8000/elearning/categorie/" + categorieName + "/")
      .then((res) => {
        setName(res.data.name);
      });
  };

  const handelDelete = (e) => {
    setShowDeleteModal(true);
    setDelete(true);
    const deleteCategorieID = e.target.value;
    setdeleteCategorieID(deleteCategorieID)
  };
  const handelSubmitDelete = () => {
    console.log('moi');
      axios
        .delete("http://127.0.0.1:8000/elearning/categorie/" + deleteCategorieID+ "/delete")
        .then(() => {
          setShowDeleteModal(false);
          setIsCat(true)
          onCheck(isCat)
        });
  };
  const handelSubmitEdit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError(true);
    } else {
      const id = categoryId;
      console.log(id);
      axios
        .put("http://127.0.0.1:8000/elearning/categorie/" + id + "/update", {
          name: name,
        })
        .then(() => {
          setError(false);
          setName("");
          setisEdit(false);
          setIsCat(true)
          onCheck(isCat)
        });
    }
  };
  return (
    <div className="col-lg-4 col-md-6">
      <div className="categorie-item">
        <div
          className="ci-thumb set-bg"
          data-setbg="img/categories/2.jpg"
          style={{ backgroundImage: "url('img/categories/2.jpg')" }}
        />
        <div className="ci-text pb-0">
          <h5>{category.name}</h5>
          <p>{category.slug}</p>
          <span>
            {category.categories.length}{" "}
            {category.categories.length > 1 ? "Cours" : "Cour"}
          </span>{" "}
          <br />
          <Button onClick={() => setShowModal(true)} variant="primary mt-2">
            <i className="bi bi-plus"></i>Cours
          </Button>
        </div>
        <div className="p-3 d-flex justify-content-end">
          <Button
            variant="warning "
            value={category.id}
            onClick={(e) => handelButtonEdit(e)}
          >
            Modif
          </Button>
          <Button 
            value={category.id}
            onClick={(e) => handelDelete(e)} 
            variant="danger ms-2">Supp
          </Button>
        </div>
      </div>
      {isEdit ? (
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
      ) : (
        ""
      )}
      {isDelete ? (
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Supprimer la catégorie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group controlId="formBasicName">
                <h5>Voulez-vous vraiment supprimer la catégorie ?</h5>
              </Form.Group>
              <Button 
                onClick={() => handelSubmitDelete()}  variant="danger mt-2" type="submit">
                Oui je confirme
              </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Nouveau cours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group controlId="formBasicName">
                <Form.Label>Title du cours</Form.Label>
                <Form.Control
                  style={{ border: error ? "1px solid red" : "" }}
                  type="text"
                  placeholder="Entrer le title du cours"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {error ? (
                  <Form.Text className="text-danger">
                    Veuillez saisir le title
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Description du cours</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ border: error ? "1px solid red" : "" }}
                  type="text"
                  placeholder="Entrer le title du cours"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {error ? (
                  <Form.Text className="text-danger">
                    Veuillez donner une description du cours
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group controlId="formBasicfile">
                <Form.Label>Image de présentation du cours</Form.Label>
                <Form.Control
                  style={{ border: error ? "1px solid red" : "" }}
                  type="file"
                  name="filePresentation"
                  // value={filePresentation}
                  onChange={(e) => setFilePresentation(e.target.files[0])}
                />
                {error ? (
                  <Form.Text className="text-danger">
                    Veuillez donner une image de présentation
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="hidden"
                placeholder="Entrer le title du cours"
                name="autor"
                value={autor}
                onChange={() => setAutor(1)}
              />
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="hidden"
                placeholder="Entrer le title du cours"
                name="categoryId"
                value={categoryId}
              />

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

export default Category;
