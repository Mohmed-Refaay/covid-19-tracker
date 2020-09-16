import styled from "styled-components";

export const StyledCasesBox = styled.div`
  flex: 1;

  @media (max-width: 400px) {
     width: 250px;
    }
  &:not(:last-child) {
    margin-right: 15px;
    @media (max-width: 400px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  .CasesBox__cases {
    color: #cc1034;
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  .CasesBox__total {
    color: #6c757d;
    font-weight: 700 !important;
    font-size: 0.85rem !important;
  }
`;
