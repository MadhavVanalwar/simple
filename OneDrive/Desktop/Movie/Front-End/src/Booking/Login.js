import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const CreateAccount = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const collectData = async () => {
		console.log(email, password)
		let result = await fetch("http://localhost:4000/login", {
			method: "post",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		})
		result = await result.json()
		console.log(result)
		if (result.name) {
			localStorage.setItem("user", JSON.stringify(result))
			navigate("../home")
		} else {
			alert("User Not Found")
		}
	}

	return (
		<>
			<Link className="homee" to={"/"}>
				Login
			</Link>

			<form className="create_account_page">
				<h1>!! Login !!</h1>

				<br />
				<br />
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					className="create_account_page_input"
					placeholder="Enter Email Id"
				/>
				<br />
				<br />
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					className="create_account_page_input"
					placeholder="Enter Password"
				/>
				<br />
				<br />
				<button
					onClick={collectData}
					type="button"
					className="create_account_page_button">
					Sign Up
				</button>
				<p>If You Don't Have Account</p>
				<Link to={"../createaccount"}>
					<p className="create_account_link">Create Account</p>
				</Link>
			</form>
		</>
	)
}

export default CreateAccount
