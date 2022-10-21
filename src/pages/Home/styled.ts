import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  width: 50%;
  margin: -50px 0 -30px 0;
`;

export const InfoBlock = styled.div`
  max-width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 30px;

  p {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const InfoBlockRow = styled(InfoBlock)`
  flex-direction: row;
`;

export const InfoBlockCenter = styled(InfoBlock)`
  align-items: center;
  margin: -20px auto;

  p {
    text-align: center;
  }
`;

export const InfoBlockRowImages = styled(InfoBlockRow)`
  overflow-x: hidden;
  max-width: 100%;
`;
