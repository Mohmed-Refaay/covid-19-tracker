import React from "react";
import { StyledTable } from "./styles";

function Table({ countries }) {
  return (
    <StyledTable>
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </StyledTable>
  );
}

export default Table;
