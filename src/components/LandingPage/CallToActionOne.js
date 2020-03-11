import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "#F0F2F0"
  },
  ctaText: {
    fontSize: "2.5em"
  }
}));

export default function CallToActionOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.ctaText} variant="h3">
        Ready to Work With Us?
      </Typography>
      <Link style={{ textDecoration: "none" }} to="/contact">
        <Button variant="contained" color="primary">
          Reach Out
        </Button>
      </Link>
    </div>
  );
}
