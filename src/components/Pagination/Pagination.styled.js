import styled from 'styled-components';
import { IconButton as NewIcon } from 'components/IconButton/IconButton';

export const IconButton = styled(NewIcon)`
  width: 40px;
  height: 40px;
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const ActivPage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
`;
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
