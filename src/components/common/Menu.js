import { close } from '../../redux/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function Menu({ login }) {
	const dispatch = useDispatch();
	const active = 'on';
	const menu = useSelector((store) => store.menu.open);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) {
				dispatch(close());
			}
		});
	}, [dispatch]);

	return (
		<AnimatePresence>
			{menu && (
				<motion.nav
					id='mobilePanel'
					initial={{ opacity: 0, y: '-100vh' }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.5 } }}
				>
					<h1 onClick={() => dispatch(close())}>
						<Link to='/'>LOGO</Link>
					</h1>

					<ul id='gnbMo' onClick={() => dispatch(close())}>
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
							<NavLink to='/Community' activeClassName={active}>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink to='/Location' activeClassName={active}>
								Location
							</NavLink>
						</li>
						<li
							className='Login'
							onClick={() => {
								dispatch(close());
								login.current.toggle();
							}}
						>
							<Link to='#'>Login</Link>
						</li>
						<li className='btn'>
							<NavLink to='/Register' activeClassName={active}>
								Register
							</NavLink>
						</li>
					</ul>

					<span className='btn_x' onClick={() => dispatch(close())}></span>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;
