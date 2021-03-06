import React from "react";
import "./Footer.css";
import footerLogo from "../../image/logo.svg";

const Footer = () => {
	return (
		<footer className="footer-main">
			<div 
				data-aos-anchor="#medium-animation-trigger"
				data-aos="fade-ib"
				data-aos-delay="1550"
				data-aos-duration="1000"

				className="footer-wrapper wrapper"
			>
				<div className="footer-logoch">
					<div className="content">
						<img src={footerLogo} alt="" />
						<p>© Copyright 2020 Practiq. All rights reserved.</p>
					</div>
				</div>

				<div className="footer-contact">
					<div className="general">
						<p>General</p>
						<a href="#services-block_anchor">What we do</a>
						<a href="#how-it-works_anchor">How it works</a>
						<a href="#who-block_anchor">About us</a>
					</div>

					<div className="contacts">
						<p>Contacts</p>
						<a href="plugged">hello@practiq.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
