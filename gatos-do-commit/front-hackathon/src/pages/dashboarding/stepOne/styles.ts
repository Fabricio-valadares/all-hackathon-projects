import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;

  td:last-child {
    border-radius: 0 25px 25px 0;
  }

  td:first-child {
    border-radius: 25px 0 0 25px;
  }
`;

export const HeaderTable = styled.tr``;

export const LineTable = styled.tr`
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 4px;

  border: 10px solid #fff;
`;

export const DataLine = styled.td`
  padding: 20px;
`;

export const DivMobile = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 660px) {
    overflow-x: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 0 0 0;
`;

export const DivContent = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivTitle = styled.div`
  padding: 40px 0 80px 20px;
  width: 100%;
`;

export const Title = styled.th`
  padding: 0 20px 15px 20px;
  text-align: center;
`;

export const TitleText = styled.h1`
  font-size: 1.7em;
  font-weight: bold;
  width: 40%;
  line-height: 1.5;
`;

export const ContainerTable = styled.div`
  width: 100%;
`;
