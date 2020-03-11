import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "avataaars";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginTop: "7em",
    marginBottom: "1em"
  }
}));

export default function Avatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
  );
}
