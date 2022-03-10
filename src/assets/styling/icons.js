// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import icons required
import { faHtml5, faCss3Alt, faSass, faGitAlt, faGithub, faJs, faReact, faNpm, faNodeJs, faBootstrap, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'; 
import { faEye } from '@fortawesome/free-regular-svg-icons';

library.add(
    faHtml5,
    faCss3Alt,
    faEnvelope,
    faSass,
    faBootstrap,
    faGitAlt,
    faGithub,
    faJs,
    faReact,
    faNpm,
    faNodeJs,
    faDatabase,
    faEye,
    faCode,
    faGithubSquare,
    faLinkedin
);

// NB:  import file into index.js file (top level for child elements to use)
// then use FontAwesome icon as string in icon prop
// E.g: <FontAwesomeIcon icon="fa-brands fa-html5" /> 




