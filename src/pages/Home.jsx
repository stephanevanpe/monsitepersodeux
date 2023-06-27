import React from 'react';
import Footer from '../components/Footer';
import './Home.css';
import {Row} from 'react-materialize';
import { Link } from 'react-router-dom';
import pdf from './cv_svp.pdf';
import profil from '../images/IMG_4191.png';
import ReactTypingEffect from 'react-typing-effect';
import { inherits } from 'util';


const Home = () => {
	return (
		<div className='home'>
			<div className='home2'>
				<img alt='' className=' profil circle center-align' src={profil} />
				<Row>
					<h1 style={{ fontFamily: 'Lavishly Yours' }}>Stéphane Van-Pé</h1>
					<h2 className='title'>
						<ReactTypingEffect text={['Développeur Web et Web Mobile']} cursorRenderer={(cursor) => <h2 style={{ fontFamily: 'inherits',color:'turquoise' }}>{cursor}</h2>} />
					</h2>
				</Row>
				<br />
				<Row>
					<Link to='/introduction' className='link'>
						INTRO
					</Link>
					&nbsp; &nbsp;&nbsp;
					<Link to='/realisations' className='link'>
						PROJETS
					</Link>
					&nbsp;&nbsp;&nbsp;
					<a target='_blank' rel='noreferrer' href={pdf} style={{ color: 'white', textDecoration: 'underline dotted' }}>
						C.V.
					</a>
				</Row>
				<br />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
