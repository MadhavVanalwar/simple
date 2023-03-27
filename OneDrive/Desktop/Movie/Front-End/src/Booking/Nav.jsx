import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
function Nav() {
	const auth = localStorage.getItem("user")

	return (
		<nav className="nav">
			<a className="Netflix_hide" href="https://www.netflix.com/">
				N
			</a>
			<a className="Netflix" href="https://www.netflix.com/">
				NewShow
			</a>
			<Link className="button2" to={"/"}>
				SIGN OUT
			</Link>
			<span className="auth"> 🦸‍♂️ {JSON.parse(auth).name}</span>
			<button className="button3">
				<a href="https://www.netflix.com/login?nextpage=%2Fbrowse%2Fgenre%2F1191605%3Flocale%3Den-IN">
					JOIN NOW
				</a>
			</button>
			<p>WATCH UNLIMITED SHOWS & MOVIES</p>
		</nav>
	)
}
export default Nav
