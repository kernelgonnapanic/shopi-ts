import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  label {
    margin: 0 10px 6px 0;
  }

  input {
    margin-bottom: 6px;
    width: 100%;
    max-width: 300px;
    border: 0;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    padding: 8px 12px;
  }
`;
