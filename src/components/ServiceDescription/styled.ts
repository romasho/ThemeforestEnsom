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
`;

export const Ul = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Li = styled.li`
  font: ${(props) => props.theme.font.paragraph.paragraph2};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 30px;
`;
