//이벤트를 바로 실행하지 않고 딜레이를 줘서 한번만 처리 가능하게 하는 로직
import { useRef, useState } from 'react';

export const useDebounce = (value) => {
	const [DebounceVal, setDebounceVal] = useState(value);
	const eventBlocker = useRef(null);

	clearTimeout(eventBlocker.current);

	eventBlocker.current = setTimeout(() => {
		setDebounceVal(value);
	}, 500);

	return DebounceVal;
};
