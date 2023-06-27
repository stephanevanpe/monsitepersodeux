import React from 'react'; 

import { CloseButton } from 'reactstrap';
import { Link } from 'react-router-dom';
import gps from '../images/gps.png';
import aps from '../images/aps.png';
import Footer from '../components/Footer';

const Realisations = () => {
	return (
		<div
			className='intro'
			onClick={() => {
				window.location = '/';
			}}
		>
			<div className='intro2'>
				<h2 style={{ fontFamily: 'Monoton', fontSize: '8vw' }}>Projets</h2>
				<br />
				<div className='Card'>
					<p style={{ position: 'inherit', textAlign: 'right', marginRight: '20px', marginTop: '10px' }}>
						<Link to='/' style={{ color: 'white' }}>
							<CloseButton variant='white' disabled />
						</Link>
					</p>
					<div style={{ columnWidth: '30em' }}>
						<p style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px', textDecoration: 'underline' }}>Projets Proffessionnels :</p>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							I CLEAN MY SEA{' '}
							<p style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
								Cette application web a servi de base pour la création de l'application native disponible sur les stores:
							</p>
							<p>
								<a target='_parent' rel='noopener' href='https://play.google.com/store/apps/details?id=fr.icleanmysea&gl=FR'>
									<img src={gps} alt='logo play store' />
								</a>{' '}
								<a target='_parent' rel='noopener' href='https://apps.apple.com/fr/app/i-clean-my-sea/id1524630568'>
									<img src={aps} alt='logo app store' />
								</a>
							</p>
						</li>
						<br />
						<p style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px', textDecoration: 'underline' }}>Projets en Formation :</p>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://blogteam.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Blog Big Pig Junk Food
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://lotrsnk.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Site LOTR
							</a>
						</li>
						<p style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px', textDecoration: 'underline' }}>Projets Personnels :</p>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://stickerssvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								E-commerce: Les Stickers de Stef
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://weathersvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Application météo
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://quizappsvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Quiz application
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a
								target='_parent'
								rel='noopener'
								href='https://corona-trackersvp.netlify.app/'
								style={{ color: 'white', textDecoration: 'underline dotted' }}
							>
								Corona tracker
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://lightsvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Ampoules
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://clocksvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Horloge numérique
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://todo-listsvp.netlify.app/' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Todo list
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://morpionsvp.netlify.app' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Jeu du morpion
							</a>
						</li>
						<li style={{ position: 'inherit', textAlign: 'left', marginLeft: '20px' }}>
							<a target='_parent' rel='noopener' href='https://grillephotossvp.netlify.app' style={{ color: 'white', textDecoration: 'underline dotted' }}>
								Exemple grille de photos
							</a>
						</li>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};


export default Realisations;
