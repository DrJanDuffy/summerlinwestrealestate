import React, { useState } from 'react';
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import Modal from 'react-modal';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import styles from './FeaturedHomeSlider.module.css';

export type FeaturedHomeImage = {
  src: string;
  caption: string;
  mat?: boolean;
};

interface FeaturedHomeSliderProps {
  images: FeaturedHomeImage[];
}

const FeaturedHomeSlider: React.FC<FeaturedHomeSliderProps> = ({ images }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div ref={sliderRef} className={`keen-slider ${styles.sliderContainer}`}>
        {images.map((img, idx) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={img.src}>
            <Image
              src={img.src}
              alt={img.caption}
              width={800}
              height={450}
              className={`${styles.slideImage} ${img.mat ? styles.matFrame : ''}`}
              priority={idx === 0}
            />
            <div className={styles.slideCaption}>
              {img.caption}
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setModalOpen(true)} className={styles.viewAllBtn}>
        View All Photos
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="All Featured Home Photos"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        ariaHideApp={false}
      >
        <h2 className={styles.modalTitle}>All Photos</h2>
        <div className={styles.modalGrid}>
          {images.map((img, idx) => (
            <div key={img.src} className={styles.modalGridItem}>
              <Image
                src={img.src}
                alt={img.caption}
                width={400}
                height={225}
                className={`${styles.modalGridImage} ${img.mat ? styles.matFrame : ''}`}
              />
              <div className={styles.modalGridCaption}>{img.caption}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setModalOpen(false)} className={styles.closeBtn}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default FeaturedHomeSlider; 