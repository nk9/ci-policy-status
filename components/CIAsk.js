import * as React from 'react';
import slugify from 'slugify';

import clsx from "clsx";
import Image from 'next/image';
import styles from "./CIAsk.module.scss";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import {
    IconButton,
} from "@mui/material";

export default function ({ target_name, targets, image, body }) {
    const content_id = slugify(target_name)
    const [expanded] = React.useState([])

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
        <>
            <li className={styles.target_name} key={content_id}>
                <div className={styles.d_flex}>
                    <IconButton size="small" onClick={clickOpenQuickView} data-content-id={content_id}>
                        <AddIcon />
                    </IconButton>
                    <span style={{ fontSize: "16pt" }}>{target_name}</span>
                </div>
            </li><li className={clsx(styles.fullwidth, styles.is_hidden)} id={content_id} key={content_id + "_body"} >
                {image ?? null}
                {body}
            </li>
            {React.Children.toArray(targets.map((t) => <li><p>{t}</p></li>))}
        </>
    )
}
