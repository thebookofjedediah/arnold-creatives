import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "avataaars";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  avatars: {
    marginTop: "10em"
  },
  hero: {
    background: "#F0F2F0" /* fallback for old browsers */,
    height: "100vh"
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
            <h2>Content Writing Done Right</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
