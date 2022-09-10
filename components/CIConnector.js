import * as React from "react";
import { useStepContext } from "@mui/material/Step/StepContext";
import StepContext from "@mui/material/Step/StepContext";

import { styled } from "@mui/material/styles";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

const CIConnectorRoot = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#ccc',
    borderTopWidth: 7,
    borderRadius: 1
  },
}));

function CIConnector(props) {
  return (
    <CIConnectorRoot />
  );
}

export default CIConnector;