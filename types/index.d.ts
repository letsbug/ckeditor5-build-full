import * as core from '@ckeditor/ckeditor5-core';
import * as engine from '@ckeditor/ckeditor5-engine';
import * as ckutils from '@ckeditor/ckeditor5-utils';
import { controller, conversion, model } from './engine';
// eslint-disable-next-line no-duplicate-imports
import { Plugin } from '@ckeditor/ckeditor5-core';

export interface SimpleUploadConfig {
	headers?: Record<string, string>;
	uploadUrl?: string;
	withCredentials?: boolean;
	key?: string;
}

export interface WordCountConfig {
	container?: HTMLElement;
	displayCharacters?: boolean;
	displayWords?: boolean;
	onUpdate?: Function;
}

export interface CounterConfig {
	container?: HTMLElement;
	characters?: boolean;
	doubles?: boolean;
	onUpdate?: Function;
}

export interface FontColorConfig {
	colors?: Array<string | any>;
	columns?: number;
	documentColors?: number;
}

export interface AutoSaveConfig {
	waitingTime?: number;
	// eslint-disable-next-line no-use-before-define
	save(editor: ckeditor.EditorInstance): Promise<any>;
}

export interface ExtensionsConfig {
	name: string;
	label: string;
	icon: string | SVGElement;
	command?: (selected?: engine.model.Element) => any;
	target?: 'base' | 'image' | 'media' | 'table';
}

export interface ImageConfig {
	styles?: string[];
	resizeOptions?: any[];
	toolbar?: string[];
	upload?: any;
}

export interface MediaEmbedProvider {
	name: string;
	url: RegExp | Array<RegExp>;
	html(match: RegExpMatchArray): string;
}

export interface MediaEmbedConfig {
	providers?: MediaEmbedProvider[];
	extraProviders?: MediaEmbedProvider[];
	removeProviders?: string[];
	previewsInData?: boolean;
	toolbar?: string[];
}

export interface LineHeightConfig {
	options?: number[];
	unit?: 'px';
}

export interface ParagraphSpacingConfig {
	options?: number[];
	unit?: 'px' | '%';
}

export interface ComponentFactory {
	add(name: string, callback: (...args: any) => any): void;
	has(name: string): boolean;
	names(): Iterable<string>;
}

export namespace ckeditor {
	/**
	 * The CKEditor5 editor config.
	 */
	export interface EditorConfig {
		initialData?: string;
		alignment?: { options?: string[] };
		autosave?: AutoSaveConfig;
		balloonToolbar?: string[];
		blockToolbar?: string[];
		ckfinder?: core.CKFinderAdapterConfig;
		cloudServices?: core.CloudServicesConfig;
		fontFamily?: core.FontFamilyConfig;
		fontSize?: core.FontSizeConfig;
		fontColor?: FontColorConfig;
		heading?: core.HeadingConfig;
		highlight?: core.HighlightConfig;
		image?: ImageConfig;
		language?: string;
		mediaEmbed?: MediaEmbedConfig;
		plugins?: Array<string | Plugin>;
		removePlugins?: string[];
		toolbar?: string[] | { items?: string[]; viewportTopOffset?: number; shouldNotGroupWhenFull?: boolean };
		typing?: core.TypingConfig;
		extraPlugins?: any[];
		simpleUpload?: SimpleUploadConfig;
		lineHeight?: LineHeightConfig;
		wordCount?: WordCountConfig;
		counter?: CounterConfig;
		title?: { placeholder?: string };
		placeholder?: string;
		extensions?: Array<ExtensionsConfig>;
	}

	export class EditorUI extends core.editor.EditorUI {
		readonly componentFactory: ComponentFactory;
	}

	/**
	 * A CKEditor5 editor that implements the
	 * [DataApi interface](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_utils_dataapimixin-DataApi.html).
	 * E.g. the `ClassicEditor`, `InlineEditor`, etc.
	 */
	export interface EditorInstance extends core.editor.utils.DataApi {
		readonly commands: core.CommandCollection;
		readonly config: ckutils.Config;
		readonly conversion: conversion.Conversion;
		readonly data: engine.controller.DataController;
		readonly editing: controller.EditingController;
		readonly keystrokes: core.EditingKeystrokeHandler;
		readonly locale: ckutils.Locale;
		readonly model: model.Model;
		readonly plugins: core.PluginCollection<core.Plugin<any>>;
		readonly state: 'initializing' | 'ready' | 'destroyed';
		readonly ui: EditorUI;
		isReadOnly: boolean;

		destroy(): Promise<void>;
		execute(commandName: string, ...params: any[]): any;
		initPlugins(): Promise<void>;
		t(str: string, values?: string[]): string;

		// Emitter
		delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
		fire(eventName: string, ...args: any[]): any;
		listenTo(
			emitter: any,
			eventName: string,
			callback: (e: ckutils.EventInfo<ckutils.Emitter>) => any,
			options?: { priority: ckutils.PriorityString | number }
		): void;
		off(eventName: string, callback: (e: ckutils.EventInfo<ckutils.Emitter>) => any): void;
		on(
			eventName: string,
			callback: (e: ckutils.EventInfo<ckutils.Emitter>) => any,
			options?: { priority: ckutils.PriorityString | number }
		): void;
		once(
			eventName: string,
			callback: (e: ckutils.EventInfo<ckutils.Emitter>) => any,
			options?: { priority: ckutils.PriorityString | number }
		): void;
		stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
		stopListening(emitter: any, eventName: string, callback: (e: ckutils.EventInfo<ckutils.Emitter>) => any): void;

		// Observable
		bind(...bindProperties: string[]): ckutils.BindChain;
		decorate(methodName: string): void;
		set(name: object): void;
		set(name: string, value: any): void;
		unbind(...unbindProperties: string[]): void;
	}

	/**
	 * The CKEditor5 editor constructor.
	 */
	export interface EditorBuild {
		// new (sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<ClassicEditor>;
		builtinPlugins: Array<Plugin<any>>;
		defaultConfig: EditorConfig;
		create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<EditorInstance>;
	}

	export interface CKEditor {
		DocumentBuild: EditorBuild;
		InlineBuild: EditorBuild;
		ClassicBuild: EditorBuild;
	}
}

declare const CKEditor: ckeditor.CKEditor;

export default CKEditor;
