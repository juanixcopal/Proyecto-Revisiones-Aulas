import GAListener from 'components/GAListener';
import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const Chromebooks = React.lazy(() => import('pages/ChromebooksPage'));
const ChartPage = React.lazy(() => import('pages/InventarioPage'));
const Plantas = React.lazy(() => import('pages/PlantasPage'));
const Login = React.lazy(() => import('./pages/LoginPage') )

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const App = (props) => {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <MainLayout breakpoint={props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={Plantas} />
                <Route exact path="/chromebooks" component={Chromebooks} />
                <Route exact path="/inventario" component={ChartPage} />
                <Route exact path="/login" component={Login} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
