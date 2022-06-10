// Molehill display
// Keeps timer for how long until a mole appears
import React, { useEffect } from "react";

function EmptySlot(props) {
	useEffect(() => {
		// generate a random number between 5 and 20 seconds
		let timeUntilMole = (Math.random() * 15000) + 5000
		let timer = setTimeout(() => {
			props.setDisplayMole(true)
		}, timeUntilMole)

		return () => {clearTimeout(timer)}
	})

	return (
		<div className="emptySlot">
			<h3>EmptySlot</h3>
		</div>
	)
}

export default EmptySlot;