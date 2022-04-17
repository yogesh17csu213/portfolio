import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";
import Feedbacks from "./containers/Feedbacks";
import Resume from './components/Resume'
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => (
						<>
							<Navigation />
							<Greetings />
							<Skills />
							<Proficiency />
							<Education />
							<Experience />
							{/* <Feedbacks /> */}
							<Projects />
							<GithubProfile />
						</>
					)}
				/>
				<Route
					path="/resume"
					exact
					render={(props) => (
						<>
						<Resume />
						</>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
