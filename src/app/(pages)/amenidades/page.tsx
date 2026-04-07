import Image from "next/image";
import { AppointmentSection, Button } from "../../components";
import styles from "./amenidades.module.css";
import HeroSection from "./presentation/components/hero-section";
import { amenitiesImagesData } from "@/src/core/constants/image-data/amenities-page";
import AmenitiesGallery from "./presentation/components/amenities-gallery";
import BrochureSection from "./presentation/components/brochure-section";
import CoverPageV2 from "../../components/coverpage-v2";
import { residencesImagesdata } from "@/src/core/constants/image-data/residences-page";

const amenitiesData = [
  {
    id: 1,
    title: "FAMILY POOL",
    description: "Un espacio que te permite disfrutar en familia. Cuenta con carril de nado, zona lounge y chapoteadero infantil.",
    galleryDescription: "Diseñada para el descanso y la convivencia.",
    imageData: amenitiesImagesData.familyPoolV2,
    galleryImageData: amenitiesImagesData.familyPool,
  },
  {
    id: 2,
    title: "GRILL DECK",
    description: "Área equipada con asadores y espacios de convivencia al aire libre, diseñada para reuniones y momentos compartidos en un entorno cómodo y bien integrado.",
    galleryDescription: "Espacios al aire libre que fomentan la convivencia con tus seres más queridos",
    imageData: amenitiesImagesData.grillDeck,
  },
  {
    id: 3,
    title: "LUDOTECA",
    description: "Un espacio seguro y divertido diseñado especialmente para el entretenimiento y desarrollo de los más pequeños.",
    galleryDescription: "Espacio para el juego, el aprendizaje y la creatividad de los niños.",
    imageData: amenitiesImagesData.toyLibrary,
  },
  {
    id: 4,
    title: "BUSINESS CENTER",
    description: "Sala de juntas y zonas de coworking con luz natural para promover tu productividad y creatividad.",
    galleryDescription: "Espacios para mantener tu productividad y comodidad en equilibrio",
    imageData: amenitiesImagesData.businessCenter,
  },
  {
    id: 5,
    title: "SKY POOL",
    description: "Disfruta de las mejores vistas panorámicas mientras te relajas en nuestra exclusiva alberca en las alturas.",
    galleryDescription: "Vistas panorámicas y ambiente exclusivo.",
    imageData: amenitiesImagesData.skyPool,
  },
  {
    id: 6,
    title: "SPORTS BAR",
    description: "El lugar ideal para convivir, disfrutar de tus eventos deportivos favoritos y pasar un gran rato con amigos.",
    galleryDescription: "Un espacio diseñado para fomentar la convivencia con tus seres queridos y no perderte tus partidos favoritos.",
    imageData: amenitiesImagesData.sportBar,
  },
];

export default function AmenitiesPage() {
  const mainPageAmenities = amenitiesData.filter(amenity =>
    ["FAMILY POOL", "GRILL DECK", "BUSINESS CENTER"].includes(amenity.title)
  );

  return (
    <main className={styles.main}>
      <CoverPageV2
        title={
          'Amenidades que emanan\nbienestar'
        }
        subtitle={
          'Espacios diseñados para promover un estilo de\nvida con movimiento, calma y comunidad.'
        }
        button={{
          title: 'Conoce nuestras amenidades',
          href: '/contacto'
        }}
        coverImage={{
          className: styles.coverImage,
          alt: amenitiesImagesData.grillDeckV2.alt,
          src: amenitiesImagesData.grillDeckV2.src,
          blurData: amenitiesImagesData.grillDeckV2.blurData
        }}
      />
      <HeroSection
        text="Espacios diseñados para promover un estilo de vida con movimiento, calma y comunidad."
        buttonText="Conoce nuestras amenidades"
      />

      <section className={styles.container}>
        {mainPageAmenities.map((amenity, index) => (
          <article
            key={amenity.id}
            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <div className={styles.imageWrapper} style={{ position: "relative" }}>
              <Image
                src={amenity.imageData.src}
                alt={amenity.imageData.alt}
                fill
                className={`${styles.image} ${amenity.title === "GRILL DECK" ? styles.grillDeckDrasticZoom : ""
                  }`}
                placeholder="blur"
                blurDataURL={amenity.imageData.blurData}
                sizes="(max-width: 1024px) 100vw, 928px"
              />
            </div>

            <div className={styles.textWrapper}>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>{amenity.title}</h2>
              </div>

              <div className={styles.descriptionContainer}>
                <p className={styles.description}>{amenity.description}</p>
              </div>

              <button className={styles.button}>Conoce más</button>
            </div>
          </article>
        ))}
      </section>
      <section className={styles.gallerySection}>
        <AmenitiesGallery amenitiesData={amenitiesData} />
      </section>
      <div className={styles.divisor} />
      <BrochureSection />
      <AppointmentSection
        title={'Vive la experiencia EMANA'}
        description={'Agenda un recorrido en nuestro showroom y conoce más sobre tu nuevo estilo de vida.'}
        coverImage={amenitiesImagesData.emanaExperience.src}
        blurDataURL={amenitiesImagesData.emanaExperience.blurData}
      />
    </main>
  );
}