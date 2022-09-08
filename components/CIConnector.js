import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const CIConnectorRoot = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#ccc',
    borderTopWidth: 7,
    borderRadius: 1
  },
}));

function CIConnector(props) {
	console.log(props);
	const { active, completed, icon: step_num, className } = props;

  return (
    <CIConnectorRoot />
  );
}

export default CIConnector;