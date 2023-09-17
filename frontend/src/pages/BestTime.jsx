import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const BestTime = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        The Best Time to Visit Israel
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
              src="./images/36.AVIF"
              alt="Tel-Aviv Yaffa"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              1. Visit Israel
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The best time to visit Israel is typically in the spring (March to
              May) or during the fall (September to November). At these times,
              you'll likely find fewer crowds, cheaper accommodations, and the
              best weather (even for hitting the beach). Summer is the most
              popular and therefore the most crowded, but it can often be
              extremely hot and unpleasant. Whenever you decide to go, use this
              guide to help plan your trip to this tiny but fascinating country
              known for its rich culture, fascinating history, stunning beaches,
              and eclectic food.
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
              src="./images/70.AVIF"
              alt="Bahai Gardens"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              2. Peak Season in Israel
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Despite the often oppressive heat, summer (July and August) is
              still the most popular time for tourists to visit Israel, and
              prices usually reflect that. The week of Passover in the spring is
              probably the next-most popular time to visit. With schools,
              workplaces, and many government offices closed for the entire
              week, attractions, beaches, hotels, and restaurants can get quite
              crowded and expensive. Book early the trip to Israel if you plan
              to come during Passover.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default BestTime;
