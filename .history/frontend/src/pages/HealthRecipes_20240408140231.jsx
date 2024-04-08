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
            <List>
              <ListItem
                component={Link}
                to="https://www.taste.com.au/recipes/pumpkin-soup/e54ab2b5-7d19-4e4b-b383-781292dc4bfb?r=healthy/9v410ya9"
              >
             
              </ListItem>
              <ListItem>
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
    </Container>
  );
};

export default HealthRecipes;