import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const ReasonToVisitIsrael = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography
        variant="h2"
        className={classes.article}
        sx={{ textAlign: "justify" }}
      >
        Reasons to visit Israel
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
              src="./images/39.AVIF"
              alt="Jerusalem Ben Ehuda Street "
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              1. Amazing things happen.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              By any measure a tiny country, Israel never fails to beguile.
              Jerusalem is the official capital and holy city to three world
              religions, Judaism, Christianity, and Islam, while Tel Aviv brims
              with beaches and bustles with urban vitality. Then there is the
              Dead Sea and Masada, the stark, stunning Negev, and fertile
              Galilee. The number of museums and cultural institutions per
              relative area is larger in Israel than anywhere in the world.
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
              src="./images/40.AVIF"
              alt="Religious Quater"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              2. Religious Experience.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Jerusalem is home to major sites of religious significance and
              pilgrimage, including the Temple Mount, Western Wall, the Church
              of the Holy Sepulchre, Dome of the Rock, and al-Aqsa Mosque. But
              regardless of ones religious views and the connections that many
              feel when visiting the Holy Land, the overriding spiritual energy
              of Jerusalem is something unique for everyone to experience. The
              Yad Vashem Holocaust memorial is an essential stop for any
              visitor. Safed is the cradle of Jewish mysticism, and you can
              retrace Christs footsteps along the shores of the Sea of Galilee.
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
              src="./images/41.AVIF"
              alt="Timna Park"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              3. Israel's Natural Wonders.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              For many, the Mediterranean coast is itself a wonder, with many
              unspoiled beaches despite their proximity to cities. But away from
              the coast, the country diversity truly astounds: in the south,
              there is the vast crater-strewn emptiness of the Negev Desert,
              while to the east, the Dead Sea beckons with the saltiest body of
              water on earth and, at 1,388 feet below sea level, the lowest
              elevation on the surface of the planet. In the north, where the
              Galilee region surprises with its green hills and valleys that (in
              winter) are a major crossroads for migratory birds and form the
              heart of the renowned Israeli wine country.
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
              src="./images/42.AVIF"
              alt="Tel Aviv Marina"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              4. Cosmopolitan Tel Aviv.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              While many people associate Jerusalem most closely with Israel,
              Tel Aviv is the country's answer to Manhattan and the beating
              heart of its culinary, cultural and nightlife scene. It's also a
              beach town clean beaches run the length of the city meaning there
              is a unique mix of sophistication and relaxation here. The ancient
              city of Jaffa provides an atmospheric counterpoint to Tel Aviv
              soaring towers and famous curved white Bauhaus buildings, a legacy
              of the 1930s.
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
              src="./images/43.AVIF"
              alt="Negev Desert"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              5. Great Desert Adventures.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Israel's Negev is a visual sight to behold, its stark desert
              relief home to an infinite variety of beautiful views. And
              eco-tourism and desert adventure touring options abound, from
              hiking and biking along desert trails to all-terrain jeep trips,
              camel rides along the ancient frankincense route, rock climbing,
              and rappelling. There is also a great range of modern guest cabins
              and inns, as well as unique spas, to unwind in after a day of
              desert exploration.
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
              src="./images/44.AVIF"
              alt="Archaeological Site"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              6. Archaeological Sites.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              With a cultural past that stretches back to even before biblical
              times, Israel has a rich array of ancient sites that are easy to
              explore. One of the most famous is Masada, the mountainous
              stronghold at the edge of the Judean desert where Jews tried to
              fend off the ancient Romans. There are stunning Roman ruins in
              Caesarea (some of which can be even be seen on an underwater
              tour), Crusader ramparts in Akko, the ancient Western Wall in
              Jerusalem, St. Mary Well in Nazareth and so much more and new
              discoveries are being made all the time.
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
              src="./images/74.AVIF"
              alt="Delicious Israeli dishes"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              7. Crusaders.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Many tourists visit the Old City of Acre without realizing that
              there is a complete city beneath the ancient streets. The Acre
              Crusader City was built during the 12th century and destroyed in
              1291 when the Mamluks conquered Acre and built their own city on
              the Crusader ruins. After painstaking excavation and restoration,
              visitors can now visit Acre’s Crusader City and see the massive
              Crusader halls, passages, tunnels and chambers. Despite the
              impressive structure and size of the Crusader City maps found in
              the Vatican library show that only about 4% of Acre’s Crusader
              City has been recovered. Acre is a UNESCO World Heritage Site.
              Acre’s natural harbor made it a valuable entry point to the Holy
              Land and Christian pilgrims on route to Jerusalem would often land
              in Acre. 
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
              src="./images/45.AVIF"
              alt="Delicious Israeli dishes"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              8. Delicious Israeli Cuisine.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              It is not called the Land of Milk and Honey for nothing! Thanks to
              its Mediterranean climate and agricultural ingenuity, Israel grows
              an amazing array of organic produce that finds its way into fresh
              market cuisine that you will find served throughout the country.
              Because it is a crossroads country, there are infinite varieties
              of food and restaurants, from Jewish Yemenite to Druze,
              Palestinian to Turkish to trendy New Israeli restaurants that take
              reservations weeks in advance.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};
export default ReasonToVisitIsrael;
