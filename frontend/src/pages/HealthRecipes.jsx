import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const HealthRecipes = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        A few recipes for healthier dinner.
      </Typography>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #ccc",
              }}
              src="./images/83.AVIF"
              alt="Pumpkin soup"
              className={classes.image}
            />
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/pumpkin-soup/e54ab2b5-7d19-4e4b-b383-781292dc4bfb?r=healthy/9v410ya9"
                target="_blank"
              >
                <ListItemText className="bottom-right" primary="Get recipe" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              Easy pumpkin soup recipe
            </Typography>
            <Typography variant="body1" className={classes.article}>
              The beauty of a creamy pumpkin soup (and this classic pumpkin soup
              recipe in particular) is that it’s so versatile and forgiving.
              It’s one of the easiest meals to make with just a handful of
              ingredients, and it’s almost impossible to mess up.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #ccc",
              }}
              src="./images/84.AVIF"
              alt="Beef stroganoff"
              className={classes.image}
            />
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/beef-stroganoff-4/3574df69-6fc1-4473-a0a6-582ff24c8779?r=healthy/9v410ya9"
                target="_blank"
              >
                <ListItemText className="bottom-right" primary="Get recipe" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              Beef stroganoff recipe
            </Typography>
            <Typography variant="body1" className={classes.article}>
              This easy beef stroganoff recipe is made with the most delicious
              garlicky creamy mushroom sauce and can be ready to go in just 30
              minutes!
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #ccc",
              }}
              src="./images/85.AVIF"
              alt="Chilli con carne"
              className={classes.image}
            />
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/chilli-con-carne-10/16d484bb-df3d-4069-bbb9-ea5856407344?r=healthy/9v410ya9"
                target="_blank"
              >
                <ListItemText className="bottom-right" primary="Get recipe" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              Chilli con carne recipe
            </Typography>
            <Typography variant="body1" className={classes.article}>
              Wholesome chilli con carne recipe With lean beef mince, red beans
              and a nice kick of heat, our hearty chilli con carne recipe is a
              family favourite.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #ccc",
              }}
              src="./images/86.AVIF"
              alt="Chicken cacciatore"
              className={classes.image}
            />
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/chicken-cacciatore-2/c905b9d2-b6ac-441f-b4ec-0106e8844d10"
                target="_blank"
              >
                <ListItemText className="bottom-right" primary="Get recipe" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              Chicken cacciatore
            </Typography>
            <Typography variant="body1" className={classes.article}>
              This chicken cacciatore recipe is nutritious and bursts with
              flavour. Make it ahead and freeze it for later.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              style={{
                borderRadius: "10px",
                boxShadow: "10px 10px 20px #ccc",
              }}
              src="./images/87.AVIF"
              alt="Aussie-style beef and salad tacos"
              className={classes.image}
            />
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/chicken-cacciatore-2/c905b9d2-b6ac-441f-b4ec-0106e8844d10"
                target="_blank"
              >
                <ListItemText className="bottom-right" primary="Get recipe" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              Aussie-style beef and salad tacos
            </Typography>
            <Typography variant="body1" className={classes.article}>
              Our go-to tacos recipe These tacos are a fresh and flavourful
              twist on everyone’s favourite Mexican meal. It may stray from
              Mexican tradition...
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default HealthRecipes;
