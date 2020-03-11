import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "30px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  name: {
    paddingBottom: "5px"
  }
}));

export default function SocialProof() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.name}>
              Moe Lester
            </Typography>
            <Typography variant="subtitle1">
              They got me from 0 to 100 real quick.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.name}>
              Dixie Normus
            </Typography>
            <Typography variant="subtitle1">
              The Arnold's are the greatest ever.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.name}>
              Ben Dover
            </Typography>
            <Typography variant="subtitle1">
              Here is a slightly longer testimonial to show how that will work.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.name}>
              Hugh G. Rection
            </Typography>
            <Typography variant="subtitle1">
              Every article was delivered perfectly and on time. No edits were
              even needed.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
