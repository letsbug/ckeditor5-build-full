import BalloonEditor from './build-balloon';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';

import '../theme/theme.css';
import { fontFamily, fontSize, image, language, table } from './configs';

export default class BalloonBlockEditor extends BalloonEditor {}

// Plugins to include in the build.
BalloonBlockEditor.builtinPlugins.push(BlockToolbar);

// Editor configuration.
BalloonBlockEditor.defaultConfig = {
	blockToolbar: ['heading', '|', 'bulletedList', 'numberedList', '|', 'lineHeight', 'indentFirst', 'alignment', '|', 'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo'],
	toolbar: {
		items: ['bold', 'italic', 'underline', 'strikethrough', 'link'],
	},
	fontSize,
	fontFamily,
	image,
	table,
	// This value must be kept in sync with the language defined in webpack.config.js.
	language,
};
