import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import Page from '@components/Page';
import { MotionContainer, varBounce } from '@components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

export default function Page404() {
  return (
    <Page title="404 Page Not Found" sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                404 | page not found!
              </Typography>
            </m.div>

            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for.
            </Typography>

            <Button sx={{ mt: 2 }} to="/" size="large" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
