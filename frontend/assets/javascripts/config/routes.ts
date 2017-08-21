import DashboardComponent from '../components/DashboardComponent'
import * as Issues from '../containers/Issues';
import NewUserContainer from '../containers/Users/NewUserContainer'
import UserContainer from '../containers/Users/UserContainer'
import UsersContainer from '../containers/Users/UsersContainer'

export interface RouteMap {
  path: string;
  component: any;
  routes: RouteMap[];
}

const routes: RouteMap[] = [
  {
    path: '/users', component: UsersContainer, routes: [
      { path: '/users/new', component: NewUserContainer, routes: []},
      { path: '/users/:id', component: UserContainer, routes: []},
    ],
  }, {
    path: '/issues', component: Issues.Container, routes: [],
  }, {
    path: '/', component: DashboardComponent, routes: [],
  },
]

export default routes;
