import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	const active = 'on';
	const hedaer = useRef(null);

	useEffect(() => {
		hedaer.current.classList.add('on');
	}, []);

	return (
		<>
			<header ref={hedaer}>
				<h1>
					<Link to='/'>LOGO</Link>
				</h1>

				<ul className='menu'>
					<li>
						<NavLink to='' activeClassName={active}>
							Info
						</NavLink>
					</li>
					<li>
						<NavLink to='/Members' activeClassName={active}>
							Members
						</NavLink>
					</li>
					<li>
						<NavLink to='/Youtube' activeClassName={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/Gallery' activeClassName={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='' activeClassName={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/Location' activeClassName={active}>
							Location
						</NavLink>
					</li>
				</ul>

				<ul className='Login_Area'>
					<li className='Login'>
						<Link to=''>Login</Link>
					</li>
					<li className='btn'>
						<Link to='/Register'>Register</Link>
					</li>
				</ul>

				{/* 모바일 전용 버튼 */}
				<Link to='' id='mo_menu' className='btnCall'>
					<i className='fa-solid fa-bars'></i>
				</Link>

				<div className='mobile_menu'></div>
			</header>
		</>
	);
}

export default Header;
