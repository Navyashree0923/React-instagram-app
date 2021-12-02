import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const App = () => {

return (
	<div style={{
	margin: 'auto',
	display: 'block',
	width: 'fit-content'
	}}>
	<h3>Navyashree liked your post</h3>
    <FormControlLabel
		control={<Checkbox icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
		name="checkedH" />}
		label="1 Like"
	/>
    <h3>Iram liked your post</h3>
    <FormControlLabel
		control={<Checkbox icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
		name="checkedH" />}
		label="1 Like"
	/>
    <h3>Rashmi liked your post</h3>
    <FormControlLabel
		control={<Checkbox icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
		name="checkedH" />}
		label="1 Like"
	/>
    <h3>Anu liked your post</h3>
	<FormControlLabel
		control={<Checkbox icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
		name="checkedH" />}
		label="1 Like"
	/>
	</div>
);
}

export default App;
