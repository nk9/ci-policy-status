import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Connector from './Connector';
import IconButton from '@mui/material/IconButton';

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';


export default function Progress({steps}) {
	var items = []

	for (const [i, step] of steps.entries()) {
		if (i != 0) {
			items.push(<Connector step={step} />)
		}

		if (i == 0) {
			items.push(
				<IconButton color="black" onClick={() => {showStepDetail(step)}}>
					<FlagCircleIcon fontSize="large" />
				</IconButton>)
		} else if (step.complete) {
			items.push(
				<IconButton color="black" onClick={() => {showStepDetail(step)}}>
					<CheckCircleIcon fontSize="large" />
				</IconButton>)
		} else {
			items.push(
				<IconButton color="black" onClick={() => {showStepDetail(step)}}>
					<TripOriginIcon fontSize="large" />
				</IconButton>)
		}
	}

	return (
		<Stack spacing={0} direction="row" alignItems="center">
			{items}
        </Stack>
	)
}

function showStepDetail(step) {
	alert(step.name)
}