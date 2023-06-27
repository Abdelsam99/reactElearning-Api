import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
const Body = ({ course }) => {
  // console.log(course[0]);
  const taille = 25;
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  const [filePdf, setFilePdf] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filePresentation, setFilePresentation] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [autor, setAutor] = useState(1);
  const [deleteCourseId, setDeleteCourseId] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [error, setError] = useState(false);
  const [courseId, setCourseId] = useState(course.id);
  const [showModal, setShowModalLeson] = useState(false);

  const handleSubmitLeson = (event) => {
    event.preventDefault();
    if (name === "" || (video === "" && filePdf === "")) {
      setError(true);
    } else {
      axios
        .post(
          "http://127.0.0.1:8000/elearning/lesson/list/",
          {
            name: name,
            video: video,
            filePdf: filePdf,
            courseID: courseId,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          setError(false);
          setShowModalLeson(false);
          setName("");
          setFilePdf("");
          setVideo("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handelButtonEdit = (e) => {
    setShowEditModal(true);
    // setisEdit(true);
    const courseId = e.target.value;
    axios
      .get("http://127.0.0.1:8000/elearning/course/" + courseId + "/")
      .then((res) => {
        // console.log(res);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setCategoryId(res.data.categoryId);
      });
  };
  const handelClick = (e) => {
    setShowModalLeson(true);
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
    if (title === "" || description === "") {
      setError(true);
    } else {
      const id = course.id;
      // console.log(id);
      axios
        .put("http://127.0.0.1:8000/elearning/course/" + id + "/update", {
          title: title,
          description: description,
          autor: autor,
          categoryId: categoryId,
          filePresentation: filePresentation
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          setShowEditModal(false);
          setError(false);
          setTitle("");
          setDescription("");
          setCategoryId("");
        }).catch((error) => {
          console.error(error);
        });
    }
  };
  const handelDelete = (e) => {
    setShowDeleteModal(true);
    const deleteCourseId = e.target.value;
    setDeleteCourseId(deleteCourseId)
  };
  const handelSubmitDelete = () => {
    // console.log('moi');
    axios
      .delete("http://127.0.0.1:8000/elearning/course/" + deleteCourseId+ "/delete")
      .then(() => {
        setShowDeleteModal(false);
        // setIsCat(true)
        // onCheck(isCat)
      });
  };
  return (
    <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
      <div className="course-item">
        <div
          className="course-thumb set-bg"
          data-setbg={ '" ' +course.filePresentation + '"'}
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
          <div className="course-text px-2">
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
                onClick={(e) => handelClick(e)}
              >
                <i className="bi bi-plus"></i>
                Leçon
              </Button>
              <Button
                variant="warning ms-2"
                value={course.id}
                onClick={(e) => handelButtonEdit(e)}
              >
                Modif
              </Button>
              <Button
                value={course.id}
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
          <Modal.Title>Nouveau cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmitEdit} encType="multipart/form-data">
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
            <Form.Group controlId="formBasicDescription" className="pt-2">
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
            <Form.Group controlId="formBasicfile" className="pt-2">
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
          <Modal.Title>Supprimer le cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicName">
            <h5>Voulez-vous vraiment supprimer le cours ?</h5>
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
      <Modal show={showModal} onHide={() => setShowModalLeson(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle leçon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitLeson} encType="multipart/form-data">
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom de la leçon</Form.Label>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="text"
                placeholder="Entrer le title du cours"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error ? (
                <Form.Text className="text-danger">
                  Veuillez saisir le nom de la leçon
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="formBasicfile" className="pt-2">
              <Form.Label>Vidéo de la leçon</Form.Label>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="file"
                name="video"
                // value={video}
                onChange={(e) => setVideo(e.target.files[0])}
              />
              {error ? (
                <Form.Text className="text-danger">
                  Veuillez donner une vidéo de présentation
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group controlId="formBasicfile" className="pt-2">
              <Form.Label>Fichier PDF de la leçon</Form.Label>
              <Form.Control
                style={{ border: error ? "1px solid red" : "" }}
                type="file"
                name="filePPdf"
                value={filePdf}
                onChange={(e) => setFilePdf(e.target.files[0])}
              />
              {error ? (
                <Form.Text className="text-danger">
                  Veuillez donner le fichier PDF de la leçon
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Control
              style={{ border: error ? "1px solid red" : "" }}
              type="hidden"
              placeholder="Entrer le title du cours"
              name="courseID"
              value={courseId}
            />

            <Button variant="primary mt-2" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModalLeson(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Body;
