import React from 'react';
import './Introduction.css';
import { CloseButton } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Error = () => {
	return (
		<div
			className='intro'
			onClick={() => {
				window.location = '/';
			}}
		>
			<div className='intro2'>
				<h2 style={{ fontFamily: 'Monoton', fontSize: '8vw' }}>Oups !!</h2>
				<br />
				<div className='Card'>
					<p style={{ position: 'inherit', textAlign: 'right', marginRight: '20px', marginTop: '10px' }}>
						<Link to='/' style={{ color: 'white' }}>
							<CloseButton variant='white' disabled />
						</Link>
					</p>

					<p>Je suis désole de vous dire que la page que vous recherchez n'existe pas.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
