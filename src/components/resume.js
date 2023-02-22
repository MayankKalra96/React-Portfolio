import React from 'react';
import Jquery from '../assets/images/jquery-logo.png';
import Bootstrap from '../assets/images/bootstrap-logo.png';
import Mern from '../assets/images/mern-logo.png';
import Webpack from '../assets/images/webpack-logo.png';
import Handlebars from '../assets/images/handlebars-logo.png';
import Sql from '../assets/images/sql-logo.png';
import Mongo from '../assets/images/mongodb-logo.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                { <h3>Download Resume: <a href="https://github.com/MayankKalra96/react-portfolio/raw/master/src/assets/mayankkalra_resume.pdf">Mayank Kalra</a>
                                </h3> }
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Mern} className='img-skills' />
                                    </div>
                                    <div className='grid-item-skills'>
                                        <img src={Jquery} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Webpack} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Bootstrap} className='img-skills' />
                                    </div>


                                    <div className='grid-item-skills'>
                                        <img src={Handlebars} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Sql} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Mongo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;
