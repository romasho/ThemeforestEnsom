import styled from 'styled-components';

export const ServiceDescriptionContainer = styled.div`
  width: 100%;
  max-width: 635px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 60px;
  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    max-width: 328px;
    gap: 25px;
    padding-bottom: 35px;
  }
`;

interface ImgProps {
  marks: string[] | undefined;
}

export const Img = styled.img<ImgProps>`
  height: 290px;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  ${(props) =>
    props.marks
      ? `width: 350px;
  height: 160px;`
      : ''}
  @media (max-width: 768px) {
    max-width: 329px;
    height: 160px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 12.5px;
  }
`;

export const Li = styled.li`
  font: ${({ theme }) => theme.font.paragraph.paragraph2};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font: ${({ theme }) => theme.font.paragraph.paragraph3};
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
