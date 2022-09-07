import React from "react";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Connector from './Connector';
import IconButton from '@mui/material/IconButton';
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from '@mui/material/Radio';

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import CircleIcon from '@mui/icons-material/Circle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';


export default function Progress({policies, policy_id}) {
	const [description, setDescription] = React.useState("")
	const [value, setValue] = React.useState('');

	const steps = policies[policy_id]
	var items = []

	function showStepDetail(event) {
		const i = parseInt(event.target.value)
		setDescription(steps[i].description)
	}

	for (const [i, step] of steps.entries()) {
		// Must be inside useEffect() to prevent infinite re-renders
		React.useEffect(() => {
			// Set the detail to show the last complete step
			if (step.complete) {
				setDescription(step.description)
			}
		}, [])

		if (i != 0) {
			items.push(<Connector step={step} />)
		}

		if (i == 0) {
			items.push(
				<Radio
					sx={{color: "black"}}
					size="large"
					value={i}
					icon={<FlagCircleIcon />}
					checkedIcon={<FlagCircleOutlinedIcon />} />
				)
		} else if (step.complete) {
			items.push(
				<Radio
					sx={{color: "black"}}
					size="large"
					value={i}
					icon={<CheckCircleIcon />}
					checkedIcon={<CheckCircleOutlinedIcon />} />
				)
		} else {
			items.push(
				<Radio
					sx={{color: "black"}}
					size="large"
					value={i}
					icon={<CircleIcon fontSize="large" />}
					checkedIcon={<TripOriginIcon fontSize="large" />} />
				)
		}
	}

	return (
		<Stack spacing={2}>
			<RadioGroup
				name={policy_id}
				value={value}
				onChange={showStepDetail}>
				<Stack spacing={0} direction="row" alignItems="center">
					{items}
		        </Stack>
	        </RadioGroup>
	        <Box sx={{
	        	padding: "1rem",
	        	backgroundColor: '#eee'
	        }}>
	        	<div>{description}</div>
        	</Box>
        </Stack>
	)
}
