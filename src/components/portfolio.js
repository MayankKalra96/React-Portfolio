import React from 'react';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                  <strong>  Worked on following projects:
<br></br>
                                   - Book Search<br></br>
                                   - Pizza Hunger<br></br>
                                   - Note taker<br></br>
                                   - Employee Tracker<br></br>
                                   - Profile Generator<br></br>
                                   - Code quiz<br></br>
                                   - PWA Application<br></br>
                                
                                   - Weather Dashboard<br></br>
                                   - Shop-shop<br></br>
                                   - Tech Blog<br></br>
                                   - How to learn Regex (Gist)<br></br>
                                   - Shop-shop<br></br>
                                    
                                    </strong>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
