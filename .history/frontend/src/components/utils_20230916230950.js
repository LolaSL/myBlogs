import { createTheme, styled } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = () => {
  return styled({
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
  });
};

export default useStyles;


