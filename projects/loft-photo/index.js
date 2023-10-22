import pages from './pages';
import('./styles.css');
import profilePage from './profilePage';
import mainPage from './mainPage';
import loginPage from './loginPage';

const pageNames = ['login', 'main', 'profile'];

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();