import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  hero: {
    backgroundColor: "#F0F2F0"
  },
  heroText: {
    width: "80%",
    display: "inline-block",
    marginTop: "8em",
    marginBottom: "20px",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "10px",
    color: theme.palette.text.secondary
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.hero}>
          <div className={classes.heroText}>
            <Typography variant="h3">Welcome to Arnold Creatives</Typography>
            <hr style={{ width: "90%" }} />
            <Typography variant="body1">Content Writing Done Right</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
