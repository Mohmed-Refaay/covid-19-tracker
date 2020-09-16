import React from "react";
import { StyledTable } from "./styles";
import { prettyPrint } from "../../App/util";
import numeral from 'numeral'


function Table({ countries }) {
  return (
    <StyledTable>
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </StyledTable>
  );
}

export default Table;
