import "./App.css";
import memories from "./images/memories.png";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import {getPosts} from "./redux/action/postsAction"
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyles from "./Styles";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])


  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h6" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        {/* <Grow in> */}
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        {/* </Grow> */}
      </Container>
    </>
  );
}

export default App;
