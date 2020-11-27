/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtinPlugins, fontFamily, fontSize, generateToolbar, image, language, table } from './configs';

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = builtinPlugins;

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: generateToolbar(
			`heading, |,
			bold, italic, underline, strikethrough, bulletedList, numberedList, |,
			lineHeight, indentFirst, alignment, |,
			blockQuote, insertTable, |,
			undo, redo, removeFormat, clearEmpty, clearSpace, softBreakToEnter`
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
