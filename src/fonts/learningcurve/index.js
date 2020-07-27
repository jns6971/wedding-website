import LearningCurveWoff2 from './learningcurve-webfont.woff2';
import LearningCurveWoff from './learningcurve-webfont.woff';
import LearningCurveTtf from './learningcurve.ttf';

const learningcurve = {
  fontFamily: 'learningcurve',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `
    local('learningcurve'),
    url(${LearningCurveWoff2}) format('woff2'),
    url(${LearningCurveWoff}) format('woff'),
    url(${LearningCurveTtf}) format('ttf')
  `,
};

export default learningcurve;