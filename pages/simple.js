import * as React from 'react';
import styles from "/styles/Simple.module.scss";
import clsx from "clsx";
import Image from 'next/image';
import Link from '../src/Link';

import {
    Box,
    // Container,
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
        <main>
            <Box sx={{ my: 4 }}>
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
                    Sustainable Transport Modal Share
                </li>
                <li>
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
                <li>
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
                <li className={styles.section_header}>
                    People Friendly Streets
                </li>
                <li>
                    <div className={styles.d_flex}>
                        <IconButton size="small" onClick={clickOpenQuickView} data-content-id="ltns">
                            <AddIcon />
                        </IconButton>
                        <span style={{ fontSize: "16pt" }}>Target Date</span>
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
                        liveable neighbourhoods across the borough including with people friendly pavements and more
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
            </ul>
        </main >

    );
}
