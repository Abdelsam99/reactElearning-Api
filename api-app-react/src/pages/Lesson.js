import React,{useRef, useState,useEffect} from 'react';
import ReactPlayer from 'react-player'
import axios from "axios";
import LessonBody from '../components/LessonBody';
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Lesson = () => {
    const [duration, setDuration] = useState(null);
    const [lessons, setLesson] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    const handleChildClick = (data) => {
      setSelectedData(data);
    }

    function handleDuration() {
        const duration = playerRef.current.getDuration();
        setDuration(duration);
      }
        function formatDuration(durationInSeconds) {
          const minutes = Math.floor(durationInSeconds / 60);
          const seconds = durationInSeconds - minutes * 60;
          return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        const formattedDuration = formatDuration(duration);
        useEffect(() => {
          axios.get("http://127.0.0.1:8000/elearning/lesson/list/").then((res) => {
            setLesson(res.data);
            // console.log(res.data[0].name);
          });
        }, []);
        const playerRef = useRef(null);
        const videoUrl = `${selectedData}`;
        // if selectedData
        // console.log(selectedData.name);

    return (
        <>
         <Header />
         <div
        className="page-info-section set-bg"
        data-setbg="img/page-bg/1.jpg"
        style={{ backgroundImage: "url('img/page-bg/1.jpg')" }}
      >
        <div className="container">
          <div className="site-breadcrumb">
            <Link to="/">Acceuil</Link>
            <Link to="/course"><span className='px-0 text-light'>Cours</span></Link>
            <span>Lesson</span>
          </div>
        </div>
      </div>
{/* Page  */}
<section className="search-section ss-other-page">
  <div className="container-fluid">
    <div className="row contact-form-warp" style={{ padding: '55px'}}>
      <div className="col-lg-9">
        {/* blog post */}

        <ReactPlayer ref={playerRef} url={selectedData ? selectedData.video :'cours' } onDuration={handleDuration} controls/>

        <div className="blog-post">
          <h3 style={{color: 'white'}} >{selectedData ? selectedData.name : ''}</h3>
          <div className="blog-metas">
            <div className="blog-meta author">
              <div className="post-author set-bg" data-setbg="img/authors/1.jpg" />
              <a href="#" style={{color: 'white'}}>James Smith</a>
            </div>
            <div className="blog-meta">
              <a href="#" style={{color: 'white'}}>Development</a>
            </div>
            <div className="blog-meta">
              <a href="#" style={{color: 'white'}}>June 12, 2018</a>
            </div>
            <div className="blog-meta" >
            {duration && <a href="#" style={{color: 'white'}}>Durée de la vidéo : {formattedDuration}</a> }
            </div>
          </div>
          <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna. </p>
          <a href="#" className="site-btn readmore">Read More</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-5 col-sm-9 sidebar">
        <div className="sb-widget-item">
          <h4 className="sb-w-title" style={{color: 'white'}}>Listes des leçons</h4>
          <ul>
          {lessons.map((lesson)=>( 
              <LessonBody content={lesson} key={lesson.id} onClickParent={handleChildClick} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Page end */}

        </>
    );
};

export default Lesson;