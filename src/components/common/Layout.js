import { useEffect, useRef } from 'react';

function Layout({ id, name, children }) {
	const Sub_Layout = useRef(null);

	useEffect(() => {
		Sub_Layout.current.classList.add('on');
	}, []);

	return (
		<>
			<section id={id} className='Sub_Layout' ref={Sub_Layout}>
				<div className='wrap'>
					<div className='title'>
						<div className='main'>
							<h1>{name}</h1>
						</div>
						<div className='sub'>
							<h2>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe autem labore ut voluptate mollitia a consequatur possimus blanditiis cumque, sit vitae rem optio id minima sed
								doloremque. Debitis, aut? Sint.
							</h2>
						</div>
					</div>
					{children}
				</div>
			</section>
		</>
	);
}

export default Layout;
