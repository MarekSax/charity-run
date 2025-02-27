import GalleryImages from '../GalleryImages/GalleryImages';
import { useLanguageStore } from '../../Zustand/useLanguageStore';

import translations from './translations';
import scss from './Gallery.module.scss';

const Gallery: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.background}>
      <div className={scss.container}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <GalleryImages />
      </div>
    </section>
  );
};

export default Gallery;
