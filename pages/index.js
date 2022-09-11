import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '../src/Link';
import Progress from '../components/Progress';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


import policies from '../public/static/policies.json';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Cycle Islington Policy Observatory
        </Typography>
        <p>In the 2022 election, Cycle Islington chose five policy priorities, our <Link href="https://cycleislington.uk/2021/five-asks-election-2022/" color="secondary">Five Asks</Link>,
        to help ensure that whichever party was elected would accelerate the borough's transition to a
        low-carbon future. Islington Labour pledged to make Islington a cyling-friendly borough in their
        election manifesto. [Link? and we should use whatever wording they did.]</p>

        <p>We are tracking the council's progress toward this commitment. Here is our citizen assessment
        of their progress so far.</p>
      </Box>
      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          People Friendly Streets
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="ltns" />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>We have asked the council to cover the borough with “no-through traffic area” (Low-Traffic
            Neighbourhoods) to cover the borough by 2024. They said they are “committed to … creating
            liveable neighbourhoods across the borough including with people friendly pavements and more
            greening”. [Link needed]</p>

            <p>We assess their commitment according to the actual surface of the borough covered by LTNs.</p>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Cycle Logistics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="logistics" />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Motor-powered logistics is causing pollution and danger to our borough. We asked the council
            the creation of at least ten hubs, possibly on Council property, where all freight is delivered
            for final delivery by non-polluting, sustainable means – with a target date: May 2026. They pledged
            to “work to make deliveries more sustainable including by providing last mile delivery hubs“.</p>

            <p>We assess their commitment by the number of hubs provided.</p>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Secure Cycle Parking
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              Cost
            </Typography>
            <Progress policies={policies} policy_id="parking_cost" />
            <Divider sx={{my: 2}} />
            <Typography variant="h5">
              Availability
            </Typography>
            <Progress policies={policies} policy_id="parking_availability" />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>Islington’s policy on cycle parking is one of the worst accross London in terms of price and
            availability. We have asked the Council to deliver secure, affordable, and flexible bike parking
            and ensure that it is never cheaper to park a car or van than to park a cycle. They have pledged
            to <em>“work to make cycle parking more affordable”.</em></p>

            <p>We assess their commitment according to the cost for users and the availability.</p>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Cycle Logistics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="logistics" />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>We have asked the council to cover the borough with “no-through traffic area” (Low-Traffic
            Neighbourhoods) to cover the borough by 2024. They said they are “committed to … creating
            liveable neighbourhoods across the borough including with people friendly pavements and more greening”.</p>

            <p>We assess their commitment according to the actual surface of the borough covered by LTNs.</p>
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
}
