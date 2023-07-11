import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
//font awesome을 사용하기 위한 import
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ LoginBtn }) {
	const active = 'on';
	const hedaer = useRef(null);
	const toggleLogin = useRef(null);

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
					<li className='Login' onClick={() => LoginBtn.current.toggle()}>
						<Link to=''>Login</Link>
					</li>
					<li className='btn'>
						<Link to='/Register'>Register</Link>
					</li>
				</ul>

				{/* 모바일 전용 버튼 */}
				<Link to='' id='mo_menu' className='btnCall'>
					<FontAwesomeIcon icon={faBars} onClick={() => alert('mobile')} />
				</Link>
			</header>
		</>
	);
}

export default Header;
