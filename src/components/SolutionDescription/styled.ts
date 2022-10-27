import styled from 'styled-components';

export const SolutionDescriptionContainer = styled.div`
  width: 100%;
  max-width: 635px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 20px;

  &:last-child {
    padding-bottom: 0;
  }

  img {
    height: 250px;
    object-fit: cover;
  }
`;

export const Ul = styled.ul`
  padding-left: 20px;
`;

export const Li = styled.li`
  padding-left: 15px;
  padding-bottom: 25px;
  font: ${(props) => props.theme.font.paragraph.paragraph1};
  color: ${(props) => props.theme.colors.grey};
`;
