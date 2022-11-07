import { useState } from 'react';
import './App.scss';

const _state = {
	isOnline: false,
	userName: 'Harald Lingren',
	daysTillReportIsDue: 4
};

function App() {
	const [state, setState] = useState(_state);

	const handleToggleLogin = () => {
		setState({
			...state,
			isOnline: !state.isOnline
		});
	};

	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>
				<span
					className="userName"
					style={{
						backgroundColor: state.isOnline ? 'green' : '#444',
					}}
				>
					{state.userName}
				</span>
			</p>
			<hr />
			<section className="emulation">
				<h2>Emulate State Change</h2>
				<button onClick={() => handleToggleLogin()}>toggle logged in</button>
			</section>
		</div>
	);
}

export default App;
