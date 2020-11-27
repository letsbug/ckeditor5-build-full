/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtinPlugins, fontFamily, fontSize, generateToolbar, image, language, table } from './configs';

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = builtinPlugins;

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: generateToolbar(
			`heading, |,
			bold, italic, link, bulletedList, numberedList, |,
			indentFirst, |,
			imageUpload, blockQuote, insertTable, mediaEmbed, undo, redo, clearEmpty, clearSpace, softBreakToEnter`
		),
		shouldNotGroupWhenFull: true,
	},
	fontSize,
	fontFamily,
	image,
	table,
	// This value must be kept in sync with the language defined in webpack.config.js.
	language,
};
