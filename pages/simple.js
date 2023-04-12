import * as React from 'react';
import styles from "/styles/Simple.module.scss";
import clsx from "clsx";

import {
    // Box,
    // Container,
    // Stack,
    // Typography,
    // Grid,
    // Divider,
    Button
} from "@mui/material";

export default function Simple() {
    const openQuickView = (toggle, toggleParent, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'true');
        fullwidth.classList.toggle(styles.is_hidden);
        // Make fullwidth card keyboard focusable.
        fullwidth.setAttribute('tabIndex', '0');
    };

    const closeQuickView = (toggle, toggleParent, fullwidth) => {
        toggle.setAttribute('aria-expanded', 'false');
        fullwidth.classList.toggle(styles.is_hidden);
        fullwidth.removeAttribute('tabIndex');
    };

    var clickOpenQuickView = (e) => {
        const toggle = e.target
        const toggleParent = toggle.parentElement
        const fullwidth = toggleParent.nextElementSibling

        if (fullwidth.getAttribute('aria-expanded') === 'false') {
            openQuickView(toggle, toggleParent, fullwidth)
        } else {
            closeQuickView(toggle, toggleParent, fullwidth)
        }
    }

    var clickCloseQuickView = (e) => {
        const toggle = e.target
        const toggleParent = toggle.parentElement

        closeQuickView(toggle, toggleParent, toggleParent)
    }

    return (
        <main>
            <h1>Playing with CSS Grid... to "inject" a fullwidth grid item into a grid whose columns are <i>auto-arranged</i></h1>
            <p>Imagine a grid of product cards, where clicking on a "quick view" button "injects" a new card that is expanded full width of the entire grid, immediately below the card that was clicked (thereby allowing a visual "connection" between the two cards), and is completely responsive.</p>
            <ul>
                <li>Usually, "quick views" are rendered as popups or overlays, but in this case, an "inline" solution is required.</li>
                <li>This mock-up requires very little CSS code to achieve it, and <strong>zero media queries</strong>.</li>
                <li>In reality, the "injected" card will probably be fetched via JavaScript and placed in the correct place in the DOM. However, for demo purposes, I've directly added the fullwidth cards in their correct positions in the DOM, and I'm simply toggling their visibility.</li>
            </ul>

            <h2>Accessibility considerations</h2>
            <ul>
                <li>HTML source order is preserved for the cards, providing a good natural tab order.</li>
                <li>The "quick view" buttons behave as "toggles", so they have <code>aria-expanded</code> and <code>aria-controls</code> attributes. See <a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/">ARIA best practices - disclosure widget</a> for more information.</li>
                <li>Focus management ensures the "injected" card can receive keyboard focus, and on closing the card, keyboard focus is returned to the button that originally toggled the card's visibility.</li>
                <li>Read the full <a href="https://css-tricks.com/expandable-sections-within-a-css-grid/">CSS Tricks article.</a>
                </li>
            </ul>

            <ul className={styles.grid}>
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>2</p>
                    <Button onClick={clickOpenQuickView} variant="contained">Quick view</Button>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="quickview-01">
                    <Button onClick={clickCloseQuickView} variant="contained">Close 2</Button>
                    <p>fullwidth 2</p>
                    <p>This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.</p>
                    <p>Test <a href="#">inline link</a>.</p>
                </li>
                <li>
                    <p>3</p>
                </li>
                <li>
                    <p>4</p>
                    <Button onClick={clickOpenQuickView} variant="contained">Quick view</Button>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="quickview-04">
                    <Button onClick={clickCloseQuickView} variant="contained">Close 4</Button>
                    <p>fullwidth 4</p>
                    <p>This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.</p>
                    <p>Test <a href="#">inline link</a>.</p>
                </li>
                <li>
                    <p>5</p>
                    <Button onClick={clickOpenQuickView} variant="contained">Quick view</Button>
                </li>
                <li className={clsx(styles.fullwidth, styles.is_hidden)} id="quickview-05">
                    <Button onClick={clickCloseQuickView} variant="contained">Close 5</Button>
                    <p>fullwidth 5</p>
                    <p>This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.</p>
                    <p>Test <a href="#">inline link</a>.</p>
                </li>
                <li>
                    <p>6</p>
                </li>
                <li>
                    <p>7</p>
                </li>
                <li>
                    <p>8</p>
                </li>
            </ul>
        </main >

    );
}
