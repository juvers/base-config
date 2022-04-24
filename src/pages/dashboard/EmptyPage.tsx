import { Card, Container, Box, Typography } from '@mui/material';
import useSettings from '@hooks/useSettings';
import Page from '@components/Page';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EmptyPage() {
  const { themeStretch } = useSettings();
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Page title="Empty">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card
          sx={{
            minHeight: '75vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'justify',
          }}
        >
          <Box sx={{ p: 9 }}>
            <Typography variant="h3">
              {t('language.path')} - {location.pathname}
            </Typography>
            <Typography variant="h4">{t('language.title')}</Typography>
            <Typography variant="body1">{t('language.introduction')}</Typography>
          </Box>
        </Card>
      </Container>
    </Page>
  );
}
