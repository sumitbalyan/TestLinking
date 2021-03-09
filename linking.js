const config = {
  screens: {
    Home: {
      path: 'home/:id',
      parse: {
        id: (id) => `${id}`,
      },
    },
    Details: {
      //path: 'details',
      path: 'details/:id',
      parse: {
        id: (id) => `${id}`,
      },
    },
    Common: {
      path: 'details/common',
      //path: 'profile/:id',
      // parse: {
      //   id: (id) => `${id}`,
      // },
    },
    Notifications: 'notifications',
    Settings: 'settings',
  },
};

const linking = {
  prefixes: ['https://my-test-d8440.web.app/'],
  config,
};
//https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://github.com/sumitbalyan/Linking&relation=delegate_permission/common.handle_all_urls
export default linking;