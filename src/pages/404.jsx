import React from 'react';
import './Introduction.css';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
	<div className='intro' onClick={() => {window.location = '/';}}>
				<div className='intro2'>
					<h2 style={{ fontFamily: 'Monoton' }}>Oups !!</h2>
					<br />
					<div className='Card'>
						<p style={{ position: 'inherit', textAlign: 'right', marginRight: '20px' }}>
							<Link to='/' style={{ color: 'white' }}>
								<Icon className='icon'>close</Icon>
							</Link>
						</p>
						
						<p>
							Je suis désole de vous dire que la page que vous recherchez n'existe pas.
						</p>
						
					</div>
				</div>
			</div>
		)
}

export default Error;
