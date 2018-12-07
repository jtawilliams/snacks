import React from 'react';

const AddSnackForm = (props) => {
    return (
    <div>
	<form className="snack-form">
            <label forhtml="title">Title</label>
            <input onChange={props.titleInput} type="text" name="title" />
            <label forhtml="text">Review</label>
            <input onChange={props.textInput} type="text" name="pay" />
            <label forhtml="rating">Rating</label>
            <textarea onChange={props.ratingInput} name="rating" rows="8" cols="40"></textarea>
            <input onClick={props.addToList} type="submit" name="submit" value="Submit" />
        </form>
    </div>
    )
}

export default AddSnackForm;
