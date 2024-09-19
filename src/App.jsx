import React from 'react';

import './App.css';
import TaskForm from './components/TaskForm';

export const App = () => {
	return (
		<div className="app">
			{/* Navbar Section */}
			<nav className="app-navbar">Navbar</nav>

			{/* Header Section */}
			<TaskForm></TaskForm>

			{/* Main Section */}
			<main className="app-main">
				<section className="task">Section 1</section>
				<section className="task">Section 2</section>
				<section className="task">Section 3</section>
			</main>
		</div>
	);
};

export default App;
