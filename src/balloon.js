/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

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
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
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
import Extensions from '@hlw/ckeditor5-plugins/src/extensions/extensions';
import IndentFirst from '@hlw/ckeditor5-plugins/src/indent-first/indentfirst';
import LineHeight from '@hlw/ckeditor5-plugins/src/line-height/lineheight';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
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
  Font,
  Underline,
  Strikethrough,
  IndentFirst,
  LineHeight,
  Alignment,
  ImageResize,
  LinkImage,
  RemoveFormat,
  Extensions,
];

// Editor configuration.
BalloonEditor.defaultConfig = {
  toolbar: {
	items: [
	  'heading',
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
	  'blockQuote',
	  'insertTable',
	  '|',
	  'undo',
	  'redo',
	  'removeFormat'
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
