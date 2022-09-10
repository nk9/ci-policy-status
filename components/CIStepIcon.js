import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { ProgressContext } from "./Progress";

import FlagIcon from '@mui/icons-material/Flag';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import CircleIcon from '@mui/icons-material/Circle';

const CIStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  
  '& .CIStepIcon-startIcon': {
  	fontSize: 24,
    ...(ownerState.completed && {
      color: ownerState.color,
    }),
  },
  '& .CIStepIcon-completedIcon': {
    zIndex: 1,
    fontSize: 24,
    ...(ownerState.completed && {
      color: ownerState.color,
    }),
  },
  '& .CIStepIcon-circle': {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    ...(ownerState.completed && {
      backgroundColor: ownerState.color,
    }),
  },
}));

function CIStepIcon(props) {
  const { active, completed, icon: step_num, className } = props;
	const steps = useContext(ProgressContext);
  const step_index = step_num - 1;
	var icon, color;

	// Choose color
	var colors = ["black", "red", "orange", "green"]

	if (steps.length == 2) {
		colors = ["black", "green"];
	}

	color = colors[step_index]

	// Choose icon
	if (step_index == 0) {
		icon = <FlagCircleIcon className="CIStepIcon-startIcon" />;
	} else if (completed) {
		icon = <CheckCircleIcon className="CIStepIcon-completedIcon" />
	} else {
		icon = <CircleIcon className="CIStepIcon-circle" />
	}

  return (
    <CIStepIconRoot ownerState={{ completed, active, color }} className={className}>
      {icon}
    </CIStepIconRoot>
  );
}

export default CIStepIcon;