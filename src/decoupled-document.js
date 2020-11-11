/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

// custom requires plugins
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import IndentFirst from '@hlw/ckeditor5-plugins/src/indent-first/indentfirst';
import LineHeight from '@hlw/ckeditor5-plugins/src/line-height/lineheight';
import Extensions from '@hlw/ckeditor5-plugins/src/extensions/extensions';
import ParagraphSpacing from '@hlw/ckeditor5-plugins/src/paragraph-spacing/paragraphspacing';
import ClearEmpties from '@hlw/ckeditor5-plugins/src/clear-empties/clearempties';


export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  Essentials,
  Alignment,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Link,
  List,
  ListStyle,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,

  // custom build plugins.
  IndentFirst,
  ParagraphSpacing,
  ImageResize,
  LinkImage,
  LineHeight,
  Subscript,
  Superscript,
  RemoveFormat,
  ClearEmpties,
  Extensions,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
  toolbar: {
	items: [
	  'undo',
	  'redo',
	  '|',
	  'heading',
	  '|',
	  'fontfamily',
	  'fontsize',
	  'fontColor',
	  'fontBackgroundColor',
	  '|',
	  'bold',
	  'italic',
	  'underline',
	  'strikethrough',
	  'numberedList',
	  'bulletedList',
	  '|',
	  'paragraphSpacing',
	  'lineHeight',
	  'alignment',
	  '|',
	  '|',
	  'indentFirst',
	  'indent',
	  'outdent',
	  '|',
	  'link',
	  'blockquote',
	  'imageUpload',
	  'insertTable',
	  'mediaEmbed',
	  '|',
	  'removeFormat',
	  'clearEmpties',
	],
	shouldNotGroupWhenFull: true,
  },
  fontSize: {
	options: [12, 'default', 16, 18, 20, 24, 28, 32, 36, 42],
  },
  image: {
	styles: ['alignLeft', 'alignCenter', 'alignRight', 'full', 'side'],
	resizeOptions: [
	  {
		name: 'imageResize:original',
		value: null,
		icon: 'original',
	  },
	  {
		name: 'imageResize:50',
		value: '50',
		icon: 'medium',
	  },
	  {
		name: 'imageResize:75',
		value: '75',
		icon: 'large',
	  },
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
	  'linkImage',
	],
	upload: {
	  panel: {
		items: ['insertImageViaUrl'],
	  },
	},
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
