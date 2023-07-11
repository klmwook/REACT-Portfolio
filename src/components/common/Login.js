import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(true);

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav id='mobilePanel' initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }} exit={{ opacity: 0, x: -200, transition: { duration: 0.5 } }}>
					<div>
						<ul>
							<li>
								<h1>LOGIN</h1>
							</li>
							<li>
								<input type='text' />
							</li>
							<li>
								<input type='text' />
							</li>
							<li>
								<input type='button' />
							</li>
						</ul>
						<div>
							<div className='left'>
								<input type='text' />
								<label htmlFor=''></label>
							</div>
							<div className='right'>
								<span>회원가입</span>
								<span>|</span>
								<span>아이디/비밀번호 찾기</span>
							</div>
						</div>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Login;
