import React from "react";

import CIConnector from './CIConnector';
import CIStepIcon from './CIStepIcon';

import {
	Box,
	Stack,
	Step,
	Stepper,
	StepButton,
	StepLabel
} from "@mui/material";

export const ProgressContext = React.createContext();


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

	let stepper_width = (steps.length > 2) ? "100%" : "41%"; // Determined by eye

	return (
		<Stack spacing={2}>
			<ProgressContext.Provider value={{steps}}>
	            <Box sx={{maxWidth: stepper_width}}>
					<Stepper nonLinear activeStep={activeStep}>
						{items}
					</Stepper>
				</Box>
	        </ProgressContext.Provider>
	        <Box sx={{
	        	padding: "1rem",
	        	backgroundColor: '#eee'
	        }}>
	        	<div>{description}</div>
        	</Box>
        </Stack>
	)
}
