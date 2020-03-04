import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    textAlign: "center"
  }
});

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>Contact</h1>
      <iframe
        title="form for inquiries"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfckz6SkvGhNnyv6_SN6LDbugFyJD2z3nxIGVl14P_-8e7pzQ/viewform?embedded=true"
        width="640"
        height="1134"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
