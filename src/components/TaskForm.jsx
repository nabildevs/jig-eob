import React from 'react';

const TaskForm = () => {
	return (
		<header className="app-header">
			<form action="POST">
				<input
					type="text"
					className="task_input"
					placeholder="Enter your jig-eob"
				/>

				<div className="task_bottom">
					<button className="tag">Work</button>
					<button className="tag">Study</button>
					<button className="tag">Casual</button>
					<button className="tag">Exercise</button>

					<select className="task_status">
						<option value="todo">Todo</option>
						<option value="doing">Doing</option>
						<option value="done">Done</option>
					</select>

					<button type="submit" className="task_submit">
						+ Add Task
					</button>
				</div>
			</form>
		</header>
	);
};

export default TaskForm;
