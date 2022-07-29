import homePage from './pages/home-page';
import spacePage from './pages/space-page';
import designPage from './pages/design-page';
import galleryPage from './pages/gallery-page';
import coventPage from './pages/covent-page';
import infoPage from './pages/info-page';
import technicalPage from './pages/technical-page';
import privacyPage from './pages/privacy-page';
import errorPage from './pages/error-page';
import connectionPage from './pages/connection-page';

export default function() {
  const pageName = document.body.getAttribute('data-page-name');
  if (!pageName) return;

  const pageList = {
    homePage,
    spacePage,
    designPage,
    galleryPage,
    coventPage,
    infoPage,
    technicalPage,
    privacyPage,
    errorPage,
    connectionPage,
  };

  if (pageName && pageList[pageName]) pageList[pageName]();
}
