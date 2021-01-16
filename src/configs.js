import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

// custom plugins with @hlw/ckeditor5-plugins
import IndentFirst from '@hlx/ckeditor5-plugins/src/indent-first';
import ParagraphSpacing from '@hlx/ckeditor5-plugins/src/paragraph-spacing';
import LineHeight from '@hlx/ckeditor5-plugins/src/line-height';
import ClearEmpty from '@hlx/ckeditor5-plugins/src/clear-empty';
import ClearSpace from '@hlx/ckeditor5-plugins/src/clear-space';
import SoftBreakToEnter from '@hlx/ckeditor5-plugins/src/soft-break-to-enter';
import QuickStyle from '@hlx/ckeditor5-plugins/src/quick-style';
import ConvertFullHalf from '@hlx/ckeditor5-plugins/src/convert-full-half';
import Extensions from '@hlx/ckeditor5-plugins/src/extensions';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import SimpleAdapter from '@hlx/ckeditor5-plugins/src/simple-adapter';
import Counter from '@hlx/ckeditor5-plugins/src/counter';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar';
import FindReplace from '@hlx/ckeditor5-plugins/src/find-replace';

export const builtins = [
	Essentials,
	Alignment,
	Autoformat,
	Bold,
	Font,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	Heading,
	Indent,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Link,
	LinkImage,
	List,
	ListStyle,
	MediaEmbed,
	MediaEmbedToolbar,
	Paragraph,
	PageBreak,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Subscript,
	Superscript,
	SimpleAdapter,
	RemoveFormat,
	Counter,

	// custom plugins with @hlw/ckeditor5-plugins
	FindReplace,
	IndentFirst,
	ParagraphSpacing,
	LineHeight,
	ClearEmpty,
	ClearSpace,
	SoftBreakToEnter,
	QuickStyle,
	ConvertFullHalf,
	Extensions,
];

export const fontSize = {
	options: [12, 'default', 16, 18, 20, 24, 28, 32, 36, 42],
};

export const fontFamily = {
	options: [
		'default',
		'宋体, SimSun, sans-serif',
		'微软雅黑, Microsoft Yahei, monospace',
		'黑体, SimHei, serif',
		'楷体, KaiTi, sans-serif',
		'隶书, LiSu, sans-serif',
		'Arial, Helvetica, sans-serif',
		'Courier New, Courier, monospace',
		'Georgia, serif',
		'Lucida Sans Unicode, Lucida Grande, sans-serif',
		'Tahoma, Geneva, sans-serif',
		'Times New Roman, Times, serif',
		'Trebuchet MS, Helvetica, sans-serif',
		'Verdana, Geneva, sans-serif',
	],
};

export const image = {
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
};

export const table = {
	contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
};

export const language = 'zh-cn';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function toolbarer(preset) {
	return preset
		.replace(/[\s]+/g, '')
		.split(',')
		.filter((bar) => !!bar);
}
