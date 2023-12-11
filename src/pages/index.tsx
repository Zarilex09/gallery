import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import PhotoAlbum from 'react-photo-album';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import NextJsImage from '../components/nextJsImage';

const photos = [
  {
    src: '/assets/images/First_Date.JPG',
    alt: 'First Date Dec 3 2021',
    title: 'First Date Dec 3 2021',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Painting_Date.JPG',
    alt: 'Painting Date Dec 23 2021',
    title: 'Painting Date Dec 23 2021',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Christmas_Wonderland.JPG',
    alt: 'Christmas Wonderland Dec 29 2021',
    title: 'Christmas Wonderland Dec 29 2021',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Chico_Loco.JPG',
    alt: 'Chico Loco Feb 15 2022',
    title: 'Chico Loco Feb 15 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/River_Safari.JPG',
    alt: 'River Safari May 16 2022',
    title: 'River Safari May 16 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/museum_date.jpeg',
    alt: 'Museum Date June 4 2022 ',
    title: 'Museum Date June 4 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },

  {
    src: '/assets/images/flower_dome.jpeg',
    alt: 'Flower Dome June 11 2022',
    title: 'Flower Dome June 11 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Stella.jpeg',
    alt: 'Stella Jul 31 2022',
    title: 'Stella Jul 31 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/National_Museum.jpeg',
    alt: 'National Musuem Aug 20 2022',
    title: 'National Musuem Aug 20 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/National_Museum2.jpeg',
    alt: 'National Musuem Aug 20 2022',
    title: 'National Musuem Aug 20 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Luna.JPG',
    alt: 'Luna Sep 17 2022',
    title: 'Luna Sep 17 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Photobooth.JPG',
    alt: 'Photobooth Sep 25 2022',
    title: 'Photobooth Sep 25 2022',
    width: 1080,
    height: 1500,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/JB_trip3.JPG',
    alt: 'JB Trip Oct 22 2022',
    title: 'JB Trip Oct 22 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Lavo.jpeg',
    alt: 'Lavo Aug 2 2022',
    title: 'Lavo Aug 2 2022',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/Korea_STM.JPG',
    alt: 'Korea STM Dec 1 2022',
    title: 'Korea STM Dec 1 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/JB_trip.jpeg',
    alt: 'JB Trip Dec 27 2022',
    title: 'JB Trip Dec 27 2022',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Vday_dinner.jpeg',
    alt: 'Les Bouchons Feb 14 2023',
    title: 'Les Bouchons Feb 14 2023',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/La_Taperia.JPG',
    alt: 'La Taperia Sep 19 2022',
    title: 'La Taperia Sep 19 2022',
    width: 3200,
    height: 2600,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/Taiwan_trip.JPEG',
    alt: 'Taiwan Trip Apr 24 2023',
    title: 'Taiwan Trip Apr 24 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Taiwan_trip2.JPEG',
    alt: 'Taiwan Trip Apr 24 2023 ',
    title: 'Taiwan Trip Apr 24 2023',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Taiwan_trip3.JPEG',
    alt: 'Taiwan Trip Apr 27 2023',
    title: 'Taiwan Trip Apr 27 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/JB_trip2.JPEG',
    alt: 'JB Trip May 30 2023',
    title: 'JB Trip May 30 2023',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/Hall.jpeg',
    alt: 'KE Hall Mar 1 2023',
    title: 'KE Hall Mar 1 2023',
    width: 3200,
    height: 2400,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/Blackpink_Concert.JPG',
    alt: 'Blackpink Concert May 15 2023',
    title: 'Blackpink Concert May 15 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Korea_STM_June2.JPG',
    alt: 'Korea STM June 9 2023',
    title: 'Korea STM June 9 2023',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Korea_STM_June.jpeg',
    alt: 'Korea STM June 10 2023',
    title: 'Korea STM June 10 2023',
    width: 1080,
    height: 1350,
    sizes: '(max-height: 500px) 1000px',
    className: 'photos',
    loader: 'nextJsImage',
    onClick: 'onClick',
  },
  {
    src: '/assets/images/Korea_STM_June3.JPEG',
    alt: 'Korea STM June 8 2023',
    title: 'Korea STM June 8 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Ah_Chews.JPEG',
    alt: 'Ah Chews June 24 2023',
    title: 'Ah Chews June 24 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Lumo.JPG',
    alt: 'Lumo June 29 2023',
    title: 'Lumo June 29 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Atico.JPG',
    alt: 'Atico Nov 26 2023',
    title: 'Atico Nov 26 2023',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Graduation.jpeg',
    alt: 'Graduation Jul 7 2023',
    title: 'Graduation Jul 7 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Koma.jpeg',
    alt: 'Koma Sep 18 2023',
    title: 'Koma Sep 18 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Lazarus.JPG',
    alt: 'Lazarus Island Aug 11 2023',
    title: 'Lazarus Island Aug 11 2023',
    width: 3200,
    height: 2400,
    className: 'photos',
    loader: 'nextJsImage',
  },
  {
    src: '/assets/images/Golf.JPG',
    alt: 'Golf Nov 26 2023',
    title: 'Golf Nov 26 2023',
    width: 1080,
    height: 1350,
    className: 'photos',
    loader: 'nextJsImage',
  },
];

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Jiayong & Joanne Lovebook"
          description="Memories of our relationship curated by the awesome Jiayong"
        />
      }
    >
      <div className="inset-y-4 grid gap-10">
        <PhotoAlbum
          renderPhoto={NextJsImage}
          layout="masonry"
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 450) return 2;
            if (containerWidth < 800) return 3;
            return 4;
          }}
          spacing={5}
          padding={10}
        />
      </div>
    </Main>
  );
};

export default Index;
