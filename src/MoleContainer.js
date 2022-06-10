// Container for moles
// Handles clicks 
// Either displays the Mole component or the EmptySlot component
import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
	let [displayMole, setDisplayMole] = useState(false)

	const whackMole = () => {
		props.setScore(props.score + 1)
		setDisplayMole(false)
	}

	return (
		<div className="moleContainer">
			{ displayMole ? <Mole /> : <EmptySlot /> }
		</div>
	)
}

export default MoleContainer;