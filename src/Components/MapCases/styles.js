import styled from "styled-components";

export const StyledMap = styled.div`
  height: 500px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 16px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 500px) {
    height: 300px;
    margin-bottom: 16px;
  }

  .leaflet-container {
    height: 100%;
  }
`;

export const StyledPopUp = styled.div`
  width: 150px;

  .info-flag {
    height: 100px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
  }

  .info-flag img {
    width: 100px;
    border-radius: 3px;
  }

  .info-name {
      font-size: 20px;
      font-weight: bold;
      color: #555;
  }

  .info-cases,
  .info-death,
  .info-recover {
      font-size: 12px;
      margin-top: 5px;
  }
`;
