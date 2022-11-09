import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: 10px;
  overflow: hidden;
  width: 468px;
  height: 280px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    max-width: 320px;
    height: auto;
  }
`;

export const FrontCard = styled.div`
  max-width: 360px;
  height: 211px;
  background-color: #bcbcbc;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  padding: 15px 20px;
`;

export const CardBack = styled(FrontCard)`
  background-color: #939393;
  z-index: 1;
  top: -180px;
  left: 110px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    position: static;
    margin-top: 10px;
  }
`;

export const InfoCard = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
`;

type InputProps = {
  short?: 'short' | 'medium' | 'long';
};

export const Input = styled.input<InputProps>`
  border: none;
  padding: 5px;
  ${({ short, theme }) => {
    switch (short) {
      case 'short':
        return `
        width: 100px;
       `;
      case 'medium':
        return `
          width: 215px;`;
      case 'long':
        return `
            width: 320px;
            @media (max-width: ${theme.breakPoints.mobile}) {
                width: 100%;
              }`;
    }
  }}

  height: 35px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 21px;
  color: #030303;
`;

export const ShortInput = styled.div`
  display: flex;
  gap: 15px;
`;

interface ImgProps {
  img: string;
}

export const Visa = styled.div<ImgProps>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  width: 55px;
  height: 16px;
  position: relative;
  bottom: 171px;
  left: 265px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    left: 235px;
  }
`;

export const MasterCard = styled(Visa)<ImgProps>`
  bottom: 158px;
  height: 32px;
`;

export const BlackStrip = styled.div`
  background-color: #161615;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const CVC = styled(Input)`
  margin-left: 245px;
  width: 75px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-left: 205px;
  }
`;

export const InfoCardBack = styled(InfoCard)`
  margin-left: 245px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-left: 205px;
  }
`;
