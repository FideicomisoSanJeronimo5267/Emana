"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import styles from "./amenities-gallery.module.css";

interface AmenityImageData {
  src: string;
  alt: string;
  blurData: string;
}

interface AmenityData {
  id: number;
  title: string;
  description: string;
  galleryDescription?: string;
  imageData: AmenityImageData;
  galleryImageData?: AmenityImageData;
}

interface AmenitiesGalleryProps {
  amenitiesData: AmenityData[];
}

export default function AmenitiesGallery({
  amenitiesData,
}: AmenitiesGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={styles.galleryContainer}>
      <Swiper
        loop={true}
        effect="fade"
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, FreeMode, EffectFade]}
        className={styles.mainSwiper}
      >
        {amenitiesData.map((amenity) => {
          const currentImage = amenity.galleryImageData || amenity.imageData;
          const currentDescription = amenity.galleryDescription || amenity.description;

          return (
            <SwiperSlide key={`main-${amenity.id}`}>
              <div className={styles.mainImageWrapper}>
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL={currentImage.blurData}
                  sizes="(max-width: 1024px) 100vw, 928px"
                />
              </div>

              <div className={styles.mainTextOverlay}>
                <h2 className={styles.title}>{amenity.title}</h2>
                <p className={styles.description}>{currentDescription}</p>

                <div className={styles.customNavContainer}>
                  <div className={`custom-prev ${styles.customNavButton}`}>
                    <img
                      src="/assets/images/amenities-page/left-arrow.svg"
                      alt="Anterior"
                      className={styles.arrowIcon}
                    />
                  </div>
                  <div className={`custom-next ${styles.customNavButton}`}>
                    <img
                      src="/assets/images/amenities-page/right-arrow.svg"
                      alt="Siguiente"
                      className={styles.arrowIcon}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={22}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs, FreeMode]}
        className={styles.thumbsSwiper}
      >
        {amenitiesData.map((amenity) => {
          const currentImage = amenity.galleryImageData || amenity.imageData;

          return (
            <SwiperSlide key={`thumb-${amenity.id}`}>
              <div
                className={styles.thumbImageWrapper}
                style={{ position: "relative" }}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL={currentImage.blurData}
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <p
                className={styles.thumbTitle}
                style={{ textTransform: "capitalize" }}
              >
                {amenity.title.toLowerCase()}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}