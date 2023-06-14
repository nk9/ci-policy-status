import * as React from 'react';
import styles from "/styles/Simple.module.scss";
import clsx from "clsx";
import Image from 'next/image';
import Link from '../src/Link';

import CIMap from '../components/CIMap';
import CIAsk from '../components/CIAsk';

import {
    Box,
    Container,
    // Stack,
    Typography,
    // Divider,
    Button,
    IconButton,
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function Simple() {
    const [expanded, setExpanded] = React.useState([])

    const openQuickView = (toggle, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'true');
        fullwidth.classList.toggle(styles.is_hidden);
        // Make fullwidth card keyboard focusable.
        fullwidth.setAttribute('tabIndex', '0');
    };

    const closeQuickView = (toggle, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'false');
        fullwidth.classList.toggle(styles.is_hidden);
        fullwidth.removeAttribute('tabIndex');
    };

    var clickOpenQuickView = (e) => {
        // debugger;
        const toggle = e.target.closest("button")
        const content_id = toggle.dataset.contentId
        const content = document.getElementById(content_id)

        if (toggle.getAttribute('aria-expanded') !== 'false') {
            openQuickView(toggle, content)
        } else {
            closeQuickView(toggle, content)
        }
    }

    var clickCloseQuickView = (e) => {
        const toggle = e.target
        const toggleParent = toggle.parentElement

        closeQuickView(toggle, toggleParent)
    }

    return (
        <Container maxWidth="md" sx={{ px: 0 }} className='hagrid'>
            <Box sx={{ my: 4, px: 2 }}>
                <Typography variant="h3" gutterBottom>
                    Cycle Islington Policy Observatory
                </Typography>
                <Typography variant="body1">In the 2022 election, Cycle Islington chose five policy priorities, our <Link href="https://cycleislington.uk/2021/five-asks-election-2022/" color="secondary">Five Asks</Link>,
                    to help ensure that whichever party was elected would accelerate the borough's transition to a
                    low-carbon future. In their <Link href="https://www.islington-labour.org.uk/2022-manifesto/" color="secondary">election manifesto</Link>,
                    Islington Labour pledged to ensure that "local people can get on their bike and get cycling safely around Islington."
                </Typography>

                <Typography variant="body1" mt={2}>We are tracking the council's progress toward this commitment. Here is our citizen assessment
                    of their progress so far.</Typography>
            </Box>

            <ul className={styles.grid}>
                <li className={styles.header}>
                </li>
                <li className={styles.header}>
                    Start
                </li>
                <li className={styles.header}>
                    Today
                </li>
                <li className={styles.header}>
                    Target
                </li>
                <li className={styles.section_header}>
                    1. Sustainable Transport Modal Share
                </li>
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
                {/*             
                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="modal-share-date">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Target Date</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="modal-share-date">
                    <Image src="/static/images/sustainable-modal-share.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />
                    <Typography variant="body1">We have asked the Council to bring forward the target date for reaching 90% sustainable
                        transport modal share as measured by TfL from 2041 to 2030. They pledged to “continue to work to
                        increase the sustainable modal share”.</Typography>
                </li>
                <li>
                    <p>2041</p>
                </li>
                <li>
                    <p>2041</p>
                </li>
                <li>
                    <p>2030</p>
                </li>
*/}
                <CIAsk
                    target_name="Modal Share"
                    targets={["85%?", "85%?", "90%?"]}
                    body={<Typography variant="body1">Each year, TfL publishes figures about the sustainable modal share in each borough. [-ed More needed…]</Typography>}
                />
                {/*                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="modal-share">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Modal Share</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="modal-share">
                    <Typography variant="body1">Each year, TfL publishes figures about the sustainable modal share in each borough. [-ed More needed…]</Typography>
                </li>
                <li>
                    <p>85%?</p>
                </li>
                <li>
                    <p>85%?</p>
                </li>
                <li>
                    <p>90%?</p>
                </li>
*/}                <li className={styles.section_header}>
                    2. People Friendly Streets
                </li>
                <CIAsk
                    target_name="Borough Coverage"
                    targets={["20%?", "20%?", "100%"]}
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

                {/*                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="ltns">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Borough Coverage</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="ltns">
                    <Image src="/static/images/LTNs.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="Cyclists and pedestrians share a wide road next to Highbury Fields." />
                    <Typography variant="body1">We have asked the council to cover the borough with “no-through traffic areas” (Low-Traffic
                        Neighbourhoods) to cover the borough by 2024. They said they are “committed to … creating
                        liveable neighbourhoods across the borough including with people-friendly pavements and more
                        greening”. (Manifesto page 23)</Typography>
                </li>
                <li>
                    <p>20%</p>
                </li>
                <li>
                    <p>20%</p>
                </li>
                <li>
                    <p>100%</p>
                </li>
*/}                <li className={styles.section_header}>
                    3. Cycle Logistics
                </li>
                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="cycle-logistics">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Logistics Hub Count</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="cycle-logistics">
                    <Image src="/static/images/pedal-me.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="An electric cargo bike with a trailer moving a large load." />
                    <Typography variant="body1">Motor-powered logistics is causing pollution and danger to our borough. We asked the council
                        the creation of at least ten hubs, possibly on Council property, where all freight is delivered
                        for final delivery by non-polluting, sustainable means – with a target date: May 2026. They pledged
                        to “work to make deliveries more sustainable including by providing last mile delivery hubs“.</Typography>
                </li>
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>10</p>
                </li>
                <li className={styles.section_header}>
                    4. Secure Cycle Parking
                </li>
                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="cycle-parking">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Cycle vs. Car: Which is Cheaper to Park?</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="cycle-parking">
                    <Image src="/static/images/bike-hangar.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="A bike hangar on the street with two people cycling past." />
                    <Typography variant="body1">Islington installed its first bike hangar in 2016, and has kept increasing that count over the years. The <Link href="https://www.islington.media/news/islington-council-unveils-400th-bike-hangar-as-vision-for-cleaner-greener-healthier-borough-continues">400th was installed in March 2022</Link>, and they planned to have over 500 by March 2023.
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
                        cycle. They have pledged to <em>“Invest in secure cycle storage with enough space to meet demand and cut costs of bike storage for lower-income households”.</em> (Manifesto, page 13.)</Typography>
                </li>
                <li>
                    <p>Car</p>
                </li>
                <li>
                    <p>Car</p>
                </li>
                <li>
                    <p>Bike</p>
                </li>
                <li className={styles.section_header}>
                    5. Cycle Tracks on Main Roads
                </li>
                <li className={styles.target_name}>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="cycle-tracks">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Proportion of Lane Kilometres</span>
                    </div>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="cycle-tracks">
                    <Image src="/static/images/pedal-me.jpg"
                        layout="intrinsic"
                        width="900"
                        height="200"
                        alt="An electric cargo bike with a trailer moving a large load." />
                    <Typography variant="body1">We have asked the council to install protected cycle routes on all busy roads in the borough by 2026.
                        They pledged to “build on the LTNs and 3 segregated cycle routes installed in the past two years.” [NOTE: is this correct?]</Typography>

                    <Typography variant="body1" mt={2}>We are following-up the building of these routes, according to the authority in charge (TfL, Islington,
                        or surrounding boroughs).</Typography>
                </li>
                <li>
                    <p>5%</p>
                </li>
                <li>
                    <p>5%</p>
                </li>
                <li>
                    <p>60%?</p>
                </li>
            </ul>

            <Typography variant='h4' mt={5}>Current status</Typography>
            <Box mt={3} xs={12} mb={3}>
                <CIMap />
            </Box>


        </Container>

    );
}
