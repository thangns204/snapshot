import React from 'react';
import HomePage from "./component/HomePage";
import Image from "./component/Image";
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';


function App() {
	return (
		<Router>
			<div className="App">
				<HomePage/>
				<Switch>
					<Route path='/category/:id' component={Image }/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
