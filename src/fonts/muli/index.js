import MuliWoff2 from './muli-webfont.woff2';
import MuliWoff from './muli-webfont.woff';
import MuliTtf from './muli.ttf';

const muli = {
  fontFamily: 'muli',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('muli'),
    url(${MuliWoff2}) format('woff2'),
    url(${MuliWoff}) format('woff'),
    url(${MuliTtf}) format('ttf',
  `,
};

export default muli;