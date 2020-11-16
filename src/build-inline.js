/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// global configs
import { fontFamily, fontSize, image, language, table } from './configs';

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

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
import Extensions from '@hlw/ckeditor5-plugins/src/extensions/extensions';
import Font from '@ckeditor/ckeditor5-font/src/font';
import IndentFirst from '@hlw/ckeditor5-plugins/src/indent-first/indentfirst';
import LineHeight from '@hlw/ckeditor5-plugins/src/line-height/lineheight';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import ParagraphSpacing from '@hlw/ckeditor5-plugins/src/paragraph-spacing/paragraphspacing';
import ClearEmpty from '@hlw/ckeditor5-plugins/src/clear-empty/clearempty';
import ClearSpace from '@hlw/ckeditor5-plugins/src/clear-space/clearspace';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
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
  Indent,
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
  ParagraphSpacing,
  IndentFirst,
  LineHeight,
  Alignment,
  ImageResize,
  LinkImage,
  RemoveFormat,
  Subscript,
  Superscript,
  ClearEmpty,
  ClearSpace,
  Extensions,
];

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
	items: [
	  'heading',
	  '|',
	  'bold',
	  'italic',
	  'link',
	  'bulletedList',
	  'numberedList',
	  '|',
	  'indent',
	  'outdent',
	  '|',
	  'imageUpload',
	  'blockQuote',
	  'insertTable',
	  'mediaEmbed',
	  'undo',
	  'redo',
	  'clearEmpty',
	  'clearSpace',
	]
  },
  fontSize,
  fontFamily,
  image,
  table,
  // This value must be kept in sync with the language defined in webpack.config.js.
  language,
};
