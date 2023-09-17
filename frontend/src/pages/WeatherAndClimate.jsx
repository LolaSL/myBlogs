import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const WheatherAndClimate = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        Weather in Israel
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
              src="./images/72.AVIF"
              alt="Negev desert"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
                  </Grid>
                  <Grid item xs={12} sm={6}>
            <img
              width="90%"
            height="98%"
              component="img"
              src="./images/37.AVIF"
              alt="Eilat Marina"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
                  <Grid item xs={12} sm={6}>
            <img
              width="90%"
              height="auto"
              component="img"
              src="./images/73.AVIF"
              alt="Winter in Jerusalem"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
                  </Grid>
        
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              Climate, Seasons and Average Monthly Temperature
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              For such a small country, Israel is very diverse in terms of
              geography. In the north, you will see mountains, some of which are
              snow-capped, and in the south, you'll find desert landscapes (the
              Negev and Judean deserts make up more than half of Israel total
              landmass). Add in three seas, central Israel Judean Hills, and
              coastal plains, and you will begin to understand how this little
              country can be incredibly varied in terms of weather. Israel is
              considered to have a Mediterranean climate with hot and dry
              summers and cool and wet winters. The start of the year is the
              chilliest with average daily temperatures in January settling
              between 43 and 60 degrees F (6 to 16 degrees C). In the summer,
              July and August are typically the hottest months with average
              across-the-country temperatures between 72 and 91 degrees F (22
              and 33 degrees C). Depending on where you are at in the country,
              along the coast, in the desert, or in the highlands, the weather
              varies, however. In the desert regions, for example, summer
              daytime temperatures can reach 115 F (46 C). Due to the high heat
              in the summer, it is recommended to visit Israel in the spring or
              fall, when the weather is warm, but not too hot, and the nights
              are cool, but not too cold.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};
export default WheatherAndClimate;
