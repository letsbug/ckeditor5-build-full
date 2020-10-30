/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

// custom requires plugins
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import IndentFirst from '@hlw/ckeditor5-plugins/src/indent-first/indentfirst';
import LineHeight from '@hlw/ckeditor5-plugins/src/line-height/lineheight';
import Extensions from '@hlw/ckeditor5-plugins/src/extensions/extensions';
import MediaAutoEmbed from '@ckeditor/ckeditor5-media-embed/src/automediaembed';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,

  // custom build plugins.
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Font,
  Alignment,
  RemoveFormat,
  ImageResize,
  LinkImage,
  MediaAutoEmbed,
  IndentFirst,
  LineHeight,
  Extensions
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
	items: [
	  'undo',
	  'redo',
	  '|',
	  'heading',
	  '|',
	  'fontFamily',
	  'fontSize',
	  'fontColor',
	  'fontBackgroundColor',
	  '|',
	  'bold',
	  'italic',
	  'underline',
	  'strikethrough',
	  'bulletedList',
	  'numberedList',
	  '|',
	  'lineHeight',
	  'indentFirst',
	  'alignment',
	  '|',
	  'link',
	  'imageUpload',
	  'blockQuote',
	  'insertTable',
	  'mediaEmbed',
	  '|',
	  'removeFormat'
	],
	shouldNotGroupWhenFull: true
  },
  fontSize: {
	options: [12, 'default', 16, 18, 20, 24, 28, 32, 36, 42]
  },
  image: {
	styles: ['alignLeft', 'alignCenter', 'alignRight', 'full', 'side'],
	resizeOptions: [
	  {
		name: 'imageResize:original',
		value: null,
		icon: 'original'
	  },
	  {
		name: 'imageResize:50',
		value: '50',
		icon: 'medium'
	  },
	  {
		name: 'imageResize:75',
		value: '75',
		icon: 'large'
	  }
	],
	toolbar: [
	  'imageStyle:full',
	  'imageStyle:side',
	  '|',
	  'imageStyle:alignLeft',
	  'imageStyle:alignCenter',
	  'imageStyle:alignRight',
	  '|',
	  'imageResize:50',
	  'imageResize:75',
	  'imageResize:original',
	  '|',
	  'imageTextAlternative',
	  '|',
	  'linkImage'
	],
	upload: {
	  panel: {
		items: ['insertImageViaUrl']
	  }
	}
  },
  table: {
	contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },

  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'zh-cn'
};
