import React from 'react';
import SnackCard from './snackCard'

const SnackList = (props) => {
	let snacks = props.snacks.map(snack => {
    return (
    <div>
		<section>
			<button onClick={props.SnackInfo}>{snack.name}</button>

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
