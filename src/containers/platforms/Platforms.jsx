import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Platforms() {
  const classes = useStyles();

  return (
    <Container>
    <Card className={classes.root}>
      <CardHeader
        title="Titulo juego{name}"
        subheader="year start"
        />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        title="Videogame"
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum eos, obcaecati, velit officiis et veritatis, iusto soluta illum fugit nam voluptatibus aut quae temporibus consequuntur illo voluptas! Eligendi, temporibus?
        </Typography>
      </CardContent>
      <Container justifyContent={'flex-end'} alignItems={'center'}>
      <CardActions>
      <Typography variant="body2" color="textSecondary" component="p">
          Detail
        </Typography>
        <IconButton aria-label="add to favorites">
          <ArrowForwardIosIcon />
        </IconButton>
      </CardActions>
      </Container>
      </Card>
    </Container>
  );
}
