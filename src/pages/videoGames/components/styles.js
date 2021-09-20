import styled from 'styled-components';
import { CardMedia, Card } from '@material-ui/core';

export const Container = styled.div`
  align-items: ${props => props.alignItems} !important;
  border: ${props => (props.border ? 'solid 1px red' : '')};
  display: flex;
  flex-wrap: ${props => props.flexDirection ?? 'wrap'};
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent} !important;
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft ?? 'auto'} !important;
  margin-right: ${props => props.marginRight ?? 'auto'} !important;
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  min-height: ${props => props.height};
  padding: ${props => props.padding ?? 'auto'};
`;

export const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;
export const StyledCard = styled(Card)`
  width: 345px;
`;
