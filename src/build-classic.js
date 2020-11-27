/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { builtins, fontSize, toolbarer, image, language, table } from './configs';

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = builtins;

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: toolbarer(
			`undo, redo, |,
			heading, |,
			fontFamily, fontSize, fontColor, fontBackgroundColor, |,
			bold, italic, underline, strikethrough, bulletedList, numberedList, |,
			lineHeight, paragraphSpacing, indentFirst, alignment, |,
			link, imageUpload, blockQuote, insertTable, mediaEmbed, |,
			removeFormat, clearEmpty, clearSpace, softBreakToEnter`
		),
		shouldNotGroupWhenFull: true,
	},
	fontSize,
	image,
	table,

	// This value must be kept in sync with the language defined in webpack.config.js.
	language,
};
