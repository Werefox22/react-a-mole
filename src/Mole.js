// Mole display
// Keeps timer for how long the mole is present
import React, { useEffect } from "react";

function Mole(props) {
	useEffect(() => {
		// generate a random number between 5 and 10 seconds
		let timeUntilGone = (Math.random() * 5000) + 5000
		let timer = setTimeout(() => {
			props.setDisplayMole(false)
		}, timeUntilGone)

		return () => {clearTimeout(timer)}
	})

	return (
		<div className="mole">
			<h3>Mole</h3>
		</div>
	)
}

export default Mole;