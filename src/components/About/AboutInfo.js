import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginTop: "3em"
  },
  paper: {
    margin: theme.spacing(3)
  },
  heading: {
    margin: theme.spacing(2)
  },
  body: {
    padding: theme.spacing(1),
    marginLeft: "2em",
    marginRight: "2em"
  }
}));

export default function AboutInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h2" className={classes.heading}>
            About Us
          </Typography>
          <Typography className={classes.body} variant="body1">
            Spicy jalapeno bacon ipsum dolor amet landjaeger excepteur filet
            mignon meatloaf labore cupim. Pork chop est landjaeger cillum in
            pork belly prosciutto tri-tip laborum short ribs pork ex. Ball tip
            fatback prosciutto fugiat biltong, pancetta bacon picanha pastrami
            turducken ham hock drumstick shank sint. Nostrud sunt et veniam
            biltong commodo. Bacon voluptate capicola sausage mollit meatloaf
            meatball kielbasa filet mignon cillum.
          </Typography>
          <Typography className={classes.body} variant="body1">
            Reprehenderit sausage est qui. Do fugiat incididunt ea, cow spare
            ribs cillum shankle velit chislic anim duis chicken. Excepteur et
            dolor consequat chislic kevin salami in corned beef. Proident est
            short loin elit nulla t-bone bresaola burgdoggen corned beef ut
            culpa. Pork enim kevin rump chuck.
          </Typography>
          <Typography className={classes.body} variant="body1">
            Dolore beef prosciutto, anim ut chislic ea deserunt ipsum. In salami
            nisi fatback. Porchetta beef ribs picanha pork chop. Cupidatat velit
            short ribs, rump do cow nostrud meatball labore ex boudin pork
            belly. Ullamco excepteur burgdoggen sunt incididunt tongue dolor
            quis exercitation. Elit shankle occaecat porchetta sed, sirloin quis
            est aliquip ad do biltong ut anim. Ribeye chuck qui reprehenderit.
          </Typography>
          <Typography className={classes.body} variant="body1">
            Elit ut swine veniam, pig bacon labore cupidatat salami fatback
            andouille irure. Biltong cupim chuck, spare ribs mollit tail boudin
            ad beef ribs. Kielbasa do sirloin, buffalo proident salami shoulder
            velit short ribs chuck. Pork tongue brisket aliqua quis landjaeger
            cupim shoulder minim jerky cillum fatback deserunt exercitation beef
            ribs.
          </Typography>
          <Typography className={classes.body} variant="body1">
            Jerky pork esse sausage qui meatball andouille pancetta biltong
            spare ribs. Culpa corned beef cow drumstick tenderloin capicola
            filet mignon non doner turkey beef pancetta. Ut hamburger t-bone,
            pastrami anim ground round venison commodo non id bresaola pig beef
            est. Pork belly flank drumstick chuck, in turkey meatloaf qui lorem
            kielbasa. Turducken buffalo ut pork cupidatat burgdoggen aute ribeye
            bacon veniam eiusmod sirloin magna tempor jowl. In pig sirloin
            shankle prosciutto sunt ipsum mollit turkey landjaeger.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
