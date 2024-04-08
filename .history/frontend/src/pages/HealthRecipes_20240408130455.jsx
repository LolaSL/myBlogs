import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/58.AVIF"
              alt="Hotel Reviews"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              1. Examine Hotel Reviews
            </Typography>
            <Typography variant="body1" className={classes.article}>
              Make certain the resort you choose has a good reputation. Make
              certain to read genuine visitor reviews. The fact that majority of
              visitors like to read reviews prior to making a hotel reservation.
              When you are looking for a fantastic location, reviews are readily
              available. Analyzing reviews about different hotels provides you
              with valuable insight.You can also learn about special resort
              deals by reading reviews. This information provides you with
              convenience and saves you time. Hotel room tariff must justified
              with service.
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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/59.AVIF"
              alt="Hotel Location"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              2. Location
            </Typography>
            <Typography variant="body1" className={classes.article}>
              The Hotel location is an important factor to consider. You should
              choose accommodations that are in convenient locations. There is
              an option to use the Internet to hunt for nearby accommodations
              that are close to your business meetings. You should also keep
              track of accommodations that have easy access to public transit.
              You will be able to travel back and forth without any problems as
              a result of this. Being in a nearby hotel also keeps you from
              becoming lost in a region you are unfamiliar with. The closer you
              get to the location, the less difficult it is to have a
              hassle-free time.
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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/60.AVIF"
              alt="Parking"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              3. Parking
            </Typography>
            <Typography variant="body1" className={classes.article}>
              In large global cities, parking can be a significant difficulty.
              Anyone traveling to such cities should make certain that the motel
              provides on-site internet parking (ideally indoor parking),
              especially if they want to travel inter-town by car or have a
              hired car available for the duration of their stay.
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
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
                src="./images/61.AVIF"
                alt="Services"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className={classes.article}>
                4. Services
              </Typography>
              <Typography variant="body1" className={classes.article}>
                Any reliable Hotel must provide customer-focused services such
                as a 24-hour front desk, housekeeping, room service, laundry,
                and emergency services. The in-residence centres must often
                include a restaurant, an espresso shop, and a health and
                recreation club. You would expect a concierge to give you
                recommendations for things to do in town and a bellhop to help
                you carry your luggage into your room.
              </Typography>
            </Grid>
          </Grid>
        </section>
      </section>
      <section>
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
                src="./images/62.AVIF"
                alt="Hospitality"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" className={classes.article}>
                5. Hospitality
              </Typography>
              <Typography variant="body1" className={classes.article}>
                When you arrive at a hotel, you should be treated with the
                respect and courtesy that you deserve. After all, you have spent
                a significant sum and are entitled to special care. If the
                front-desk staff does not greet you warmly, it is no longer a
                good sign.
              </Typography>
            </Grid>
          </Grid>
        </section>
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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/63.AVIF"
              alt="Hotel Optional Meals"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              6. Hotel Optional Meals
            </Typography>
            <Typography variant="body1" className={classes.article}>
              As a business traveler, you need to be aware of your dining
              options. When you are working long hours, you need a convenient
              way to acquire your food. When you stay at a hotel, you do not
              have to worry about not being able to eat healthy cuisine. There
              are delicious, healthy foods that you may enjoy without having to
              prepare them. If the food at the inn does not appeal to you, you
              may wish to seek out a nearby restaurant. You have the option of
              ordering room service as well. A hotel that provides on-site
              dining is more convenient and prevents you from having to leave
              your room.
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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/64.AVIF"
              alt="Hotel Room Size"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              7. Hotel Room Size
            </Typography>
            <Typography variant="body1" className={classes.article}>
              As a business traveler, you need to be aware of your dining
              options. Perform a quick online search before making a
              reservation. Visit the lodge website and go through the photo
              galleries. Take note of the room sizes. If you are on a solo
              business trip to the city, you can accept a visibly small room
              with high-speed Wi-Fi. If you are bringing your significant other,
              friends, family members, or coworkers to the city, though, you
              will need a larger room.
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
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
              src="./images/65.AVIF"
              alt="Luxury resort"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              8. Luxury resort
            </Typography>
            <Typography variant="body1" className={classes.article}>
              You want a hotel that puts you in a great mood when you are far
              away from home. That is why you should research opulent resorts.
              Luxury resorts have a plethora of appealing attractions. The
              fragrances, decor, and rooms, mattresses, and facilities at these
              resorts are all top-notch. Even while e-booking a fancy motel, you
              can receive fantastic deals. You may expect to be attended to by a
              knowledgeable and attentive staff. They may provide flowers to
              your room, greet you with a warm greeting, and assist you with
              unpacking. In addition, luxury resorts provide excellent security.
              They have security officers on duty 24 hours a day, seven days a
              week. They may also deploy security cameras to secure their
              visitors and employees.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default HealthRecipes;