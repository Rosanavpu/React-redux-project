import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

export const AppBarContainer = styled(AppBar)`
  background-color: #141a29 !important;
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
  margin-top: ${props => props.marginTop };
  width: ${props => props.width};
  min-height: ${prop => prop.height};
  background-color: #666765;
  border-radius: 10px;
`;

export const StyledInputBase = styled(InputBase)`
  & .MuiInputBase-input {
    color: #FFFFFF !important;
    text-align: left !important;
    margin-left: 5% !important;
  }
  & .MuiInputBase-input:focus {
    border-radius: 10px;
  }
  ,
`;

export const StyledButton = styled(Button)`
  .MuiButton-label {
    text-transform: none;
    color: white;
    font-size: 20px;
  }
`;
