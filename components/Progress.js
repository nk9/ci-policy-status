import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Connector from './Connector';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function Progress({steps}) {
	var items = []

	for (const [i, step] of steps.entries()) {
		if (i != 0) {
			items.push(<Connector complete={step.complete} />)
		}

		if (step.complete) {
			items.push(<CheckCircleIcon />)
		} else {
			items.push(<CircleOutlinedIcon />)
		}
	}

	return (
		<Stack spacing={0} direction="row" alignItems="center">
			{items}
{/*          <CheckCircleIcon />
          <Connector complete={true} />
          <CircleOutlinedIcon />
          <Connector />
          <CircleOutlinedIcon />
*/}        </Stack>
	)
}
