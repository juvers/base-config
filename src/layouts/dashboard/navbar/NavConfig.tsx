import { PATH_DASHBOARD } from '@routes/paths';
import SvgIconStyle from '@components/SvgIconStyle';

export const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  accounts: getIcon('ic_accounts'),
  admin: getIcon('ic_admin'),
  admin2: getIcon('ic_admin2'),
  user: getIcon('ic_user'),
  dash1: getIcon('ic_dash1'),
  dash2: getIcon('ic_dash2'),
  dash3: getIcon('ic_dash3'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  {
    subheader: 'Config',
    items: [
      { title: 'Accounts', path: PATH_DASHBOARD.config.accounts, icon: ICONS.accounts },
      { title: 'Admin', path: PATH_DASHBOARD.config.admin, icon: ICONS.admin2 },
    ],
  },
  {
    subheader: 'Admin',
    items: [
      {
        title: 'Content 1',
        path: PATH_DASHBOARD.adminApp.content1,
        icon: ICONS.admin,
        children: [
          { title: 'sub content I', path: PATH_DASHBOARD.adminApp.content1 },
          { title: 'sub content II', path: PATH_DASHBOARD.adminApp.content2 },
        ],
      },
      {
        title: 'Content 2',
        path: PATH_DASHBOARD.adminApp.contentA,
        icon: ICONS.dash2,
        children: [
          { title: 'sub content A', path: PATH_DASHBOARD.adminApp.contentA },
          { title: 'sub content B', path: PATH_DASHBOARD.adminApp.contentB },
        ],
      },
    ],
  },
  {
    subheader: 'Main App',
    items: [
      {
        title: 'Main App I',
        path: PATH_DASHBOARD.mainApp.content1,
        icon: ICONS.dash1,
      },
      { title: 'Main App II', path: PATH_DASHBOARD.mainApp.content2, icon: ICONS.dash3 },
    ],
  },
];

export default navConfig;
