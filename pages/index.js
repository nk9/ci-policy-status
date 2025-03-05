import Image from 'next/image';
import Link from '../src/Link';
import styles from "/styles/Home.module.scss";

import CIAsk from '../components/CIAsk';
import CIMap from '../components/CIMap';
import logo from "/public/static/images/circle.svg";

import {
    Box,
    Container, Toolbar, Typography
} from "@mui/material";

export default function Home() {
    const header = (title) => {
        return (
            <Box className={styles.section_header} sx={{ position: "relative" }}>
                {title}
                <Box sx={{ display: 'flex', position: 'absolute', right: '0', bottom: '0', pr: 1.5 }}>
                    <Typography className={styles.stats_header}>2022</Typography>
                    <Typography className={styles.stats_header}>Now</Typography>
                    <Typography className={styles.stats_header}>Ask</Typography>
                </Box >
            </Box>
        )
    }

    return (
        <>
            <Toolbar className={styles.toolbar}>
                <div className={styles.masthead_container} >
                    <Link href="https://cycleislington.uk" className={styles.icon} >
                        <Image src={logo} width="48" height="48" />
                    </Link>
                    <Link href="https://cycleislington.uk">
                        Cycle Islington
                    </Link>
                </div>
            </Toolbar>

            <Container maxWidth="md" sx={{ px: 0 }}>
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

                    <Typography variant="body1" mt={2}>We are tracking the Council's progress toward this commitment. Here is our assessment of their progress so far.</Typography>
                </Box>

                {header("1. Sustainable Transport Modal Share")}

                <CIAsk
                    target_name="Modal Share"
                    targets={["85%", "85%", "90%"]}
                    body={<>
                        <Image
                            src="/static/images/modal-share.jpg"
                            layout="intrinsic"
                            width="900"
                            height="200"
                            alt="Two people on a bicycle in front of a red bus."
                        />

                        <Typography variant="body1">TfL publishes yearly figures about how people are getting around the capital. This lets us determine how many journeys are made with sustainable modes (Tube, bus, walking, cycling, etc) and all others (e.g. private car). The most recent survey available is from 2021, and it showed that Islington has a <Link href="https://www.healthystreetsscorecard.london/results/results_outcome_indicators/#ResultsModeshare">sustainable modal share of 85%</Link>.</Typography>
                        <Typography variant="body1">Every borough needs to do their part to meet overall climate targets. Fortunately, here in Islington, there are still many opportunities increase the share of trips made without a private car.</Typography>
                    </>}
                />

                <CIAsk
                    target_name="Target Date"
                    targets={["2041", "2041", "2030"]}
                    image={<Image src="/static/images/sustainable-modal-share.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />}
                    body={<Typography variant="body1">We have asked the Council to bring forward the target date for reaching 90% sustainable transport modal share as measured by TfL from 2041 to 2030. The <Link href="https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/transportandinfrastructure/information/adviceandinformation/20222023/islington-transport-strategy-2021-monitoring-report.pdf">Islington Transport Strategy Monitoring Report 2021</Link> lays out the goals and tracks progress.</Typography>}
                />

                {header("2. Low-Traffic Neighbourhoods")}

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
                        <>
                            <Typography variant="body1">Low-Traffic Neighbourhoods make it both appealing and possible for the broadest number of people to get around without a car. Academic research has shown that <Link href="https://www.healthystreetsscorecard.london/imperial-college-londons-ltn-air-quality-study/">low-traffic streets improve overall air quality</Link> and <Link href="https://www.theguardian.com/world/2021/jul/23/low-traffic-schemes-halve-number-of-road-injuries-study-shows">reduce road danger</Link>. They can also <Link href="https://www.theguardian.com/uk-news/2023/jun/12/low-traffic-neighbourhoods-ltn-may-lead-people-drive-less-london">lead people to drive less</Link>.</Typography>
                            <Typography variant="body1">Islington has already determined that <Link href="https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/energyservices/businessplanning/strategies/20202021/20201209vision2030islingtonzerocarbonstrategy1.pdf">100% of its transport emissions must be removed</Link> to meet its aggressive <Link href="https://www.islington.gov.uk/environment-and-energy/climate-emergency">Net Zero by 2030</Link> goals. Since the easiest, cheapest, and most equitable way to reach a low-carbon future is to reduce traffic, we asked the Council to cover the borough with Low-Traffic Neighbourhoods by 2024.</Typography>
                            <Typography variant="body1">You can learn more about the Council’s implemented <Link href="https://www.islington.gov.uk/roads/people-friendly-streets/low-traffic-neighbourhoods">Low-Traffic Neighbourhoods</Link>, as well as their new crop of <Link href="https://www.islington.gov.uk/roads/people-friendly-streets/liveable-neighbourhoods">Liveable Neighbourhoods</Link>.</Typography>
                        </>
                    }
                />

                {header("3. Cycle Delivery Hubs")}

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

                {header("4. Affordable Cycle Parking")}

                <CIAsk
                    target_name="Which is Cheaper to Park?"
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
                            <Typography variant="body1">Islington installed their <Link href="https://www.islington.media/news/islington-council-unveils-400th-bike-hangar-as-vision-for-cleaner-greener-healthier-borough-continues">400th bike hangar in March 2022</Link>. However, using this secure, on-street bike storage is still too expensive.
                            </Typography>
                            <Typography variant='body1'>As of 2023, <Link href="https://www.islington.gov.uk/roads/cycling/cycleparking">the Council charges an up-front fee of £107.25</Link> per year to rent a bike hangar space, plus a refundable key deposit of £27.75. It's only possible to buy a full year, and the fee isn't refundable if you move midway through the year. This means that a family of 4 has to pay over £500 to store their bikes.
                            </Typography>
                            <Typography variant='body1'>
                                Some electric car permits, by contrast, cost just <Link href="https://www.islington.gov.uk/parking/parking-permits/parking-permit-costs-table">£50 per year</Link> or £4.17 per month. And some petrol vehicles cost only £100 per year, again with no premium on monthly permits.
                            </Typography>
                            <Typography variant='body1'>
                                We have asked Islington to deliver secure, affordable, and flexible bike parking and ensure that it is never cheaper to park a car or van than to park a cycle.</Typography>
                        </>
                    }
                />

                {header("5. Cycle Tracks on Main Roads")}

                <CIAsk
                    target_name="Cycle Track Coverage"
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
                            <Typography variant="body1">In 2020, Islington showed real initiative by quickly installing a cost-effective cycle track on Liverpool Road. This was the southern section of the <Link href="https://www.islington.media/news/new-finsbury-park-to-highbury-fields-cycleway-helps-create-greener-islington">Cycleway 38 scheme</Link>.</Typography>
                            <Typography variant="body1">We have asked the Council to keep it up and work with relevant authorities to install cycle tracks on all busy roads in the borough by 2026.</Typography>
                        </>
                    }
                />

                <Typography variant='h4' mt={5}>Current status</Typography>
                <Box mt={3} xs={12} mb={3}>
                    <CIMap />
                </Box>
            </Container >
        </>
    );
}
