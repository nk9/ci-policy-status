import React, { useState, useEffect } from "react";
import styles from "./CIMapControlPanel.module.scss";
import useMediaQuery from '@mui/material/useMediaQuery';

const hideableLayers = {
    'protectedSegments': { fullName: "Protected Tracks", shortName: "Tracks" },
    'majorRoads': { fullName: "Major Roads", shortName: "Roads" },
    'ltns': { fullName: "Healthy Neighbourhoods", shortName: "LTNs" },
    'hubs': { fullName: "Cycle Logistics Hubs", shortName: "Hubs" }
}

function ControlPanel(props) {
    const [visibility, setVisibility] = useState({
        boundaries: true,
        protectedSegments: true,
        majorRoads: true,
        ltns: true,
        hubs: true
    });

    useEffect(() => {
        // Convert true/false to "visible"/"none"
        const visibilityState = Object.fromEntries(
            Object.entries(visibility).map(([k, v]) => [k, v ? "visible" : "none"])
        );
        props.onChange(visibilityState);
    }, [visibility]);

    const onVisibilityChange = (name, value) => {
        setVisibility({ ...visibility, [name]: value });
    };
    
    const useShortName = useMediaQuery('(max-width: 768px)');

    return (
        <div className={styles["control-panel"]}>
            <h3>Layers</h3>
            {Object.entries(hideableLayers).map(([layerID, { fullName, shortName }]) => (
                <div key={layerID} className="input">
                    <input
                        id={layerID}
                        type="checkbox"
                        checked={visibility[layerID]}
                        onChange={evt => onVisibilityChange(layerID, evt.target.checked)}
                    />
                    <label htmlFor={layerID}>{useShortName ? shortName : fullName}</label>
                </div>
            ))}
        </div>
    );
}

export default React.memo(ControlPanel);
