import * as React from 'react';
import styles from "/styles/Home.module.scss";
import Image from 'next/image';
import Link from '../src/Link';

import CIMap from '../components/CIMap';
import CIAsk from '../components/CIAsk';

import {
    Box,
    Container,
    Typography,
} from "@mui/material";


export default function Home() {
    return (
        <Container maxWidth="md" sx={{ px: 0 }} className='hagrid'>
            <Box sx={{ my: 4, px: 2 }}>
                <Typography variant="h3" gutterBottom>
                    Tracking Our Five Asks
                </Typography>
                <Image
                    src="/static/images/kids.jpg"
                    layout="intrinsic"
                    width="900"
                    height="600"
                    alt="A father rides a Christiania tricycle with a baby on board while three primary school–aged children cycle with him."
                />
                <Typography variant="body1">In the 2022 election, Cycle Islington chose five policy priorities, our <Link href="https://cycleislington.uk/2021/five-asks-election-2022/" color="secondary">Five Asks</Link>,
                    to help ensure that whichever party was elected would accelerate the borough's transition to a
                    low-carbon future. In their <Link href="https://www.islington-labour.org.uk/2022-manifesto/" color="secondary">election manifesto</Link>,
                    Islington Labour pledged to ensure that "local people can get on their bike and get cycling safely around Islington."
                </Typography>

                <Typography variant="body1" mt={2}>We are tracking the council's progress toward this commitment. Here is our citizen assessment
                    of their progress so far.</Typography>
            </Box>

            <Box sx={{ display: 'flex', mx: '10px' }}>
                <Typography sx={{ flex: 1 }}>&nbsp;</Typography>
                <Typography sx={{ width: '45px', flexShrink: 0, justifyContent: 'space-between', fontWeight: 'bold' }}>Then</Typography>
                <Typography sx={{ width: '45px', flexShrink: 0, justifyContent: 'space-between', fontWeight: 'bold' }}>Now</Typography>
                <Typography sx={{ width: '45px', flexShrink: 0, justifyContent: 'space-between', fontWeight: 'bold' }}>Aim</Typography>
            </Box>

            <div className={styles.section_header}>
                1. Sustainable Transport Modal Share
            </div>
            <CIAsk
                target_name="Target Date"
                targets={["2041", "2041", "2030"]}
                image={<Image src="/static/images/sustainable-modal-share.jpg"
                    layout="intrinsic"
                    width="900"
                    height="200"
                    alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />}
                body={<Typography variant="body1">We have asked the Council to bring forward the target date for reaching 90% sustainable
                    transport modal share as measured by TfL from 2041 to 2030. They pledged to “continue to work to
                    increase the sustainable modal share”.</Typography>}
            />
            <CIAsk
                target_name="Modal Share"
                targets={["85%", "85%", "90%"]}
                body={<>
                    <Typography variant="body1">Each year, TfL publishes figures about how people are getting around the capital. The most recent survey available is from 2021, and it showed that Islington has a <Link href="https://www.healthystreetsscorecard.london/results/results_outcome_indicators/#ResultsModeshare">sustainable modal share of 85%</Link>.</Typography>
                    <Typography variant="body1">Every borough needs to do their part to meet overall climate targets. Fortunately, here in Islington, there are still many opportunities to transition car journies to a sustainable mode.</Typography>
                </>}
            />
            <div className={styles.section_header}>
                2. People Friendly Streets
            </div>
            <CIAsk
                target_name="Borough Coverage"
                targets={["21%", "21%", "100%"]}
                image={
                    <Image src="/static/images/LTNs.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />
                }
                body={
                    <Typography variant="body1">We have asked the council to cover the borough with “no-through traffic areas” (Low-Traffic
                        Neighbourhoods) to cover the borough by 2024. They said they are “committed to … creating
                        liveable neighbourhoods across the borough including with people-friendly pavements and more
                        greening”. (Manifesto page 23)</Typography>
                }
            />
            <div className={styles.section_header}>
                3. Cycle Delivery Hubs
            </div>
            <CIAsk
                target_name="Hub Count"
                targets={["1", "1", "10"]}
                image={
                    <Image src="/static/images/pedal-me.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="An electric cargo bike with a trailer moving a large load." />
                }
                body={
                    <Typography variant="body1">Motor-powered logistics is causing pollution and danger to our borough, and the huge increase in online deliveries means that these vans make up a growing percentage of the traffic on our roads. We asked the Council to create at least ten hubs, possibly on Council property, where freight is delivered for final delivery to customers by non-polluting, sustainable means. We included a target date of May 2026.</Typography>
                }
            />
            <div className={styles.section_header}>
                4. Secure Cycle Parking
            </div>
            <CIAsk
                target_name="Cycle vs. Car: Which is Cheaper to Park?"
                targets={["Car", "Car", "Cycle"]}
                image={
                    <Image src="/static/images/bike-hangar.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="A bike hangar on the street with two people cycling past." />
                }
                body={
                    <>
                        <Typography variant="body1">Islington installed its first bike hangar in 2016, and has kept increasing that count over the years.The <Link href="https://www.islington.media/news/islington-council-unveils-400th-bike-hangar-as-vision-for-cleaner-greener-healthier-borough-continues">400th was installed in March 2022</Link>, and they planned to have over 500 by March 2023.
                        </Typography>
                        <Typography variant='body1'>Delivering bike hangars is only part of the equation, though. In order for everyone who needs one to be able to take advantage of secure, on-street bike storage, hangars need to be affordable and spaces have to be available with as little wait as possible.
                        </Typography>
                        <Typography variant='body1'>As of 2023, <Link href="https://www.islington.gov.uk/roads/cycling/cycleparking">the council charges an up-front fee of £107.25</Link> per year to rent a bike hangar space, plus a refundable key deposit of £27.75. It's only possible to buy a full year, and the fee isn't refundable if you move midway through the year. The cost is also per bike, which means that a family of 4 could find themselves paying over £500 to store their bikes.
                        </Typography>
                        <Typography variant='body1'>
                            Some electric car permits, by contrast, cost just <Link href="https://www.islington.gov.uk/parking/parking-permits/parking-permit-costs-table">£50 per year</Link> or £4.17 per month. Some petrol vehicles are even £100 per year, again with no premium on monthly permits.
                        </Typography>
                        <Typography variant='body1'>
                            We have asked Islington to deliver secure, affordable,
                            and flexible bike parking and ensure that it is never cheaper to park a car or van than to park a
                            cycle.They have pledged to <em>“Invest in secure cycle storage with enough space to meet demand and cut costs of bike storage for lower-income households”.</em> (Manifesto, page 13.)</Typography>
                    </>
                }
            />
            <div className={styles.section_header}>
                5. Cycle Tracks on Main Roads
            </div>
            <CIAsk
                target_name="Proportion with Cycle Tracks"
                targets={["9%", "9%", "100%"]}
                image={
                    <Image src="/static/images/cycle-tracks.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="An electric cargo bike with a trailer moving a large load." />
                }
                body={
                    <>
                        <Typography variant="body1">In 2020, Islington showed real initiative by quickly installing a cycle track on Liverpool Road using light segregation. This was the southern section of the <Link href="https://www.islington.media/news/new-finsbury-park-to-highbury-fields-cycleway-helps-create-greener-islington">Cycleway 38 scheme</Link>.</Typography>
                        <Typography variant="body1">We have asked the council to keep up a rapid pace of work to transform the way people are able to get around the borough by installing protected cycle tracks on all busy roads in the borough by 2026.</Typography>
                        <Typography variant="body1" mt={2}>We are following-up the building of these routes, according to the authority in charge (TfL, Islington, or surrounding boroughs).</Typography>
                    </>
                }
            />

            <Typography variant='h4' mt={5}>Current status</Typography>
            <Box mt={3} xs={12} mb={3}>
                <CIMap />
            </Box>
        </Container >
    );
}
