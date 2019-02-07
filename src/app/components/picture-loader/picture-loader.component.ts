import {Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer} from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';

@Component({
  selector: 'picture-loader',
  styleUrls: ['./picture-loader.component.scss'],
  templateUrl: 'picture-loader.component.html',
})
export class PictureLoaderComponent {
  @Input() defaultPicture:string = '';
  @Input() picture:string = '';
  @Input() canDelete:boolean = true;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onUploadCompleted = new EventEmitter<any>();
  @ViewChild('fileUpload') public _fileUpload:ElementRef;

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;
  private urlBase = 'http://localhost:3110/api/';

  public uploadInProgress:boolean;

  constructor(private renderer: Renderer) {
    this.options = { concurrency: 1 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  beforeUpload(): void {
    let files = this._fileUpload.nativeElement.files;

    if (files.length) {
      const file = files[0];
      this.changePicture(file);
    }
  }

  removePicture():boolean {
    this.picture = '';
    this.onUpload.emit(false);    
    return false;
  }

  changePicture(file:File):void {
    const reader = new FileReader();
    reader.addEventListener('load', (event:Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  bringFileSelector():boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  setPictureFromUpdate(url) {
    this.picture = this.urlBase + url; 
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') {
      this.onUpload.emit(true);    
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if (output.type === 'rejected' && typeof output.file !== 'undefined') {
    } else if (output.type === 'done') {
      this.onUploadCompleted.emit(output);
    }

    this.files = this.files.filter(file => file.progress.status !== UploadStatus.Done);
  }

  startUpload(urlAPI): void {
    const event: UploadInput = {
      type: 'uploadAll',
      method: 'POST',
      url: this.urlBase + urlAPI,
    };
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
}