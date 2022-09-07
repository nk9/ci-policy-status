import React from "react";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Connector from './Connector';
import IconButton from '@mui/material/IconButton';

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';


export default function Progress({policies, policy_id}) {
	const [description, setDescription] = React.useState("")
	const steps = policies[policy_id]
	var items = []

	function showStepDetail(step) {
		setDescription(step.description)
	}

	for (const [i, step] of steps.entries()) {
		// Must be inside useEffect() to prevent infinite re-renders
		React.useEffect(() => {
			// Set the detail to show the last complete step
			if (step.complete) {
				showStepDetail(step);
			}
		}, [])

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
		<Stack spacing={2}>
			<Stack spacing={0} direction="row" alignItems="center">
				{items}
	        </Stack>
	        <Box sx={{
	        	padding: "1rem",
	        	backgroundColor: '#eee'
	        }}>
	        	<div>{description}</div>
        	</Box>
        </Stack>
	)
}
