import infos from '../package.json';

const today = new Date()
  , paths = {
    themes: './themes',
    src: {
      src: './src',
      languages: './src/languages',
      components: './src/components',
      palette: './src/palette.json'
    }
  };

export default paths;
