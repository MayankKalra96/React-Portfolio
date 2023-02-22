import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/MayankKalra96" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/mayank-kalra-8a4832205/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            </div>
        </div>
    )
}

export default Footer;