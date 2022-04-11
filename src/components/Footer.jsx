import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';



const Footer = () => (
	<div className='footer'>
		<p> © Réalisé par: STÉPHANE VAN-PÉ 2022. </p>
		<p>
			<SocialIcon url='https://github.com/stephanevanpe' style={{ height: 50, width: 50 }} fgColor='#ffffff' bgColor='none' />{' '}
			
			<SocialIcon url='https://fr.linkedin.com/in/stephane-van-pe' style={{ height: 50, width: 50 }} fgColor='#ffffff' bgColor='none' />
		</p>
	</div>
);

export default Footer;
