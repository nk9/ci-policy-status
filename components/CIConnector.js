import * as React from "react";
import { useStepContext } from "@mui/material/Step";

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
  const ctx = useStepContext();
  console.log("context:", ctx);

  return (
    <CIConnectorRoot />
  );
}

export default CIConnector;
