import React from 'react';
import './style.scss';
import Footer from './footer';

const Header = ({ siteTitle }) => (
	<section className="header-intro hero is-fullheight-with-navbar is-large ">
		<h1 class="title is-4">STEVE MARVINS</h1>
		<div class="hero-body-padding">
			<div class="columns">
			  <div class="column is-one-quarter">
	 	     	<div class="container has-text-centered align-1">
						<div class="has-text-left">
							<p class="title is-1">Web Design <br/> Guidelines </p>
						</div>
			    </div>
			  </div>
				<div class="column is-narrow">
					<div class="number-box">
							<p class="number-size">00</p>
					</div>
				</div>
			  <div class="column">
				   <div class="container">
				     <p class="subtitle is-4">This is a simple site to show you the guidelines and philosophy that I follow to achieve the required design of a particular task or project. <br/><br/> The overall objective of these rules is to achieve a fast, efficient and managable front-end code.</p>
				   </div>
			  </div>
			</div>
		</div>
	<Footer	/>

	</section>
);

export default Header;
