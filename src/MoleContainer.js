// Container for moles
// Handles clicks 
// Either displays the Mole component or the EmptySlot component
import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
	let [displayMole, setDisplayMole] = useState(false)

	const whackMole = (e) => {
		console.log(e)
		e.preventDefault()

		props.setScore(props.score + 1)
		setDisplayMole(false)
	}

	return (
		<div className="moleContainer">
			{ displayMole 
				? <Mole setDisplayMole={setDisplayMole} handleClick={whackMole} /> 
				: <EmptySlot setDisplayMole={setDisplayMole} /> 
			}
		</div>
	)
}

export default MoleContainer;