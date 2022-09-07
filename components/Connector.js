import Box from '@mui/material/Box';

export default function Connector({complete}) {
	var color = complete ? "green" : "lightgray"

	return <Box
			sx={{
				width: 50,
				height: 7,
				backgroundColor: color
			}}
		/>
}