import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const TouristTips = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        Tourist Tips
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
              style={{ borderRadius: "10px" }}
              src="./images/1.AVIF"
              alt="Eifel Tower"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              1. Calculate your budget.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              It is already known that you would love to stay in a 5-star hotel,
              with Jacuzzi and breathtaking views of the Eiffel Tower. The
              question is, can you afford it? Make sure to calculate well your
              budget. Or just look at your bank account.
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
              style={{ borderRadius: "10px" }}
              src="./images/2.AVIF"
              alt="Winter"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              2. Travel during low season.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              It could happen that you have no choice but to organize your trip
              during August, Easter or Christmas holidays. Of course during this
              time your journey becomes more expensive. If you have the power to
              choose, then do not travel during this time. The difference
              between traveling in September instead of August can be seen from
              your wallet. Think about it!
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
              style={{ borderRadius: "10px" }}
              src="./images/3.AVIF"
              alt="House"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              3. Bear in mind what accommodations can offer.
            </Typography>
            <Typography variant="body1" className={classes.article}>
              Are you looking for a hotel where you can rent bikes, a cosy spa
              or heated pool or an accommodation suitable for children? Compare
              each hotel in the area and find the one that completes the
              requirements you are looking for.
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
              style={{ borderRadius: "10px" }}
              src="./images/6.AVIF"
              alt="Breakfast"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              4. Meals during the trip.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Are you organizing a trip with friends or a simple weekend
              gateway? Do you really need a full accommodation? Maybe you are
              just looking for a “spiritual” retreat in which you just want to
              leave your room to eat in the hotels dining room. Think about it
              and decide what suits you best.
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
              src="./images/7.AVIF"
              alt="Public transportation"
              style={{ borderRadius: "10px" }}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              5. Always book in advance and with the refund option.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              With this option your room could cost 5%-10% more, but in the long
              run you will notice the difference. Surely you will have more
              flexibility with the dates. Also, if you end up finding something
              cheaper you have the option to cancel the previous reservation and
              book the cheapest one. Some hotels offer you the option to cancel
              your reservation on the same day of your arrival. Despite this, do
              not forget to carefully read about cancellation policies!
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
              src="./images/8.AVIF"
              alt="Public transportation"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
              className={classes.article}
              
            >
              6. Find out the cost of public transports.
            </Typography>
            <Typography variant="body1" className={classes.article} sx={{ textAlign: "justify" }}>
              Look up on the internet for forums or ask around what is the price
              for public transports. If the price is high, maybe your best
              decisions is to stay in the city centre area. If the bus/metro
              tickets are cheap then you expand your visit in more rural areas
              and reach them by public transports.
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
              src="./images/10.AVIF"
              alt="internet search"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              7. Search for promotional codes on the internet.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Many hotels offer some space on their reservation page where you
              can include a promotional code which can help you to save some
              money. Where can you find these codes? You will have to look for
              them online. Just recommended you to download the app Honey.
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
              src="./images/5.AVIF"
              alt="Rest"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              8. Cheap can sometimes be expensive
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Never trust bargains. Always carefully check what is included in
              your room price. Does it make sense to pay for a accommodation
              that does not provide WI-FI, breakfast or airport transfer? Most
              likely some of these services are key to you.
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
              src="./images/9.AVIF"
              alt="Party"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              9. Check if there are any important events in the area during your
              stay.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Concerts, or events such as St. Patrick in Dublin or the
              Oktoberfest in Munich are situations that can drastically increase
              the price of your accommodation. Recommended you to check the area
              you would like to visit if there are any events occurring so you
              can plan well your stay.
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
              src="./images/67.AVIF"
              alt="Friday Night"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              10. Forget about Friday Night
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Could be that this piece of advice is not for everyone, but it
              still believable it could be a game changer. Usually Friday nights
              are the most expensive nights of the week. People usually take
              advantage of weekends and just pull up the prices. Try to start
              your trip in the early hours of Saturday. You can always leave
              your bags at the reception desk and check in later after you
              visited the city.
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
              src="./images/68.AVIF"
              alt="Ratings and opinions"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.article}>
              11.Ratings and opinions are important.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              This is key when you are organizing your trip . Always look at
              the opinions that former guests gave to hotels. Price is not
              everything. Their opinion can be your guide to decide your perfect
              accommodation. But be careful! Do not become obsessed by them..
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section>
        <Grid container spacing={4} className={classes.section}  sx={{mt:3, mb:3}}>
        <Grid item xs={12} sm={6}>
            <img
              width="90%"
             height="auto"
               component="img"
          src="./images/69.AVIF"
              alt="News letter"
            className={classes.image}
  style={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" className={classes.article} >
 12. Sign up for newsletters.
          </Typography>
          <Typography variant="body1" className={classes.article} sx={{ textAlign: "justify" }}>
Do you want to be the first one to know about any discounts? The
            best way to stay informed with this is by subscribing to
            newsletters. If a hotel launches new promotions and offers, the
            newsletter will always inform you about them.
          </Typography>
        </Grid>
      </Grid>
      </section>
      <section>
      <Typography variant="body1" className={classes.article} sx={{ textAlign: "justify" }}>
      As for sure if you try to follow these
            <strong>
              <i> tips to find your ideal accommodation</i>
            </strong>
            , not only you will succeed, but you will also manage to save some
            money. Go ahead and organize your trip!
          </Typography>
      </section>
    </Container>
  );
};

export default TouristTips;
