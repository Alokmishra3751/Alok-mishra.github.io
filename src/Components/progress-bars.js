import * as React from 'react';
import  './portfolio.css';
import SkillBar from 'react-skillbars';

function Progress(){
	const skills = [
  { type: 'HTML5', level: 90 },
  { type: 'CSS3', level: 85 },
  { type: 'Javascript', level: 65 },
  { type: 'Bootstrap', level: 80 },
  { type: 'Tailwind', level: 85 },
  { type: 'React', level: 55 },
  { type: 'Node', level: 45 },
  { type: 'Wordpress', level: 80 },
  { type: 'Shopify', level: 80 },

];
	const colors= {
		bar: '#018eea',
		title: {
		text: '#fff',
		background: '#fff'
	},

	
		
	};
	
	return(
		<div className="progressBar">
			<SkillBar skills={skills} colors={colors}/>
		</div>
		
	)

}

export default Progress;