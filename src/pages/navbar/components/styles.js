import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
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

export const StyledInputBase = styled(InputBase)`
  margin: auto;
  margin: auto;

  '&:focus': {
    width: '20ch';
  }
  & .MuiInputBase-input {
    font: inherit !important !important;
    color: white !important;
    width: 100% !important;
    border: 0 !important;
    height: 1.1876em !important;
    margin: 0 !important;
    display: block !important;
    padding: 6px 0 7px !important;
    min-width: 0 !important;
    background: none !important;
    box-sizing: content-box !important;
    animation-name: mui-auto-fill-cancel !important;
    letter-spacing: inherit !important;
    animation-duration: 10ms !important;
    -webkit-tap-highlight-color: transparent !important;
    margin-left: 5%;
  }
`;
