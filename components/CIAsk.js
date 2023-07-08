import * as React from 'react';
import slugify from 'slugify';

import clsx from "clsx";
import styles from "./CIAsk.module.scss";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import {
    Accordion, AccordionSummary, AccordionDetails, IconButton, Typography
} from "@mui/material";

export default function ({ target_name, targets, image, body }) {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography sx={{ flex: 1 }}>{target_name}</Typography>
                {React.Children.toArray(targets.map((t) => <Typography sx={{ width: '45px', flexShrink: 0, textAlign: 'center' }}>{t}</Typography>))}
            </AccordionSummary>
            <AccordionDetails>
                {image ?? null}
                {body}
            </AccordionDetails>
            
        </Accordion>
    )
}

