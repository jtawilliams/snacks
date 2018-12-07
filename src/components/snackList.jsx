import React from 'react';

const SnackList = (props) => {
	let snacks = props.snacks.map(snack => {
    return (
    <div>
		<section>
			<h4>{snack.name}</h4>
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

export default SnackList;
