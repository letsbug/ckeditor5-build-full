import * as engine from '@ckeditor/ckeditor5-engine';
import * as ckutils from '@ckeditor/ckeditor5-utils';

export namespace controller {
	class EditingController extends engine.controller.EditingController {
		// eslint-disable-next-line no-use-before-define
		readonly view: view.View;
	}
}

export namespace conversion {
	interface ConverterDefinition {
		converterPriority?: ckutils.PriorityString;
		model?: any;
		upcastAlso?: engine.view.MatcherPattern | engine.view.MatcherPattern[];
		// eslint-disable-next-line @typescript-eslint/ban-types
		view?: engine.view.ElementDefinition | Object;
	}

	class DowncastHelpers {
		constructor();
		add(config: ConversionHelpers): void | DowncastHelpers | UpcastHelpers;
		attributeToAttribute(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		attributeToElement(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		elementToElement(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		markerToData(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		markerToElement(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		markerToHighlight(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
	}

	class UpcastHelpers {
		constructor();
		add(config: ConversionHelpers): void | DowncastHelpers | UpcastHelpers;
		attributeToAttribute(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		dataToMarker(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		elementToAttribute(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
		elementToElement(config: ConverterDefinition): DowncastHelpers | UpcastHelpers;
	}

	class ConversionHelpers {
		constructor();
		add(config?: ConversionHelpers): void | DowncastHelpers | UpcastHelpers;
	}

	class Conversion extends engine.conversion.Conversion {
		for(groupName: string): { add: (config?: ConversionHelpers | any) => void } & (DowncastHelpers | UpcastHelpers);
	}
}

export namespace model {
	class Document implements ckutils.Emitter, ckutils.Observable {
		readonly differ: engine.model.Differ;
		readonly graveyard: engine.model.RootElement;
		readonly history: engine.model.History;
		readonly model: Model;
		readonly selection: DocumentSelection;
		readonly version: Number;

		bind(...bindProperties: string[]): ckutils.BindChain;
		decorate(methodName: string): void;
		delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
		fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
		getRoot(name?: String): engine.model.RootElement | null;
		getRootNames(): Array<String>;
		listenTo(
			emitter: ckutils.Emitter,
			event: string,
			callback: Function,
			options?: { priority?: ckutils.PriorityString | number }
		): void;
		off(event: string, callback?: Function): void;
		on(event: string, callback: Function, options?: { priority: ckutils.PriorityString | number }): void;
		once(event: string, callback: Function, options?: { priority: ckutils.PriorityString | number }): void;
		set(name: object): void;
		set(name: string, value: any): void;
		stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
		stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
		unbind(...unbindProperties: string[]): void;
	}

	class DocumentSelection {
		readonly anchor: engine.model.Position | null;
		readonly focus: engine.model.Position | null;
		readonly hasOwnRange: Boolean;
		readonly isBackward: Boolean;
		readonly isCollapsed: Boolean;
		readonly isGravityOverridden: Boolean;
		readonly markers: ckutils.Collection<Marker>;
		readonly rangeCount: Number;

		destroy(): void;

		containsEntireContent(els: engine.model.Element[]): Boolean;
		getAttribute(key: string): any;
		getAttributeKeys(): Iterable<String>;
		getAttributes(): Iterable<any>;
		getFirstPosition(): engine.model.Position | null;
		getFirstRange(): engine.model.Range | null;
		getLastPosition(): engine.model.Position | null;
		getLastRange(): engine.model.Range | null;
		getRanges(): Iterable<engine.model.Range>;
		getSelectedBlocks(): Iterable<engine.model.Element>;
		getSelectedElement(): engine.model.Element;

		hasAttribute(key: String): Boolean;
		is(key: String): Boolean;
	}

	class Schema {
		addAttributeCheck: Function;
		addChildCheck: Function;
		checkAttribute: Function;
		checkMerge: Function;
		register: Function;

		extend(to: string, params: { allowAttributes: string | string[] }): void;
	}

	class SchemaContext extends engine.model.SchemaContext implements Iterable<engine.model.SchemaContextItem> {
		last: engine.model.SchemaContextItem;
		length: number;
		[Symbol.iterator](): Iterator<engine.model.SchemaContextItem>;

		constructor();
		endsWith(query: string): boolean;
		getItem(): engine.model.SchemaContextItem;
		getNames(): Iterable<string>;
		push(item: string | engine.model.Node | Array<string | engine.model.Node>): SchemaContext;
		startsWith(query: string): boolean;
	}

	class Marker {
		affectsData: any;
		managedUsingOperations: any;
		readonly name: string;

		getEnd(): engine.model.Position;
		getRange(): engine.model.Range;
		getStart(): engine.model.Position;
		is(type: string): Boolean;

		on(evt: 'change:content' | 'change:range', eventInfo: ckutils.EventInfo<any>, old: any, data: any): void;
	}

	class MarkerCollection {
		[Symbol.iterator](): Iterator<Marker>;

		destroy(): void;

		get(name: string): Marker | null;
		getMarkersAtPosition(position: engine.model.Position): Iterable<Marker>;
		getMarkersGroup(prefix: string): Iterable<Marker>;
		getMarkersIntersectingRange(range: engine.model.Range): Iterable<Marker>;

		has(markerName: string): Boolean;

		on(
			eventInfo: ckutils.EventInfo<object>,
			marker: Marker,
			oldRange: engine.model.Range | null,
			newRange: engine.model.Range
		): void;
	}

	class Model extends engine.model.Model {
		readonly document: Document;
		readonly markers: MarkerCollection;
		readonly schema: Schema;

		createPositionAt(
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset: number | 'end' | 'before' | 'after'
		): engine.model.Position;
		createPositionAfter(item: engine.model.Item): engine.model.Position;
		createPositionBefore(item: engine.model.Item): engine.model.Position;
	}

	class Writer {
		readonly batch: any;
		readonly model: Model;

		addMarker(name: string, options: { usingOperation: boolean; range: Range; affectsData?: boolean }): Marker;
		append(
			item: engine.model.Item | engine.model.DocumentFragment,
			parent: engine.model.Element | engine.model.DocumentFragment
		): void;
		appendElement(name: string, parent: engine.model.Element | engine.model.DocumentFragment): void;
		appendElement(name: string, attributes: Object, parent: engine.model.Element | engine.model.DocumentFragment): void;
		appendText(name: string, parent: engine.model.Element | engine.model.DocumentFragment): void;
		appendText(name: string, attributes: Object, parent: engine.model.Element | engine.model.DocumentFragment): void;
		clearAttributes(itemOrRange: engine.model.Item | engine.model.Range): void;
		cloneElement(element: engine.model.Element, deep?: boolean): engine.model.Element;
		createDocumentFragment(): engine.model.DocumentFragment;
		createElement(name: string, attributes?: Object): engine.model.Element;
		createPositionAfter(item: engine.model.Item): engine.model.Position;
		createPositionAt(item: engine.model.Item, offset?: number | 'end' | 'before' | 'after'): engine.model.Position;
		createPositionBefore(item: engine.model.Item): engine.model.Position;
		createPositionFromPath(
			root: engine.model.Element | engine.model.DocumentFragment,
			path: Array<number>,
			stickiness?: engine.model.PositionStickiness
		): engine.model.Position;
		createRange(start: engine.model.Position, end?: engine.model.Position): engine.model.Range;
		createRangeIn(element: engine.model.Element): engine.model.Range;
		createRangeOn(element: engine.model.Element): engine.model.Range;
		createSelection(
			selectable: any,
			placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
			options?: { backward?: boolean } | Object
		): Selection;
		createText(data, attributes?: Object): engine.model.Text;
		insert(
			item: engine.model.Item | engine.model.DocumentFragment,
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset?: Number | 'end' | 'before' | 'after'
		): void;
		insertElement(name: string, attributes?: Object): void;
		insertElement(name: string, attributes: Object, itemOrPosition: engine.model.Item | engine.model.Position): void;
		insertElement(
			name: string,
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset: Number | 'end' | 'before' | 'after'
		): void;
		insertText(name: string, attributes?: Object): void;
		insertText(name: string, attributes: Object, itemOrPosition: engine.model.Item | engine.model.Position): void;
		insertText(
			name: string,
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset: Number | 'end' | 'before' | 'after'
		): void;
		merge(position: engine.model.Position): void;
		move(
			range: engine.model.Range,
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset?: Number | 'end' | 'before' | 'after'
		): void;
		overrideSelectionGravity(): string;
		remove(itemOrRange: engine.model.Item | engine.model.Range): void;
		removeAttribute(key: string, itemOrRange: engine.model.Item | engine.model.Range): void;
		removeMarker(markerOrName: string | engine.model.Marker): void;
		removeSelectionAttribute(keyOrIterableOfKeys: string | Iterable<string>): void;
		rename(element: engine.model.Element, newName: string): void;
		restoreSelectionGravity(uid: string): void;
		setAttribute(key: string, value: string, itemOrRange: engine.model.Item | engine.model.Range): void;
		setAttributes(attributes: Record<string, string>, itemOrRange: engine.model.Item | engine.model.Range): void;
		setSelection(
			selectable:
				| engine.model.Selection
				| engine.model.DocumentSelection
				| engine.model.Position
				| engine.model.Element
				| Iterable<engine.model.Range>
				| engine.model.Range
				| null,
			placeOrOffset?: Number | 'before' | 'end' | 'after' | 'on' | 'in',
			options?: { backward?: boolean } | Record<string, any>
		): void;
		setSelectionAttribute(keyOrObjectOrIterable: String | Object | Iterable<any>, value?: any): void;
		setSelectionFocus(
			itemOrPosition: engine.model.Item | engine.model.Position,
			offset?: Number | 'end' | 'before' | 'after'
		): void;
		split(
			position: engine.model.Position,
			limitElement?: engine.model.Node
		): { position: engine.model.Position; range: engine.model.Range };
		unwrap(element: engine.model.Element): void;
		updateMarker(
			markerOrName: engine.model.Marker | string,
			options?: { range?: engine.model.Range; usingOperation?: boolean; affectsData?: boolean }
		): void;
		wrap(range: engine.model.Range, elementOrString: engine.model.Element | string): void;
	}
}

export namespace view {
	class View extends engine.view.View {
		focus(): void;
		document: engine.view.Document;
	}
}
