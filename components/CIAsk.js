import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion, AccordionDetails, AccordionSummary, Typography
} from "@mui/material";

export default function ({ target_name, targets, image, body }) {
    return (
        <Accordion className={"ask-accordion"} disableGutters={true}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ flexDirection: "row-reverse" }}
            >
                <Typography key="target-title" sx={{ flex: 1 }}>{target_name}</Typography>
                {React.Children.toArray(targets.map((t, i) => <Typography key={`target-stat-${i}`} sx={{ width: '45px', flexShrink: 0, textAlign: 'center' }}>{t}</Typography>))}
            </AccordionSummary>
            <AccordionDetails>
                {image ?? null}
                {body}
            </AccordionDetails>
        </Accordion>
    )
}

