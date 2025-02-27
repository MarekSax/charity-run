import { useState } from 'react';
import { Pagination } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { useGalleryStore } from '../../Zustand/useGalleryStore';
import { images } from '../Gallery/Images';
import scss from './GalleryImages.module.scss';

function GalleryImages() {
  const { page, pageCount, displayedImages, setPage } = useGalleryStore();
  const [lightboxOpen, setLightboxOpen] = useState(-1);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  const handleImageClick = (index: number) => {
    setLightboxOpen(index);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(-1);
  };

  return (
    <div className={scss.gallery}>
      <div className={scss.gallery__pagination}>
        <Pagination count={pageCount} onChange={handlePageChange} page={page} />
      </div>
      <ul className={scss.gallery__list}>
        {displayedImages.map(image => (
          <li key={image.index}>
            <img
              className={scss.gallery__img}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.index)}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      <Lightbox
        index={lightboxOpen}
        open={lightboxOpen >= 0}
        close={handleLightboxClose}
        slides={images.map(image => ({
          src: image.src,
          caption: image.alt,
        }))}
      />
      <div className={scss.gallery__pagination}>
        <Pagination count={pageCount} onChange={handlePageChange} page={page} />
      </div>
    </div>
  );
}

export default GalleryImages;
