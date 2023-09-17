import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Airport = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        Ben Gurion Airport
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
              src="./images/46.AVIF"
              alt="Ben Gurion Airport"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              1. Ben Gurion International Airport. Introduction
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Visitors traveling to Jerusalem, Tel Aviv, or any of Israels other
              popular locales will fly into the country busiest and biggest
              airport, Ben Gurion Airport, named after the first Prime Minister.
              (Ramon Airport, the second largest in southern Israel, serves
              civilian traffic and operates as a diversion airport.) Also known
              as Tel Aviv Airport or Natbag, Ben Gurion Airport is located in
              the city of Lod, 28 miles northwest of Jerusalem and 12 miles
              southeast of Tel Aviv. A hub for El Al Israel Airlines, Israir
              Airlines, Arkia, and Sun D"Or, this airport is counted in the top
              five best airports in the Middle East due to security and
              passenger experience (you will notice armed Israel Police
              officers, Israel Defense Forces, and Israel Border Police as you
              make your way through the airport). Terminals 1 and 3 are the main
              gateways for passengers flying in and out of Israel, though the
              latter is mostly for domestic travel. Keep reading to learn more
              about the airport's amenities, public transportation to and from
              the airport, and other must-know tidbits.{" "}
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
              src="./images/47.AVIF"
              alt="Airport contact information"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              2. Code, Location, and Contact Information.
            </Typography>
            <Typography> Ben Guiron Airport Code: TLV</Typography>
            <Typography> Location: 7015001, Israel</Typography>
            <Typography> Phone number: +972 03-9723333</Typography>
            <List>
              <ListItem component={Link} to="http://www.iaa.gov.il/en">
                <ListItemText primary=" Website" />
              </ListItem>
              <ListItem
                component={Link}
                to="https://www.iaa.gov.il/en/airports/ben-gurion/flight-board/"
              >
                <ListItemText primary="Flight tracker" />
              </ListItem>
            </List>

            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The four levels of the airport are: Level 3 for departing
              passengers, level 2 for public transportation, level G for
              arriving passengers, and level S for the train station.{" "}
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
              src="./images/48.AVIF"
              alt="Before flight"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              3. Before flight
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Built in the 1930s by the British Mandate, this airport saw major
              changes in the 1970s when Israel Airport Authorities (IAA) took
              control. By the 1990s, airport traffic was so busy that in 2004,
              Terminal 3 was created to accommodate the more than 25 million
              international passengers. Meanwhile, Terminal 2 served domestic
              flights until 2007 before it was removed entirely. Terminal 1, the
              old terminal, serves domestic flights and low-cost European
              international flights. Terminals 1 and 3 are connected through a
              complimentary shuttle bus. It is important to note that the
              security at Ben Gurion Airport may take longer than what you have
              experienced at other international airports due to ongoing
              tensions that Israel has had to face over the decades. It is
              advised to arrive at the airport a minimum of three hours prior to
              international travel to be safe, especially during Jewish holidays
              or peak times. You can expect to go through multiple check points,
              be asked security questions, and have your luggage examined. When
              passing through passport security, please note that you will be
              given a stamp on a small piece of paper in lieu of a passport book
              stamp. You will need to keep this piece of stamped paper safe and
              secure for the duration of your time in Israel. To avoid long wait
              times at security, passport control, and luggage screenings, you
              can book the VIP Departure Assistance or VIP Arrival Assistance
              services, which will expedite the process and include an airport
              steward to walk you through the airport security.
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
              src="./images/49.AVIF"
              alt="Ben Gurion Airport Parking"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              4. Ben Gurion Airport Parking
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Short and long-term parking are both available at the airport, and
              can be purchased with a credit card or Israeli currency. For
              passengers flying through <strong>Terminal 1</strong>, you can
              park directly in front of the terminal, while those flying through{" "}
              <strong>Terminal 3</strong> can find parking in the Vineyard and
              Orchard lots.
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
              src="./images/50.AVIF"
              alt="Renting the car"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              5. Renting the car
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Navigation systems can direct you to the airport and its parking
              lots if you are in a private vehicle. Likely, you will be
              traveling throughout Israel on a private tour that will include
              transportation to and from the airport. At the airport, you will
              also have access to car rental agencies: Avis, Budge, Dollar,
              Eldan, Hertz, and Sixt.
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
              src="./images/51.AVIF"
              alt="Depature"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              6. Public Transportation and Taxi
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Metropoline and Egged are the bus services that accommodate
              passengers for arrival and departures at the airport. For Egged,
              select the Ben Gurion Airport as your destination, choose your
              preferred timing, and the website will let you know which line to
              take as well as where it is located. Israel Railways, with
              multiple lines and stations, is a popular option for getting from
              the airport to destinations in Israel. Located on level S at the
              airport, the train is easily accessible and simple to find.
              Situated at Terminal 3, licensed taxis can take you anywhere you
              want to go. At the exit, from gate 24, taxi stands are available
              on the ground floor. A complimentary shuttle service is also
              available for transportation between Terminals 1 and 3.
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
              src="./images/52.AVIF"
              alt="La Farina Cafe"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              7. Where to Eat and Drink
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Terminal 3 is where most of the restaurants and cafés are located,
              all of which are kosher. Tables and seating are available in the
              center of the circular building, with shops and dining linked
              around the outside. For Italian food and drinks, visit Ilans,
              where vegetarians and vegans will find plenty of options. La
              Farina offers pastas, pizzas, sandwiches, and baked goods as well
              as coffee, teas, and cold take-away drinks. For German-style
              noshes and beverages, including meat, visit Bayern Market. A
              McDonalds, as well as other fast-food options, are part of the
              Food Court. Café Café, located in Terminal 1, is where to go for a
              quick bite to eat. Here, you will find pastries, coffee,
              sandwiches, and complimentary WiFi.
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
              src="./images/53.AVIF"
              alt="James Richardson Duty Free"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              9. Where to Shop
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Terminal 3, in the Departures hall, is home to many souvenir shops
              and boutiques: James Richardson Duty Free, Sweets Market, Duty
              Free Sport, Toys Sakal, Steimatzky Souvenirs, Chocolate and More,
              and Emporium. Popular items to purchase are Dead Sea salts and
              bath products as well as religious trinkets, jewelry, artworks,
              and books. Hummus, dates, and olive oil are prevalent food
              products purchased as mementos, too. Credit cards and Israeli cash
              are accepted. Keep in mind that when Israel is observing high
              holidays, the airport will be more crowded. You can expect lines
              in the shops and at the restaurants during these observed dates.
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
              src="./images/54.AVIF"
              alt="Airport VIP Lounge"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              9. Airport Lounges
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Terminal 3, inside security, has four lounges. Dan Lounge, which
              serves all airlines and alliances (apart from El Al), has
              locations in each concourse. Meanwhile, King David Lounge serves
              El Al passengers and frequent flyers. Day passes and annual
              memberships are available.
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
              src="./images/55.AVIF"
              alt="WiFi Charging Station"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              10. WiFi and Charging Stations
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Free WiFi is available everywhere, and all of the concourses have
              charging stations. Keep in mind that electric outlets are 220
              volts, 50Hz; and two-pronged European-style round or three-pronged
              plugs are used.
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
              src="./images/56.AVIF"
              alt="Ben Gurion Airport service"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              11. Ben Gurion Airport Tips & Facts
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              There are two synagogues in Terminal 3: one in the Greeter hall
              and one in the Duty Free hall. They operate 24 hours per day.{" "}
              <br />
              <br />
              A Muslim and Christian prayer room is located in the Departure
              hall in concourse E.
              <br />
              <br />
              Luggage may be stored in one of the three stands on the G floor in
              both Vineyard and Orchard parking lots as well as in the
              Departures hall in concourse B.
              <br />
              <br /> Nursing booths with chairs, diaper changing areas, a hot
              and cold water bar, a microwave, and a crib are available for
              families. For older kids, play areas are accessible in concourses
              B, C, and D in the Departure hall.
              <br />
              <br /> Paid porter service is available.
              <br />
              <br /> Senior citizens, aged 80 and up, may move to the front of
              the line for both security and flight check-ins. Follow the signs
              to navigate.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Airport;
