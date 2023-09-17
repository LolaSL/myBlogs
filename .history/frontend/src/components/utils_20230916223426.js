// import { styled, useTheme } from '@mui/system';

// const useStyles = () => {
//   const theme = useTheme();

//   return styled({
//     font: {
//       fontFamily: "Exo !important",
//     },
//     container: {
//       paddingTop: theme.spacing(4),
//       paddingBottom: theme.spacing(4),
//     },
//     heading: {
//       fontSize: "2rem",
//       fontWeight: "lighter",
//       textAlign: "center",
//       marginTop: theme.spacing(4),
//       marginBottom: theme.spacing(4),
//       padding: theme.spacing(2),
//     },
//     section: {
//       marginTop: theme.spacing(4),
//       marginBottom: theme.spacing(4),
//       padding: theme.spacing(2),
//     },
//     article: {
//       fontWeight: "lighter",
//       textAlign: "justify",
//     },
//   });
// };

// export default useStyles;
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "Exo !important",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
  },
  article: {
    fontWeight: "lighter",
    textAlign: "justify",
  },
}));

export default useStyles;

