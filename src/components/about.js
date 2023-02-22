import React from 'react';
import Avatar from '../assets/images/avatar.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” — Steve Jobs

                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>

                                <div className="grid-item">
                                        <div className='title-uni'>University of Toronto, Toronto</div>
                                        <div className='title-concentration'>Boot Camp Certificate – Full Stack Development </div>
                                    <br></br>

                                        <div className='title-uni'>George Brown College, Toronto</div>
                                        <div className='title-concentration'>Post Graduate Diploma – Human Resource Management </div>
                                    </div>

                                    <div className="grid-item">
                                    <a href='https://bootcamp.learn.utoronto.ca/coding/' target='_blank'>UofT</a>
                                    <br>
                                    
                                    
                                    </br>
                                    <br>
                                    </br>
                                    <br></br>
                                    <br></br>
                                      <a href='https://www.georgebrown.ca/' target='_blank'>George Brown</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
