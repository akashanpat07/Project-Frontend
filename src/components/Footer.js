import React from 'react';
import '../css/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">JobNexus  By Akash Anpat</h2>
                <div className="footer-details">
                    <div className="footer-item">
                        <i className="fa fa-map-marker"></i>
                        <p>Pune, India</p>
                    </div>
                    <div className="footer-item">
                        <i class="fa-solid fa-envelope"></i>
                        <p><a href="mailto:myjobnexus@gmail.com">myjobnexus@gmail.com</a></p>
                    </div>
                    <div className="footer-item phone-item">
                        <i className="fa fa-phone"></i>
                        <p>(+91) 8600825622</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
