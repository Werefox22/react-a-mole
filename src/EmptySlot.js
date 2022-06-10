// Molehill display
// Keeps timer for how long until a mole appears
import React, { useEffect } from "react";
import hillImage from './molehill.png'

function EmptySlot(props) {
	useEffect(() => {
		// generate a random number between 5 and 20 seconds
		let timeUntilMole = (Math.random() * 15000) + 5000;

		let timer = setTimeout(() => {
			props.setDisplayMole(true)
		}, timeUntilMole)

		return () => { clearTimeout(timer) }
	})

	return (
		<div className="emptySlot">
			<img
				src={hillImage}
				draggable="false"
			/>
		</div>
	)
}

export default EmptySlot;