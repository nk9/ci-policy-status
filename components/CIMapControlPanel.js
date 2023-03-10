import React, { useState, useEffect } from "react";
import styles from "./CIMapControlPanel.module.scss";

const hideableLayers = {
    'protectedSegments': "Protected Tracks",
    'majorRoads': "Major Roads"
}

function ControlPanel(props) {
    const [visibility, setVisibility] = useState({
        boundaries: true,
        protectedSegments: true,
        majorRoads: true
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

    return (
        <div className={styles["control-panel"]}>
            <h3>Layers</h3>
            {Object.entries(hideableLayers).map(([layerID, displayName]) => (
                <div key={layerID} className="input">
                    <input
                        id={layerID}
                        type="checkbox"
                        checked={visibility[layerID]}
                        onChange={evt => onVisibilityChange(layerID, evt.target.checked)}
                    />
                    <label htmlFor={layerID}>{displayName}</label>
                </div>
            ))}
        </div>
    );
}

export default React.memo(ControlPanel);
