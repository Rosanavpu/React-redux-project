import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { styled as styledM, alpha } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';

export const AppBarContainer = styled(AppBar)`
  background-color: #141a29;
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
  min-height: ${prop => prop.height};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ContainerSearch = styled.div`
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
  min-height: ${prop => prop.height};
  position: 'relative';
  border-radius: 10px;
  background-color: #666765;
  color:white;
  &:hover': {
    background-color: #666765;
  };
`;

// export const StyledInputBase = styled(InputBase)`
//   &.MuiInputBase-input {
//     color: white !important;
//     padding-left: '5%';
//   }
// `;

export const StyledInputBase = styledM(InputBase)(({ theme }) => ({
  color: 'inherit',
  paddingLeft: '5%',
}));
