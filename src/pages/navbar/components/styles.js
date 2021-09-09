import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

export const AppBarContainer = styled(AppBar)`
  background-color: #141a29;
`;

export const Container = styled.div`
  align-items: ${(props) => props.alignItems} !important;
  border: ${(props) => (props.border ? 'solid 1px red' : '')};
  display: flex;
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent} !important;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft ?? 'auto'} !important;
  margin-right: ${(props) => props.marginRight ?? 'auto'} !important;
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  min-height: ${(prop) => prop.height};
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
