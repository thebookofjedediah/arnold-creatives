import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  logo: {
    textAlign: "center"
  }
});

export default function SideNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem className={classes.logo}>
          <ListItemText>
            <Typography variant="h6">Arnold Creatives</Typography>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Work Samples</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Order/Contact</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("left", true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
