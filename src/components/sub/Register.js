import React, { useRef, useState, useEffect, useCallback } from 'react';
import Layout from '../common/Layout';
import { useDebounce } from '../../hooks/useDebounce';

function Register() {
	const selectEl = useRef(null);
	const radioGroup = useRef(null);
	const checkGroup = useRef(null);
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: '',
		interests: [],
		edu: '',
		comments: '',
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const DebouncedVal = useDebounce(Val);

	const handleChange = (e) => {
		//현재 입력하고 있는 input요소의 name,value값을 비구조화할당으로 뽑아서 출력
		const { name, value } = e.target;
		//기존 초기 Val State값을 deep copy해서 현재 입력하고 있는 항목의 name값과 value값으로 기존 State를 덮어쓰기 해서 변경 (불변성 유지)
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = (e) => {
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		//모든 체크박스를 반복돌면서 하나라도 체크되어 있는게 있으면 true값 반환
		let checkArr = [];
		inputs.forEach((el) => {
			if (el.checked) checkArr.push(el.value);
		});
		setVal({ ...Val, [name]: checkArr });
	};

	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
		setSubmit(true);
	};

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}
		if (value.pwd1.length < 5 || !eng.test(value.pwd1) || !num.test(value.pwd1) || !spc.test(value.pwd1)) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
		}
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일주소는 8글자 이상 @를 포함하세요.';
		}
		if (value.gender === '') {
			errs.gender = '성별을 체크해주세요.';
		}
		if (value.interests.length === 0) {
			errs.interests = '관심사를 하나 이상 체크하세요.';
		}
		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요.';
		}
		if (value.comments.length < 10) {
			errs.comments = '남기는 말을 최소 10글자 이상 입력하세요.';
		}
		return errs;
	};

	const resetForm = () => {
		const select = selectEl.current.options[0];
		const checks = checkGroup.current.querySelectorAll('input');
		const radios = radioGroup.current.querySelectorAll('input');
		select.selected = true;
		checks.forEach((el) => (el.checked = false));
		radios.forEach((el) => (el.checked = false));
		setVal(initVal);
	};

	const showErr = useCallback(() => {
		console.log('showErr');
		setSubmit(false);
		setErr(check(DebouncedVal));
	}, [DebouncedVal]);

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('모든 인증을 통과했습니다. ');
			//history.push('/');
			resetForm();
		}
	}, [Err]);

	useEffect(() => {
		showErr();
	}, [DebouncedVal, showErr]);

	return (
		<>
			<Layout id={'Sub_Register'} title={'Register'}>
				<div className='contents'>
					<div className='form_area'>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<legend className='h'>회원가입 폼 입력 항목</legend>
								<table>
									<tbody>
										<tr>
											<th scope='row'>
												<label htmlFor='userid'>User ID</label>
											</th>
											<td>
												<div className='input_Area'>
													<input type='text' name='userid' id='userid' onChange={handleChange} value={Val.userid} required />
													<label>아이디를 입력하세요.</label>
												</div>
												{Err.userid && <p>{Err.userid}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd1'>Password</label>
											</th>
											<td>
												<div className='input_Area'>
													<input type='password' name='pwd1' id='pwd1' onChange={handleChange} value={Val.pwd1} required />
													<label>비밀번호를 입력하세요.</label>
												</div>
												{Err.pwd1 && <p>{Err.pwd1}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd2'>Re Password</label>
											</th>
											<td>
												<div className='input_Area'>
													<input type='password' name='pwd2' id='pwd2' onChange={handleChange} value={Val.pwd2} required />
													<label>비밀번호를 재 입력하세요.</label>
												</div>
												{Err.pwd2 && <p>{Err.pwd2}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='email'>E-mail</label>
											</th>
											<td>
												<div className='input_Area'>
													<input type='text' name='email' id='email' onChange={handleChange} value={Val.email} required />
													<label>이메일 주소를 입력하세요.</label>
												</div>
												{Err.email && <p>{Err.email}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row' className='padding_top20'>
												<label>Gender</label>
											</th>
											<td className='padding_top20' ref={radioGroup}>
												<input type='radio' name='gender' value='male' id='male' onChange={handleChange} />
												<label htmlFor='male' className='radio_label'>
													Male
												</label>

												<input type='radio' name='gender' value='female' id='female' onChange={handleChange} />
												<label htmlFor='female' className='radio_label'>
													Female
												</label>
												{Err.gender && <p>{Err.gender}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row' className='padding_top20'>
												<label>Interests</label>
											</th>
											<td className='padding_top20' ref={checkGroup}>
												<input type='checkbox' name='interests' id='sports' value='sports' onChange={handleCheck} />
												<label htmlFor='sports' className='checkbox_label'>
													Sports
												</label>

												<input type='checkbox' name='interests' value='music' id='music' onChange={handleCheck} />
												<label htmlFor='music' className='checkbox_label'>
													Music
												</label>

												<input type='checkbox' name='interests' id='game' value='game' onChange={handleCheck} />
												<label htmlFor='game' className='checkbox_label'>
													Game
												</label>

												<input type='checkbox' name='interests' id='reading' value='reading' onChange={handleCheck} />
												<label htmlFor='reading' className='checkbox_label'>
													Reading
												</label>
												{Err.interests && <p>{Err.interests}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='edu'>Education</label>
											</th>
											<td>
												<select name='edu' id='edu' onChange={handleSelect} ref={selectEl}>
													<option value=''>최종학력을 선택해주세요</option>
													<option value='elementary school'>초등학교 졸업</option>
													<option value='middle school'>중학교 졸업</option>
													<option value='high school'>고등학교 졸업</option>
													<option value='college'>대학교 졸업</option>
												</select>
												{Err.edu && <p>{Err.edu}</p>}
											</td>
										</tr>
										<tr>
											<th scope='row' className='padding_top20'>
												<label htmlFor="'comments">Comments</label>
											</th>
											<td className='padding_top20'>
												<textarea name='comments' id='comments' cols='30' rows='3' value={Val.comments} onChange={handleChange} placeholder='남기는 말을 입력하세요.'></textarea>
												{Err.comments && <p>{Err.comments}</p>}
											</td>
										</tr>
										<tr>
											<th colSpan='2' className='padding_top20'>
												<button type='reset' onClick={() => setVal(initVal)}>
													CANCEL
												</button>
												<button type='submit'>SEND</button>
											</th>
										</tr>
									</tbody>
								</table>
							</fieldset>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Register;
