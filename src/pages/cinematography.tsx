import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Cinematography = () => (
  // return ();
  <Main meta={<Meta title="Cinematography" description="Cinematography" />}>
    <div className=" my-10 text-xl font-bold">
      <h1> Work in progress </h1>
    </div>
    <div className=" my-10 object-center " id="Nataly music video">
      <iframe
        src="https://share.icloud.com/photos/089u3qx3anFQI13HxOcFiI94w"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Main>
);

export default Cinematography;
