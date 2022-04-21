import * as React from 'react';
import ReactDOM from 'react-dom';
import Style from './portfolio.css';
import VisibilitySensor from 'react-visibility-sensor';


	const Progress = ({done}) => {

		const [style, setStyle] = React.useState({});
		
		setTimeout(() => {
			const newStyle = {
				opacity: 1,
				width: `${done}%`
			}
			
			setStyle(newStyle);
		}, 200);
		
		return (
			<div className="skill-bar">
				<div className="progress">
			<div className="progress-done" style={style}>
					
			</div>
			</div>
			
			</div>
		)
	}
export default Progress;