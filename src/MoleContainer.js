// Container for moles
// Handles clicks 
// Either displays the Mole component or the EmptySlot component
import React from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
	return (
		<div className="moleContainer">
			<h2>Mole container</h2>
			<Mole />
			<EmptySlot />
		</div>
	)
}

export default MoleContainer