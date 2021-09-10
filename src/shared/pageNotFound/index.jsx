import { Container } from './styles';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PageNotFound() {
  const classes = useStyles();

  return (
    <Container width={'75%'} justifyContent={'center'}>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Container justifyContent={'center'} marginBottom={'2%'}>
            <Typography variant='h5' component='h1'>
             Ooops!
            </Typography>
          </Container>
          <Container justifyContent={'center'}>
            <Typography variant='body2' component='p'>
              The link you clicked may be broken or the page may have been removed or renamed
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}
