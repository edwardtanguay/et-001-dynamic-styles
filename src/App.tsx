import { useState } from 'react';
import './App.scss';

const _state = {
	isOnline: false,
	userName: 'Harald Lingren',
	daysTillReportIsDue: 1,
};

function App() {
	const [state, setState] = useState(_state);

	const handleToggleLogin = () => {
		setState({
			...state,
			isOnline: !state.isOnline,
		});
	};

	const handleChangeDaysDue = () => {
		setState({
			...state,
			daysTillReportIsDue: state.daysTillReportIsDue + 1,
		});
	};

	const getMessageStyle = () => {
		return {
			fontSize: `${1 + state.daysTillReportIsDue / 10}rem`,
			color: state.daysTillReportIsDue < 5 ? 'orange' : 'red',
			backgroundColor: state.daysTillReportIsDue < 8 ? '' : 'tomato', 
		};
	};

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>
				<span
					className={`userName ${state.isOnline ? 'loggedIn' : 'loggedOut'}`}
				>
					{state.userName}
				</span>
			</p>
			<p className="message" style={getMessageStyle()}>
				Report is due in {state.daysTillReportIsDue} days.
			</p>
			<hr />
			<section className="emulation">
				<h2>Emulate State Change</h2>
				<button onClick={() => handleToggleLogin()}>
					toggle logged in
				</button>
				<button onClick={() => handleChangeDaysDue()}>
					change days due
				</button>
			</section>
		</div>
	);
}

export default App;
