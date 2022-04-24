function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  config: {
    accounts: path(ROOTS_DASHBOARD, '/accounts'),
    admin: path(ROOTS_DASHBOARD, '/admin'),
  },
  admin: {
    content1: path(ROOTS_DASHBOARD, '/content1'),
    content2: path(ROOTS_DASHBOARD, '/content2'),
  },

  adminApp: {
    content1: path(ROOTS_DASHBOARD, '/adminapp/content1'),
    content2: path(ROOTS_DASHBOARD, '/adminapp/content2'),
    contentA: path(ROOTS_DASHBOARD, '/adminapp/contentA'),
    contentB: path(ROOTS_DASHBOARD, '/adminapp/contentB'),
  },

  mainApp: {
    content1: path(ROOTS_DASHBOARD, '/mainapp/content1'),
    content2: path(ROOTS_DASHBOARD, '/mainapp/content2'),
  },

  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
};
