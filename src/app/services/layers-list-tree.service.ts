import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayersListTreeService {
    private data: any;
    private subject: Subject<any> = new Subject<any>();

    setData(data: any): void {
        this.data = data;
        this.subject.next(data);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}