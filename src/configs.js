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
  ]
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
  contentToolbar: [
	'tableColumn',
	'tableRow',
	'mergeTableCells'
  ]
};

export const language = 'zh-cn';
