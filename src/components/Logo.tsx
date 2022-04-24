import { Link as RouterLink } from 'react-router-dom';
import { Box, BoxProps } from '@mui/material';
import useSettings from '@hooks/useSettings';
import { styled } from '@mui/material/styles';
import { applyStyleModifiers as provider } from 'styled-components-modifiers';
import useResponsive from '@hooks/useResponsive';
interface Props extends BoxProps {
  disabledLink?: boolean;
}

const MODIFIERS = {
  hideLogo: () => `
    display: none;
  `,
};

const Img = styled('img')<{ modifiers?: string[] | string | boolean[] | boolean }>`
  display: inline;
  max-height: 48px;
  ${provider(MODIFIERS) as unknown as typeof MODIFIERS}
`;

export default function Logo({ disabledLink = false, sx }: Props) {
  const isDesktop = useResponsive('up', 'sm');
  const { themeMode, themeLayout } = useSettings();

  const logo = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Img src="/logo/ss_logo_only.png" alt="logo only" />
      <Img
        modifiers={[(!isDesktop || themeLayout !== 'vertical') && 'hideLogo'] as boolean[]}
        src={
          themeMode === 'dark'
            ? '/logo/ss_logo_split_white.png'
            : '/logo/ss_logo_inverted_split.png'
        }
        alt="logo"
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
