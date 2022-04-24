import { Box } from '@mui/material';
import { IconButtonAnimate } from '@components/animate';

type Props = {
  onToggleCollapse: VoidFunction;
  collapseClick: boolean;
};

export default function CollapseButton({ onToggleCollapse, collapseClick }: Props) {
  return (
    <IconButtonAnimate onClick={onToggleCollapse}>
      <Box
        sx={{
          lineHeight: 0,
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(collapseClick && {
            transform: 'rotate(180deg)',
          }),
        }}
      >
        {icon}
      </Box>
    </IconButtonAnimate>
  );
}

const icon = (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="currentColor" fillRule="nonzero">
      <path
        d="M19 13h-7.586l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.416l3-3a1 1 0 0 1 1.414 1.414L11.414 11H19a1 1 0 0 0 1-1V4H4v16h16v-5a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7a3 3 0 0 1-3 3z"
        data-name="Left Box"
      />
    </g>
  </svg>
);
