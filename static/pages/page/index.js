import renderApp from 'util/renderApp';
import reducer from './reducer';
import Page from './Page';

import './style.scss';


renderApp(Page, { reducer });
