import React, { useState, useEffect } from "react";
import styles from "./CIMapControlPanel.module.scss";
import useMediaQuery from '@mui/material/useMediaQuery';

const hideableLayers = {
    'protectedSegments': { fullName: "Protected Tracks", shortName: "Tracks" },
    'majorRoads': { fullName: "Major Roads", shortName: "Roads" },
    'ltns': { fullName: "Low-Traffic Neighbourhoods", shortName: "LTNs" },
    'hubs': { fullName: "Cycle Logistics Hubs", shortName: "Hubs" }
}

// When the hideable layer above has its visibility toggled, also
// toggle this other layer
const pairedLayers = {
    'protectedSegments': 'protectedSegmentsHover'
}

function ControlPanel({ layers, onChange }) {
    let defaultVisibility = Object.fromEntries(Object.keys(layers).map((key) => [key, true]))
    const [visibility, setVisibility] = useState(defaultVisibility);

    useEffect(() => {
        // Convert true/false to "visible"/"none"
        const visibilityState = Object.fromEntries(
            Object.entries(visibility).map(([k, v]) => [k, v ? "visible" : "none"])
        );
        onChange(visibilityState);
    }, [visibility]);

    const onVisibilityChange = (name, value) => {
        var newVisibility = { ...visibility, [name]: value }

        if (Object.hasOwn(pairedLayers, name)) {
            newVisibility[pairedLayers[name]] = value
        }

        setVisibility(newVisibility);
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
