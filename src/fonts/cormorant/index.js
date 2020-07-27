import CormorantWoff2 from './cormorant-mediumitalic-webfont.woff2';
import CormorantWoff from './cormorant-mediumitalic-webfont.woff';
import CormorantTtf from './cormorant-mediumitalic.ttf';

const cormorant = {
  fontFamily: 'cormorant',
  fontStyle: 'italic',
  fontWeight: 400,
  src: `
    local('cormorant'),
    url(${CormorantWoff2}) format('woff2'),
    url(${CormorantWoff}) format('woff'),
    url(${CormorantTtf}) format('ttf')
  `,
};

export default cormorant;