import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const Layout = forwardRef(({ id, title, children }, ref) => {
	const Sub_Layout = useRef(null);
	const [Loading, setLoading] = useState(false);

	//자식 컴포넌트가 아닌 특정 커스텀 객체를 부모로 전달
	useImperativeHandle(ref, () => {
		return { Open: () => setLoading(true), Close: () => setLoading(false) };
	});

	useEffect(() => {
		Sub_Layout.current.classList.add('on');
	}, []);

	return (
		<>
			<section id={id} className='Sub_Layout' ref={Sub_Layout}>
				<div className='wrap'>
					<div className='title'>
						<div className='main'>
							<h1>{title}</h1>
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

			{Loading && (
				<div className='loading_Area'>
					<img src={`${process.env.PUBLIC_URL}/img/sub/loading.gif`} alt='loading' className='loading' />
				</div>
			)}
		</>
	);
});

export default Layout;
