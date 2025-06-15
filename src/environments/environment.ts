export const environment = {
  production: false,
  configuration: {
    domain: {
      id: '544d354b-05a9-4189-bfe8-0ae2207967af'
    }
  },
  services: {
    hubPortalApi: {
      host: 'http://localhost:9080/multimedia-manager/api/v1',
      endpoints: {
        domain: {
          findDomainById: '/domain?id=',
          findAll: '/domain/findAll',
        },
        menuDomain: {
          findMenusByDomainId: '/menusite/findByDomainId?id=',
          findAll: '/menusite/findAll',
        },
        menu: {
          findAllMenus: '/menu/findAll',
          findAllMenusWithChild: '/menu/findAll/child',
          findById: '/menu?id=',

        }

      }
    }
  }
};
