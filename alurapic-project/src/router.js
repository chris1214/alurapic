/**
 * Created by christopher on 11/05/18.
 */
import home from './components/app/home'
import create from './components/app/create'

export const routes = [
  {
    path: '/',
    component: home,
    title: 'Home'
  },
  {
    path: '/create',
    component: create,
    title: 'Create'
  }
];
