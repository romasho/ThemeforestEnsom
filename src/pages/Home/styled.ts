import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  width: 50%;
  margin: -50px 0 -30px 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 0 0;
  }
`;

export const BaseBlock = styled.div`
  max-width: 540px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 30px;

  p {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: 768px) {
    row-gap: 20px;
    max-width: 328px;
    margin: 0 auto;
  }
`;

export const BaseBlockWidth = styled(BaseBlock)`
  max-width: 730px;
  align-items: center;
  text-align: center;
`;

export const BaseBlockRow = styled(BaseBlock)`
  flex-direction: row;
`;

export const BaseBlockCenter = styled(BaseBlock)`
  align-items: center;
  margin: -20px auto;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const BaseBlockRowImages = styled(BaseBlockRow)`
  overflow-x: hidden;
  max-width: 100%;
`;
