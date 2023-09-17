import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "../components/utils";

const FashionStyle = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} sx={{ mt: 3, mb: 3 }}>
      <Typography variant="h2" className={classes.font}>
        8 Trends from Spring 2024 Copenhagen Fashion Week to Start Wearing Now
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
              src="./images/75.AVIF"
              alt="Wear brown tone"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              1. Earthy Brown Tones
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              While Scandinavians would agree that “there is no bad weather,
              only bad outfits," designers and influencers alike didn’t expect
              severe rain to dominate Spring/Summer 2024 Copenhagen Fashion
              Week. But if there is a city known to adapt to something as
              unpredictable as the weather, is it definitely the Danish capital.
              As GANNI closed CPHFW on Thursday night, Copenhagen proved once
              again to be a true trendsetter — one that knows how to create
              versatile, refined, and sustainable looks.
              <br />
              <br />
              Copenhagen's lively streets and runways were marked with inviting
              shades of brown. From espresso leather jackets and light trench
              coats to saddle Santiags boots, the earthy shades are on the brink
              of ubiquity. Stine Goya masterfully infused this trend into her
              collection, featuring a creamy caramel belted vest paired
              elegantly with cargo pants. Lovechild 1979 showcased tailored
              jackets and wide-leg pants in softer hues, while GANNI presented a
              versatile tonal suit. With their adaptable hues, earthy brown
              tones are officially invited to blend into your closet.
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
              src="./images/76.AVIF"
              alt="Peekaboo Looks"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              2. Peekaboo Looks
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Scandinavian designers have mastered the art of see-through
              garments, and we’re happy to report that crochet dresses and
              peekaboo tops aren’t going anywhere next year. Rising designer A.
              Roege Hove orchestrated her entire collection around celebrating
              the beauty of transparency and skin through showpieces that
              included flirtatiously sheer tops and A-line knitted skirts.
              <br />
              <br />
              The Danish sisters behind Skall Studio opted for more subtle skin
              exposure, with a set of feminine, classic, creamy crochet
              garments. But here’s the thing: Their garments aren't just riding
              the trend wave; they're built to withstand the test of time,
              proving that peekaboo looks are more than a fleeting craze —
              they're a fashion statement here to stay.
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
              src="./images/77.AVIF"
              alt="Masculine Cuts"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              3. Masculine Cuts
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              At CPHFW, you couldn’t turn a corner or catch a show without
              encountering sleek, masculine silhouettes. Copenhagen was
              practically a parade of sartorial mastery with standout designers
              like Gestuz, who presented oh-so-structural and sophisticated
              coats. MKTD took the lead by channeling 1930s Korea, complete with
              elegant yet refreshingly unpretentious suits that demanded
              attention.
              <br />
              <br />
              But the trend isn't confined to the realm of bespoke tailoring.
              Skall Studio, always one for simplicity, interpreted the trend
              through oversized shorts and breezy open shirts; the perfect way
              to blend style and ease before fall comes around.
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
              src="./images/78.AVIF"
              alt="Baby Blues"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              4. Baby Blues
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              We've got the next must-have muted hue: baby blue! This is the
              discreet color of the season, sweeping across the Scandi
              landscape. Paired with flowers, whimsical shells, and cloud
              prints, baby blue practically begs to be worn in warmer months.
              <br />
              <br />
              In Copenhagen, Marimekko sent denim jumpsuits and tailored skirts
              down the runway, while Helmstedt wowed us with silky shorts that
              are basically a blue dream come true. Overall, the tone was to
              embrace the softness of the sky and the sea, just as Skall Studio
              conceptualized it through its entire collection. With flowy baby
              blue ensembles and denim sets, CPHFW proves baby blue belongs in
              your closet.
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
              src="./images/79.AVIF"
              alt="Flower Bouquets"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              5. Flower Bouquets
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Buy yourself flowers — the kind you can wear, that is. The
              Copenhagen runways blossomed with floral fever, hinting at your
              next must-have print. In the Nordics, flowers are deeply embedded
              within the fashion industry. Just peek at Marimekko, who designs
              garments around their iconic petal, featured across everything
              from throw-on dresses and twirl-worthy skirts. Then there's Rolf
              Ekroth, who took us on a nostalgic journey through "rose-tinted
              glasses" with floor-kissing dresses. And let’s not forget Stine
              Goya, who opted for her signature water-painted prints in silky
              textures.
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
              src="./images/80.AVIF"
              alt="Minimalist Monochrome"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              6. Minimalist Monochrome
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              If you're aiming for that effortlessly chic Scandinavian vibe,
              dive into monochrome dressing. First, GANNI mixed an eggshell
              crochet dress with its tonal cardigan. Then, MKTD showcased a
              charcoal blouse elegantly layered over a flowing skirt. But while
              keeping the exact same hue makes for a perfect transitional look,
              Lovechild 1979 simplified the colorblocking trend by blending
              creamy wide-leg pants with a slightly deeper, off-white knit.
              Whether you're twinning shades or dancing in contrasts, these
              looks truly embody Scandi-chic at its finest.
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
              src="./images/81.AVIF"
              alt="Statement Jewelry"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              7. Statement Jewelry
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              SS24 Copenhagen Fashion Week was marked by jaw-dropping statement
              jewelry about to take your accessorizing game to a whole new
              level. On the runway, you couldn’t miss sets of dramatic silver
              earrings at Stine Goya or chunky gold cuffs from Love Child 1979
              that practically danced with each step. Within the cobblestone of
              the city, there wasn’t an influencer not wearing pieces by Danish
              models Amalie and Cecilie Moosgaard. Whether that was the beaded
              necklace made of red carnelian stone or popular drop earrings,
              Copenhagen’s most glamorous crowd all had their hands on Lie
              Studio.
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
              src="./images/82.AVIF"
              alt="Beads & Pearls"
              className={classes.image}
              style={{ borderRadius: "10px", boxShadow: "10px 10px 20px #ccc" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.font}>
              8. Beads & Pearls
            </Typography>
            <Typography
              variant="body1"
              className={classes.article}
              sx={{ textAlign: "justify" }}
            >
              Copenhagen Fashion Week took the statement game up a notch,
              proving that pearls and beads don’t just belong on your neck. With
              a deep love for the natural and refined gems of nature, many
              designers accentuated their collection with delicate dazzle. They
              were spotted on silky, spaghetti-strapped dresses at Stine Goya,
              beaded into sheer tube tops on the A. Roege Hove runway, and
              embroidered onto head wraps and draped shirts at MKTD. From the
              runway, it was clear that beads and pearls were meant to embellish
              garments. MKTD described the addition as water droplets trickling
              on the fabric, an ode to the drizzly summer rain of Copenhagen
              we’re just about ready to wear all season.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default FashionStyle;
