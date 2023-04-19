import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({course}) => {
    // console.log(course[0]);
  const taille=25
    return (
          <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
            <div className="course-item">
              <div className="course-thumb set-bg" data-setbg="img/courses/1.jpg" style={{backgroundImage: "url('img/courses/1.jpg')"}}>
                {/* <Link to='/login'>
                <div className="price" >Suivre</div>
                </Link> */}
                <Link to='/leson'>
                <div className="price" >Suivre</div>
                </Link>
              </div>
              <div className="course-info">
                <div className="course-text">
                  <h6>{course.title}</h6>
                  <p>{course.description.length > taille ? course.description.slice(0, taille) + '...': course.description}</p>
                  <div className="course-rating" style={{color: '#e59819'}}>
                        4.5
                        <i className="fa fa-star" />	
                        <i className="fa fa-star" />	
                        <i className="fa fa-star" />	
                        <i className="fa fa-star" />	
                        <i className="fa fa-star-half" />
                  </div>

                  <div className="students">{course.student.length} {course.student.length >1 ? 'Etudiants':'Etudiant'}</div>
                </div>
                <div className="course-author">
                  <div className="ca-pic set-bg" data-setbg="img/authors/1.jpg" style={{backgroundImage: "url('img/authors/1.jpg')"}}/>
                  <p>Créer par , <span>{course.user_name}</span></p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Body;