import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;

  @media (max-width: 990px) {
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
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .app__head {
    color: orangered;
    @media (max-width: 500px) {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  }
  .app__stats {
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
