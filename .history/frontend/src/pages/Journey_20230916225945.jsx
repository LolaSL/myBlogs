import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";
import video from "../components/videos/video.webm";
import { Link } from "react-router-dom";

const Journey = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h3" className={classes.font}>
        Journey Of All Experiences
      </Typography>
      <section>
        <Grid
          container
          spacing={4}
          className={classes.section}
          sx={{ mt: 3, mb: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <figure style={{ position: "relative", borderRadius: "10px" }}>
              <div className="embed-responsive embed-responsive-21by9">
                <video
                  style={{
                    borderRadius: "10px",
                    boxShadow: "10px 10px 20px #ccc",
                  }}
                  className={classes.video}
                  width="90%"
                  height="auto"
                  title="Waterfall"
                  allowFullScreen
                  autoPlay
                  muted
                  loop
                  id="video"
                >
                  <source src={video} type="video/webm" />
                </video>
              </div>
            </figure>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Embark on a magical journey as you reconnect with loved ones in
              the most storied destinations this holiday season. Find
              inspiration for your next adventure. Let your imagination run
              wild. Sprinkle a dash of novelty on your festivities and embrace
              the opportunity to celebrate more than just the holiday season
              this year. Pay visit to Israel!   <Link
                  to="/slide"
                  style={{
                    color: "teal",
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  {" "}
                  Complete guide for visiting Israel
                </Link>
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
              src="./images/17.AVIF"
              alt="Tourist tips"
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Are you thinking about taking some time off and organizing a
              lovely trip somewhere you have never been before? If so you will
              see that there will be many things that you have to take in
              consideration when doing so. Surely what you want is to organize
              the perfect trip: somewhere amazing and for a good price. The
              secret is to be strategic and think about each and every detail
              carefully.
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
              src="./images/66.AVIF"
              alt="Tourist tips"
              className={classes.image}
              style={{ borderRadius: "10px" }}
            />{" "}
      
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              {" "}
              Are you thinking about taking some time off and organizing a
              lovely trip somewhere you have never been before? When it comes to
              traveling, whether for pleasure or business, finding the right
              motel, with the right amenities, and in the right location may be
              a difficult task even for the most seasoned travelers. Just find a
              few general suggestions to keep in mind when booking a motel.     <Link
              to="/hotel-tips"
              style={{
                color: "teal",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Get tips in hotel search
            </Link>
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Journey;
