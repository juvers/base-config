import { Stack, Typography, Box } from '@mui/material';
import useSettings from '@hooks/useSettings';
export default function NavbarDocs() {
  const { themeMode } = useSettings();

  const getYear = new Date().getFullYear();

  return (
    <Stack
      spacing={3}
      sx={{ px: 5, pb: 5, mt: 10, width: 1, textAlign: 'center', display: 'block' }}
    >
      <Box>
        <img
          src={themeMode === 'light' ? '/logo/ss_logo_inverted.png' : '/logo/ss_logo.png'}
          alt="public logo"
        />
        <Typography gutterBottom variant="subtitle2">
          © {getYear} ShotSpotter Inc. <br />
          All rights reserved.
        </Typography>
      </Box>
    </Stack>
  );
}
