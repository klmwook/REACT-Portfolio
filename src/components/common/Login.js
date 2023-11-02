import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav id='LoginPanel' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
					<div className='con'>
						<ul>
							<li>
								<h1>LOGIN</h1>
							</li>
							<li>
								<input type='text' placeholder='아이디' />
							</li>
							<li>
								<input type='password' placeholder='비밀번호' />
							</li>
							<li>
								<input type='button' value='로그인' />
							</li>
						</ul>
						<div className='input_area'>
							<div className='left'>
								<input type='checkbox' id='save_id' />
								<label htmlFor='save_id'>아이디 저장</label>
							</div>
							<div className='right'>
								<Link to='/Register' onClick={() => setOpen(false)}>
									회원가입
								</Link>
							</div>
						</div>
						<span className='btn_x' onClick={() => setOpen(false)}></span>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Login;
