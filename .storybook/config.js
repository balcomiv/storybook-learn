// import '../src/styles.scss';
// // import '!style-loader!css-loader!sass-loader!../src/styles.scss';
import { configure } from '@storybook/angular';

// import '!style-loader!css-loader!sass-loader!../src/styles.scss';
import '../src/styles.scss';


// automatically import all files ending in *.stories.ts
configure(require.context('../src/stories', true, /\.stories\.ts$/), module);
