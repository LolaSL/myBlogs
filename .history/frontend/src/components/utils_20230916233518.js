
import { css } from '@emotion/react';

const useStyles = () => ({
  font: css`
    font-family: "Montserrat!important";
  `,
  container: css`
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  `,
  heading: css`
    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(2)};
  `,
  section: css`
    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(2)};
  `,
  article: css`
    font-weight: lighter;
    text-align: justify;
  `,
});

export default useStyles;


