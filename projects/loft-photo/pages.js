const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};

let currrentPage = null;

export default {
  openPage(name) {
    const selector = pagesMap[name];
    const element = document.querySelector(selector);

    currrentPage?.classList.add('hidden');
    currrentPage = element;
    currrentPage.classList.remove('hidden');
  },
};