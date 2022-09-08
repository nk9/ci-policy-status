import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';

import FlagIcon from '@mui/icons-material/Flag';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import CircleIcon from '@mui/icons-material/Circle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

const CIStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .CIStepIcon-completedIcon': {
    zIndex: 1,
    fontSize: 18,
  },
  '& .CIStepIcon-circle': {
    width: 18,
    height: 18,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function CIStepIcon(props) {
	const { active, completed, icon: step_num, className } = props;
	var icon;
	// console.log(step_num)

	// const icons = {
	// 	1: <FlagIcon />,
	// 	2: <Check />,
	// 	3: <CircleIcon />,
	// };

	if (step_num == 1) {
		icon = <FlagIcon />;
	} else if (completed) {
		icon = <Check className="CIStepIcon-completedIcon" />
	} else {
		icon = <div className="CIStepIcon-circle" />
	}

  return (
    <CIStepIconRoot ownerState={{ completed, active }} className={className}>
      {icon}
    </CIStepIconRoot>
  );
}

export default CIStepIcon;