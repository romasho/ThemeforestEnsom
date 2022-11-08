import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  width: 50%;
  margin: -50px 0 -30px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    margin: 0 0 0 0;
  }
`;

export const BaseBlock = styled.div`
  max-width: ${({ theme }) => theme.width.wideBlock};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 30px;

  p {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    row-gap: 20px;
    max-width: ${({ theme }) => theme.width.containerMobile};
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin: 0 auto;
  }
`;

export const BaseBlockRowImages = styled(BaseBlockRow)`
  overflow-x: hidden;
  max-width: 100%;
`;
