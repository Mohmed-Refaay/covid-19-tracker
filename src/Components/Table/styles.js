import styled from "styled-components";

export const StyledTable = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  height: 400px;
  color: #6a5d5d;
    
  tr {
    display: flex;
    justify-content: space-between;
  }

  td {
    padding: 0.5rem;
  }

  tr:nth-of-type(odd) {
    background-color: #f3f2f8;
  }
`;
