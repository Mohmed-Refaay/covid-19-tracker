import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { StyledCasesBox } from "./styles";

function CasesBox({ title, cases, total }) {
  return (
    <StyledCasesBox>
      <Card className="CasesBox__card">
        <CardContent>
          <Typography className="CasesBox__title" color="textSecondary">{title}</Typography>
          <h2 className="CasesBox__cases">{cases}</h2>
          <Typography className="CasesBox__total" color="textSecondary">{total} Total</Typography>
        </CardContent>
      </Card>
    </StyledCasesBox>
  );
}

export default CasesBox;
