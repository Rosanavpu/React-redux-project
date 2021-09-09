import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const AppBarContainer = styled(AppBar)`
  background-color: #C2C2C2;
`;

export const Container = styled.div`
  align-items: ${props => props.alignItems} !important;
  border: ${props => (props.border ? 'solid 1px red' : '')};
  display: flex;
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent} !important;
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft ?? 'auto'} !important;
  margin-right: ${props => props.marginRight ?? 'auto'} !important;
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  min-height: ${props => props.height};
  background-color: ${props => props.backgroundColor ?? 'transparent'};
`;
