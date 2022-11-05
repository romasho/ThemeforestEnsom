import styled from 'styled-components';

export const SolutionDescriptionContainer = styled.div`
  width: 100%;
  max-width: 635px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 70px;

  &:last-child {
    padding-bottom: 0;
  }

  img {
    height: 250px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding-bottom: 40px;
  }
`;

export const Ul = styled.ul`
  padding-left: 20px;
  list-style-type: none;
`;

export const Li = styled.li`
  padding-left: 15px;
  padding-bottom: 25px;
  font: ${({ theme }) => theme.font.paragraph.paragraph1};
  color: ${({ theme }) => theme.colors.grey};
  position: relative;

  &::before {
    content: ' ';
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    left: -19px;
    position: absolute;
    top: 11px;
  }

  @media (max-width: 768px) {
    font: ${({ theme }) => theme.font.paragraph.paragraph3};
    padding-bottom: 20px;

    &::before {
      top: 7px;
    }
  }
`;
