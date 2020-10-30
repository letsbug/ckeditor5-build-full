import BalloonEditor from './balloon';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';

import '../theme/theme.css';

export default class BalloonBlockEditor extends BalloonEditor {}

// Plugins to include in the build.
BalloonBlockEditor.builtinPlugins.push(BlockToolbar);

// Editor configuration.
BalloonEditor.defaultConfig = {
  blockToolbar: [
	'heading',
	'|',
	'bulletedList',
	'numberedList',
	'|',
	'lineHeight',
	'indentFirst',
	'alignment',
	'|',
	'imageUpload',
	'blockQuote',
	'insertTable',
	'mediaEmbed',
	'|',
	'undo',
	'redo'
  ],
  toolbar: {
	items: [
	  'bold',
	  'italic',
	  'underline',
	  'strikethrough',
	  'link'
	]
  },
  fontSize: {
	options: [12, 'default', 16, 18, 20, 24, 28, 32, 36, 42],
  },
  image: {
	toolbar: [
	  'imageStyle:full',
	  'imageStyle:side',
	  '|',
	  'imageTextAlternative'
	]
  },
  table: {
	contentToolbar: [
	  'tableColumn',
	  'tableRow',
	  'mergeTableCells'
	]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'zh-cn'
};
