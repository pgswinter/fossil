import Loadable from 'react-loadable';

import LoadableLoading from './components/LoadableLoading';

export const OrderPageLoader = Loadable({
    loader: () => import(/* webpackChunkName: "order_page" */'./components/Pages/OrderPage'),
    loading: LoadableLoading,
    delay: 50
});

export const HomePageLoader = Loadable({
    loader: () => import(/* webpackChunkName: "home_page" */'./components/Pages/HomePage'),
    loading: LoadableLoading,
    delay: 50
});