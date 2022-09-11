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
	const [date, setDate] = React.useState("")

	const steps = policies[policy_id]
	var items = []

	function handleStep(step_index) {
		const step = steps[step_index];

		setActiveStep(step_index);
		setDescription(step.description)

		if (step.complete && step.completed_date) {
			var mydate = new Date(step.completed_date);
			let date_str = mydate.toLocaleDateString('en-gb', {  month:"short", year:"numeric"}) 
			setDate(<em>{date_str}</em>)
		} else {
			setDate(<em>TBD</em>)
		}
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
	        	backgroundColor: '#ddd'
	        }}>
	        	<div>{description}</div>
	        	<div><strong>Date:</strong> {date}</div>
        	</Box>
        </Stack>
	)
}
