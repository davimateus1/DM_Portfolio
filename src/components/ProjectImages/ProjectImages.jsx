import { Images } from '../../assets/utils/Data.js';

import { Zoom } from "react-reveal";
import Tilt from "react-tilt";

const ProjectImages = () => {
    return(
       Images.map(image => (
        <a
        href={image.href}
        target="_blank"
        rel="noreferrer"
        key={image.id}
      >
        <Tilt
          className="Tilt"
          options={{ max: 8, speed: 700, scale: 1.03 }}
        >
          <Zoom>
            <img alt={image.alt} src={image.image} />
          </Zoom>
        </Tilt>
      </a>
    ))
    )
}

export default ProjectImages;