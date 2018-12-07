import React from 'react';

const SnackInfo = (props) => {
	let snacks = props.snacks.map(snack => {
	return (
		<div>
			<section>
				<small>{snack.description}</small>
				<p>{snack.price}</p>
				<small>{snack.img}</small>
			</section>
		</div>
		)
	})
	return (
    <div>
		{snacks}
    </div>
    )
}

export default SnackInfo;
