import React from 'react';
import './Introduction.css';
import { CloseButton } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


class Introduction extends React.Component {
	render() {
		
		return (
			<div
				className='intro'
				onClick={() => {
					window.location = '/';
				}}
			>
				<div className='intro2'>
					<h2 style={{ fontFamily: 'Monoton', fontSize: '8vw' }}>Introduction</h2>
					<br />
					<div className='Card'>
						<p style={{ position: 'inherit', textAlign: 'right', marginRight: '20px', marginTop: '10px' }}>
							<Link to='/' style={{ color: 'white' }}>
								<CloseButton variant='white' disabled />
							</Link>
						</p>
						<p>Bienvenue sur mon site personnel.</p>
						<p>
							Après plusieurs années de travail dans le secteur de la biologie marine, j'ai dû faire face à un changement de vie. C'est pour cela que début
							2019, j'ai débuté ma formation de développeur web au sein de la Wild Code School de Bidart.
						</p>
						<p>
							Durant mon cursus, j'ai étudié : <b>Html/CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>Node Js</b>, <b>SQL</b> et réalisé plusieurs projets que
							vous pouvez retrouver sur mon github.
						</p>
						<p>Ce site a été créé afin que vous puissiez découvrir mon travail de jeune développeur.</p>
						<p>Bonne visite et à bientôt pour de nouveaux projets. </p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Introduction;
