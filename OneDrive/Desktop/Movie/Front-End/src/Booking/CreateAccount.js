import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const CreateAccount = () => {
	const [name, setName] = useState("")
	const [capcha, setCapcha] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [status, setStatus] = useState(false)

	const navigate = useNavigate()

	let a = name.slice(1, 3)
	let b = name.slice(6, 8)

	const collectData = async () => {
		if (name === "" || email === "" || password === "" || capcha === "") {
			alert("Please Fill Input box")
		} else {
			console.warn(name, email, password)
			let result = await fetch("http://localhost:4000/register", {
				method: "POST",
				body: JSON.stringify({ name, email, password }),
				headers: {
					"Content-Type": "application/json",
				},
			})
			result = await result.json()
			console.log(result)
			localStorage.setItem("user", JSON.stringify(result))
			navigate("/")
		}
	}

	return (
		<>
			<Link className="homee" to={"/"}>
				Login
			</Link>

			<form className="create_account_page">
				<h1>!! Create Account !!</h1>
				<br />
				<br />
				<input
					type="text"
					value={name}
					className="create_account_page_input"
					placeholder="Enter Name"
					onChange={(e) => setName(e.target.value)}
				/>
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
					onBlur={() => setStatus(true)}
				/>
				<br />
				<br />
				{status ? (
					<input
						type="text"
						value={`${a}c${b}`}
						className="create_account_page_input"
						disabled
					/>
				) : null}
				<br />
				<br />
				<input
					onChange={(e) => setCapcha(e.target.value)}
					value={capcha}
					type="text"
					className="create_account_page_input"
					placeholder="Enter Above Code"
				/>
				<br />
				<br />
				<button
					onClick={collectData}
					type="button"
					className="create_account_page_button">
					Sign Up
				</button>
			</form>
		</>
	)
}

export default CreateAccount
