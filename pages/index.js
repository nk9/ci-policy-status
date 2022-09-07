import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '../src/Link';
import Progress from '../components/Progress';

import policies from '../public/static/policies.json';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cycle Islington Policy Observatory
        </Typography>
        <Link href="https://cycleislington.uk/2021/five-asks-election-2022/" color="secondary">
          Our five asks
        </Link>
      </Box>
      <Box sx={{my: 4}}>
        <Progress steps={policies["people_friendly_streets"]} />
      </Box>
    </Container>
  );
}
