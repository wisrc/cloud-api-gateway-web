import fetch from 'dva/fetch';
import router from 'umi/router';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
};

let authRoutes = {};

function ergodicRoutes(routes, authKey, authority) {
  routes.forEach(element => {
    if (element.path === authKey) {
      if (!element.authority) element.authority = []; // eslint-disable-line
      Object.assign(element.authority, authority || []);
    } else if (element.routes) {
      ergodicRoutes(element.routes, authKey, authority);
    }
    return element;
  });
}

export function patchRoutes(routes) {
  Object.keys(authRoutes).map(authKey =>
    ergodicRoutes(routes, authKey, authRoutes[authKey].authority)
  );
  window.g_routes = routes;
}

export function render(oldRender) {
  fetch('/server/gateway/auth/routes')
    .then(res => res.json())
    .then(
      ret => {
        authRoutes = ret;
        oldRender();
        if (ret != null && ( ret.code === 200403 || ret.code === 403)) {
            router.push('/user/login')
        }
      },
      () => {
        oldRender();
      }
    );
}
