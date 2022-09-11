import * as React from 'react';

import Image from 'next/image';

import Link from '../src/Link';
import Progress from '../components/Progress';

import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  Divider
} from "@mui/material";

import policies from '../public/static/policies.json';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Cycle Islington Policy Observatory
        </Typography>
        <Typography variant="body1">In the 2022 election, Cycle Islington chose five policy priorities, our <Link href="https://cycleislington.uk/2021/five-asks-election-2022/" color="secondary">Five Asks</Link>,
        to help ensure that whichever party was elected would accelerate the borough's transition to a
        low-carbon future. Islington Labour pledged to make Islington a cyling-friendly borough in their
        election manifesto. [Link? and we should use whatever wording they did.]</Typography>

        <Typography variant="body1" mt={2}>We are tracking the council's progress toward this commitment. Here is our citizen assessment
        of their progress so far.</Typography>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Image src="/static/images/sustainable-modal-share.jpg" layout="intrinsic" width="900" height="200" alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />
        <Typography variant="h4" gutterBottom>
          Sustainable Transport Modal Share
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              Target Date
            </Typography>
            <Progress policies={policies} policy_id="modal_share_date" />
            <Divider sx={{my: 2}} />
            <Typography variant="h5">
              Modal Share
            </Typography>
            <Progress policies={policies} policy_id="modal_share_stats" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">We have asked the elected council to bring forward the target date for reaching 90% sustainable
            transport modal share as measured by TfL from 2041 to 2030. They pledged to “continue to work to
            increase the sustainable modal share”.</Typography>

            <Typography variant="body1" mt={2}>We assess their commitment according to two indicators.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Image src="/static/images/LTNs.jpg" layout="intrinsic" width="900" height="200" alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />
        <Typography variant="h4" gutterBottom>
          People Friendly Streets
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="ltns" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">We have asked the council to cover the borough with “no-through traffic area” (Low-Traffic
            Neighbourhoods) to cover the borough by 2024. They said they are “committed to … creating
            liveable neighbourhoods across the borough including with people friendly pavements and more
            greening”. [Link needed]</Typography>

            <Typography variant="body1" mt={2}>We assess their commitment according to the actual surface of the borough covered by LTNs.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Image src="/static/images/pedal-me.jpg" layout="intrinsic" width="900" height="200" alt="An electric cargo bike with a trailer moving a large load." />
        <Typography variant="h4" gutterBottom>
          Cycle Logistics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="logistics" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">Motor-powered logistics is causing pollution and danger to our borough. We asked the council
            the creation of at least ten hubs, possibly on Council property, where all freight is delivered
            for final delivery by non-polluting, sustainable means – with a target date: May 2026. They pledged
            to “work to make deliveries more sustainable including by providing last mile delivery hubs“.</Typography>

            <Typography variant="body1" mt={2}>We assess their commitment by the number of hubs provided.</Typography>
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
            <Typography variant="body1">Many London boroughs have better policies than Islington on secure, on-street cycle parking. The
            key problems are price and availability. We have asked the Council to deliver secure, affordable,
            and flexible bike parking and ensure that it is never cheaper to park a car or van than to park a
            cycle. They have pledged to <em>“work to make cycle parking more affordable”.</em> [LINK NEEDED]</Typography>

            <Typography variant="body1" mt={2}>We assess their commitment according to the cost for users and the availability.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{my: 4}}>
        <Typography variant="h4" gutterBottom>
          Cycle Tracks on Main Roads
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Progress policies={policies} policy_id="logistics" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">We have asked the council to install protected cycle routes on all busy roads in the borough by 2026.
            They pledged to “build on the LTNs and 3 segregated cycle routes installed in the past two years.”</Typography>

            <Typography variant="body1" mt={2}>We are following-up the building of these routes, according to the authority in charge (TfL or the borough).</Typography>

            <Typography variant="body1" mt={2}><strong>TODO map</strong></Typography>
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
}
