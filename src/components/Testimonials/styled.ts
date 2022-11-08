import styled from 'styled-components';

export const TestimonialsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 50px;
  max-width: 1110px;
  width: calc(100% - 32px);
  margin-left: 4px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;
