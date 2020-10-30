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
		bind(...bindProperties: string[]): ckutils.BindChain;
		decorate(methodName: string): void;
		delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
		fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
		listenTo(emitter: ckutils.Emitter, event: string, callback: Function, options?: { priority?: ckutils.PriorityString | number }): void;
		off(event: string, callback?: Function): void;
		on(event: string, callback: Function, options?: { priority: ckutils.PriorityString | number }): void;
		once(event: string, callback: Function, options?: { priority: ckutils.PriorityString | number }): void;
		set(name: object): void;
		set(name: string, value: any): void;
		stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
		stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
		unbind(...unbindProperties: string[]): void;
	}

	class Schema {
		addAttributeCheck: Function;
		addChildCheck: Function;
		checkAttribute: Function;
		checkMerge: Function;
		register: Function;

		extend(to: string, params: { allowAttributes: string | string[] }): void;
	}

	class Model extends engine.model.Model {
		readonly document: Document;
		readonly schema: Schema;
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
}

export namespace view {
	class View extends engine.view.View {
		focus(): void;
		document: engine.view.Document;
	}
}
