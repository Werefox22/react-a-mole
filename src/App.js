import { useState } from 'react';
import './App.css';
import MoleContainer from './MoleContainer';

function App() {
	let [score, setScore] = useState(0)

	// Function to generate mole containers
	const createMoleHill = () => {
		let hills = [];

		for (let i = 0; i < 9; i++) {
			hills.push(
				<MoleContainer 
					key={i}
					score={score}
					setScore={setScore}
				/>
			);
		}

		return (
			<div>
				{hills}
			</div>
		)
	}

	return (
		<div className="App">
			<h1>React-a-Mole</h1>
			{createMoleHill()}
		</div>
	);
}

export default App;
