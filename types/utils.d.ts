import * as ckutils from '@ckeditor/ckeditor5-utils';

export namespace ui {}

export namespace upload {
	type FileStatus = 'idle' | 'reading' | 'uploading' | 'aborted' | 'error';
	type EventTypes = 'status' | 'uploadResponse' | 'uploadTotal' | 'uploaded' | 'uploadedPercent';

	/**
	 * File loader class.
	 * It is used to control the process of reading the file and uploading it using the specified upload adapter.
	 */
	class FileLoader {
		// Properties
		data?: File;
		file: Promise<File | null>;
		id: number;
		status: FileStatus;
		uploadResponse: Response;
		uploadTotal: number;
		uploaded: number;
		uploadedPercent: number;

		constructor(promise: Promise<File>, creator: (...args: any) => any);

		// Methods
		private read(): Promise<string>;
		public abort(): void;
		public upload(): Promise<Response>;

		// Events
		change(event: ckutils.EventInfo<ckutils.Emitter>, name: EventTypes, value: string, oldValue: string): void;
	}

	/**
	 * File repository plugin. A central point for managing file upload.
	 *
	 * To use it, first you need an upload adapter. Upload adapter's job is to handle communication with the
	 * server (sending the file and handling server's response). You can use one of the existing plugins
	 * introducing upload adapters (e.g. CloudServicesUploadAdapter or CKFinderUploadAdapter) or write your own one
	 * – see the "Custom image upload adapter" deep dive guide.
	 *
	 * Then, you can use createLoader() and the returned FileLoader instance to load and upload files.
	 */
	class FileRepository {
		//  Properties
		createUploadAdapter: Function;

		//	TODO
	}

	/**
	 * Wrapper over the native FileReader.
	 */
	class FileReader {
		// Properties
		data?: File;
		error: Error;
		loaded: number;

		constructor();

		// Methods
		abort(): void;
		read(file: File): Promise<string>;

		// Events
		change(event: ckutils.EventInfo<ckutils.Emitter>, name: 'loaded', value: string, oldValue: string): void;
	}

	/**
	 * The file dialog button view.
	 *
	 * This component provides a button that opens the native file selection dialog.
	 * It can be used to implement the UI of a file upload feature.
	 */
	class FileDialogButtonView {
		// Properties
		acceptedType: string;
		allowMultipleFiles: boolean;
		buttonView: any;
		element: HTMLElement;
		isRendered: boolean;
		locale: ckutils.Locale;
		template: any;

		// TODO
	}
}
