import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "avataaars";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  avatars: {
    marginTop: "8em",
    marginBottom: "2em;"
  },
  hero: {
    background: "#F0F2F0" /* fallback for old browsers */
  },
  heroText: {
    width: "80%",
    display: "inline-block",
    marginTop: "20px",
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
          <div className={classes.avatars}>
            <Avatar
              avatarStyle="Circle"
              topType="ShortHairShortFlat"
              accessoriesType="Blank"
              hairColor="BrownDark"
              facialHairType="BeardLight"
              facialHairColor="BrownDark"
              clotheType="Hoodie"
              clotheColor="Blue03"
              eyeType="Default"
              eyebrowType="Default"
              mouthType="Twinkle"
              skinColor="Light"
            />
            <Avatar
              avatarStyle="Circle"
              topType="LongHairStraight"
              accessoriesType="Blank"
              hairColor="Blonde"
              facialHairType="Blank"
              clotheType="BlazerShirt"
              eyeType="Happy"
              eyebrowType="Default"
              mouthType="Default"
              skinColor="Light"
            />
          </div>
          <div className={classes.heroText}>
            <Typography variant="h4">Welcome to Arnold Creatives</Typography>
            <hr style={{ width: "90%" }} />
            <Typography variant="body1">Content Writing Done Right</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
