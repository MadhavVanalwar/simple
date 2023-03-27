import React from "react"
import { Link } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
const Payment = () => {
	const onToken = (tokan) => {
		console.log(tokan)
	}

	return (
		<>
			<Link className="homee" to={"/"}>
				Home
			</Link>

			<div className="payd">
				<h4>Pyment Mode Only Credit or Debit Card</h4>
				<br />
				<br />
				<StripeCheckout
					token={onToken}
					name="Movie Booking"
					currency="INR"
					stripeKey="pk_test_51MlXOgSIxMHXg9HHwlwLjpnGUm6DH6tABPhsKJtTG1xdDLF0CEGCUjKB7sdmJNKUTiJfKLS37rPXoRNbYf4H4Lwq00e0XIxXbv"
				/>
			</div>
		</>
	)
}

export default Payment
