import React from "react";

import CIConnector from './CIConnector';
import CIStepIcon from './CIStepIcon';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from '@mui/material/Radio';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';


export default function Progress({policies, policy_id}) {
	const [activeStep, setActiveStep] = React.useState(0)
	const [description, setDescription] = React.useState("")

	const steps = policies[policy_id]
	var items = []

	function handleStep(step_index) {
		setActiveStep(step_index);
		setDescription(steps[step_index].description)
	}

	for (const [i, step] of steps.entries()) {
		// Must be inside useEffect() to prevent infinite re-renders
		React.useEffect(() => {
			// Set the detail to show the last complete step
			if (step.complete) {
				handleStep(i)
			}
		}, [])

		items.push(
			<Step key={i} completed={step.complete}>
				<StepButton color="inherit" onClick={() => handleStep(i)}>
					<StepLabel StepIconComponent={CIStepIcon}></StepLabel>
				</StepButton>
			</Step>
		)
	}

	return (
		<Stack spacing={2}>
			<Stepper nonLinear activeStep={activeStep} connector={<CIConnector />}>
				{items}
			</Stepper>
	        <Box sx={{
	        	padding: "1rem",
	        	backgroundColor: '#eee'
	        }}>
	        	<div>{description}</div>
        	</Box>
        </Stack>
	)
}
