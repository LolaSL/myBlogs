import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const CompliteGuide = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography
        variant="h2"
        className={classes.article}
        sx={{ textAlign: "justify" }}
      >
        Complete guide for visiting Israel
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
              src="./images/20.AVIF"
              alt="Yaffa"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              1. Tel Aviv and Jaffa Port
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Dining, shopping, and nightlife opportunities abound in the
              coastal beach city of Tel Aviv, which in many ways can feel like
              the American city of Miami. You will see vibrant graffiti art,
              modern architecture as well as the largest collection of Bauhaus
              buildings in the world, and plenty of boutiques selling everything
              from textiles to home goods to clothing to furniture. Walk along
              the beach promenade or take a tour of the area via bicycle or
              Segway. Be sure to visit Carmel Market to sample different types
              of Israeli foods and drinks, influenced by a multitude of
              cultures. Explore the winding and narrow streets of Jaffa Old
              City, also known as Yafo, and its port. The contrast of the oldest
              port in the world, home to multiethnic communities, next to the
              modern city of Tel Aviv is stark. See the Jaffa Clock Tower, Saint
              Nicholas Monastery, the Great Mahmoudiya Mosque, the Old Jaffa
              Museum of Antiquities, and several gardens, squares, and
              courtyards.
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
              src="./images/21.AVIF"
              alt="Jerusalem"
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              2. Jerusalem Old City
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The walled and historic Old City of Jerusalem has been at the
              epicenter for religious faith, sacred to millions of people for
              thousands of years. Tourists, entering through one of seven
              entrances (the New Gate, Damascus Gate, Herods Gate, Lions Gate,
              Dung Gate, Zion Gate, and Jaffa Gate), explore the four uneven
              quarters—Muslim, Jewish, Christian, Armenian—within the stone
              walls. Visit religious sites, look for goods throughout the many
              stalls in the quarters, and dine out in any of the various
              eateries. The top must-see sites to experience here are the
              Western Wall, the Church of the Holy Sepulcher, and Temple Mount.
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
              src="./images/22.AVIF"
              alt="Mount of Olives"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              3. Mount of Olives.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Located in east Jerusalem, near the Old City, Mount of Olives is a
              worthwhile place to visit to gain perspective of the land—you can
              see far and wide over the Kidron Valley to Jerusalem and Temple
              Mount when standing on this mountain. Olive groves once covered
              this Jewish burial ground, which has been the resting place for
              notable Jewish biblical figures for thousands of years. Dome of
              the Ascension, where Jesus is said to have made his last footprint
              on Earth, is located in these hills as is the Garden of
              Gethsemane, where Jesus prayed before crucifixion.
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
              src="./images/23.AVIF"
              alt="The Western Wall"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              4.The Western Wall
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Also called the Wailing Wall or Kotel, Jerusalem Western Wall is a
              moving sight for people of any faith but particularly those of the
              Jewish religion. Millions of pilgrims make their way here each
              year to pray, read scripture, and write prayers and wishes on
              pieces of paper that then get wedged into the cracks of the
              limestone wall, the only remainder of the wall surrounding the
              Temple Mount and the site of the First and Second Temples of
              Jerusalem, which were destroyed first by the Babylonians and then
              by the Romans. The wall is divided for men and women in Prayer
              Plaza, and conservative dress is required to visit the free site.
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
              src="./images/24.AVIF"
              alt="The Church of the Holy Sepulchre"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              5. The Church of the Holy Sepulchre
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              You will see people in awe, crying, praying, and placing purchased
              objects on the Stone of Anointing, where Jesus body was prepared
              for burial, inside the Holy Sepulchre, a church built on the site
              of Jesus crucifixion, burial, and resurrection. Located in the
              Christian quarter of the Old City, you will see two chapels—one
              Greek Orthodox and one Catholic—and the Aedicule, a smaller chapel
              housing the Holy Sepulchre. Be prepared for long lines as tourists
              make their way through the sections.
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
              src="./images/25.AVIF"
              alt="Temple Mount and the Dome of the Rock"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              6. Temple Mount and the Dome of the Rock
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The grounds of the Dome of the Rock and Al Aqsa Mosque—known as Al
              Haram Ash Sharif (The Noble Sanctuary) to Muslims and Har Ha Bayit
              (Temple Mount) to Jews—is one of the holiest sites for Jews and
              Muslims. According to the Muslim faith, the Prophet Muhammad made
              the ascent to heaven at Temple Mount, where the Dome of the Rock
              sits, and Jews believe this is the site where Abraham prepared to
              sacrifice his son. Visitors are allowed to view the area, however;
              only Muslims are allowed to go inside the temple. Modest dress is
              required.
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
              src="./images/26.AVIF"
              alt="Mahne Yehuda Market"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              7. Mahne Yehuda Market.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Do not be shy when you wander through this market full of
              delicious bites. Try the various types of halva, breads, nuts,
              dates, olives, hummus, pastas, and freshly squeezed juices. Take
              photographs of the tables with mounds of multi-hued spices. Watch
              locals haggle over prices on cuts of meat and fish. Take your
              time, sit at an outdoor café, and enjoy the great people-watching.
              This market is where everyone comes together to shop, eat, and
              relish each other company.
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
              src="./images/27.AVIF"
              alt="Tower of David Museum"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              8. Tower of David Museum
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Near the Jaffa Gate entrance to Jerusalem Old City, lies the Tower
              of David, where inside the citadel a museum sits. The museum hosts
              changing exhibits, cultural events and the well-loved nighttime
              showing of The Night Spectacular Sound and Light Show, which tells
              the story of Jerusalem history through the use of a laser
              projection system on the tower walls.
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
              src="./images/28.AVIF"
              alt="Via Dolorosa"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              9. Via Dolorosa.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The Via Dolorosa follows the path Jesus walked through the streets
              of Jerusalem, from the place of his trial to the place of his
              crucifixion. Jesus was brought before Pontius Pilate to be judged
              and condemned near where the Old City’s Lion Gate stands today.
              After being judged Jesus carried the heavy cross through the
              crowded streets to where he would be crucified. Crucifixions were
              made outside of the city walls whereas today Golgotha, the site of
              Jesus crucifixion lies within the Old City and within the Church
              of the Holy Sepulchre.
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
              src="./images/29.AVIF"
              alt="The Israel Museum"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              10. The Israel Museum.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              To learn about Israel art and archaeology, visit the Israel
              Museum. You will see the Shrine of the Book, which is where the
              Dead Sea Scrolls are located. Wander through the Archaeology and
              Fine Arts wings and explore the European, Modern, and Israeli art
              collections. Outside, walk around the large replica of the Second
              Temple Period.
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
              src="./images/30.AVIF"
              alt="Caesarea"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              11. Caesarea.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              An ancient port city on Israel Mediterranean coast, built by Herod
              the Great, Caesarea is an archeological park which includes a
              large Roman amphitheater and remnants of a hippodrome where
              prisoners once fought wild animals, and horse-pulled chariots
              raced around a track. You will see ancient mosaics, created in
              intricate patterns, as well as a Roman aqueduct and palace
              remains.
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
              src="./images/31.AVIF"
              alt="Negev Desert"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              12. Negev Desert
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              The vast Negev desert, which encompasses more than half of Israel
              land area, is home to the Makhtesh Ramon, a large erosion crater.
              Bedouins make their home throughout the desert, and some tours
              will allow you to meet a family in person. Jeep, camel, and hiking
              tours are popular in this area as is rappelling off of the edge
              into the Ramon crater.
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
              src="./images/32.AVIF"
              alt="Dead Sea"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              13. Dead Sea.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Ten times saltier than the ocean and the lowest point on land, the
              Dead Sea is a well-visited destination in Israel and Jordan.
              People come for a spa vacation, to treat skin conditions like
              eczema and psoriasis, and to float on top of the water in an
              otherworldly landscape. Cover yourself in mineral-rich mud and
              soak in the water—just be sure that you do not get the water in
              your eyes or in a cut, because it will sting.
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
              src="./images/33.AVIF"
              alt="Massada"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              14. Masada.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Masada National Park, located about an hour south of Jerusalem on
              the edge of the Dead Sea, is one of the most visited destinations
              in Israel. King Herod the Great built this ancient fortress on a
              plateau, which was later occupied by Jewish rebels who were
              fighting against the Roman Empire. After seven years, the Jewish
              people committed mass suicide rather than fall into the hands of
              the Romans, which today is seen as a strong example of resolve.
              Hike up the path to the top or opt for the cable car and give
              yourself a couple of hours to roam the grounds.
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
              src="./images/34.AVIF"
              alt="Tiberias"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              15. Tiberias.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Tiberias is an Israeli city on the western shore of the Sea of
              Galilee. Its Old City holds important Jewish and Christian
              pilgrimage sites including the Tomb of Maimonides, Capernaum and
              Abulafia (Etz Chaim) Synagogue. The waterfront features the
              restaurant-lined Yigal Allon Promenade, a marina and a fish
              market. South of the city, Hamat Tiberias National Park is home to
              famed mineral hot springs dating to antiquity.
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
              src="./images/35.AVIF"
              alt="Herzliya Marina"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              16. Herzliya Marina.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              On the surface, Herzliya is all manicured beaches, taken captive
              year-round by well-heeled locals who have tasted the good life.
              Adorned with luxury shopping malls, the Herzliya Marina the port
              city boasts a prime sailing and maritime community from its lively
              marina, which houses over 800 yachts and boats, hotels, it is also
              home to historic, ancient ruins and a stellar contemporary art
              museum.
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
              src="./images/38.AVIF"
              alt="Eilat"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.article}>
              17. Eilat.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Eilat is a southern Israeli port and resort town on the Red Sea,
              near Jordan. Its beaches are noted for their calm waters, like
              Dolphin Reef, where the aquatic mammals are often spotted. Known
              for snorkeling and diving, Coral Beach Nature Reserve has
              buoy-marked underwater trails among fish-filled reefs. Nearby
              Coral World Underwater Observatory Marine Park has a
              glass-enclosed observation center submerged offshore.
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
              src="./images/71.AVIF"
              alt="Bahai Gardens"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              18. The Bahai Gardens.
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              These Gardens, located in the heart of Haifa, comprise a staircase
              of nineteen terraces extending all the way up the northern slope
              of Mount Carmel. The golden-domed Shrine of the Báb, the resting
              place of the Prophet-Herald of the Bahá’í Faith, stands on the
              central terrace, looking across the bay towards ‘Akko. While
              different parts of the Gardens offer a variety of experiences,
              they speak in a common language of graveled paths, hedges and
              flowerbeds groomed and nurtured by dedicated gardeners. The
              Gardens frame panoramic views of the city, the Galilee Hills and
              the Mediterranean Sea.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default CompliteGuide;
