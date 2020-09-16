import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;

  @media (max-width: 990px){
    flex-direction: column;
  }

  .app__left {
    flex: 0.9;
  }

  .app__right {
    height: fit-content;
  }

  .app__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  .app__stats {
    display: flex;
    justify-content: space-between;
  }
`;
