import React from 'react';

import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
	return (
		<header className="app-header">
			<form action="POST">
				<input
					type="text"
					className="task-input"
					placeholder="Enter your jig-eob"
				/>

				<div className="task-bottom">
					<div>
						<Tag tagName="Work" />
						<Tag tagName="Study" />
						<Tag tagName="Casual" />
						<Tag tagName="Exercise" />
						<Tag tagName="Holiday" />
					</div>
					<div>
						<select className="task-status">
							<option value="todo">Todo</option>
							<option value="doing">Doing</option>
							<option value="done">Done</option>
						</select>
						<button type="submit" className="task-submit">
							+ Add Task
						</button>
					</div>
				</div>
			</form>
		</header>
	);
};

export default TaskForm;
