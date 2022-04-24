import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography } from '@mui/material';
import NoLayout from '@layouts/NoLayout';
import { PATH_AUTH } from '@routes/paths';
import Page from '@components/Page';
import Iconify from '@components/Iconify';
import { VerifyCodeForm } from '@sections/auth/verify-code';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0),
}));

export default function VerifyCode() {
  return (
    <Page title="Verify" sx={{ height: 1 }}>
      <RootStyle>
        <NoLayout />

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            <Button
              size="small"
              component={RouterLink}
              to={PATH_AUTH.login}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />}
              sx={{ mb: 3 }}
            >
              Back
            </Button>

            <Typography variant="h3" paragraph>
              Please check your email!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              A 7-digit confirmation code hae been sent to number ending in 8046.
            </Typography>

            <Box sx={{ mt: 5, mb: 3 }}>
              <VerifyCodeForm />
            </Box>

            <Typography variant="body2" align="center">
              Don’t have a code? &nbsp;
              <Link variant="subtitle2" underline="none" onClick={() => {}}>
                Resend code
              </Link>
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
