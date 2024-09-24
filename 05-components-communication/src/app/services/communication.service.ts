import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService<T> {
  /**
   * Variant of a Subject which keeps a cache of previous values emitted by a source observable
   */
  private messenger: ReplaySubject<T> = new ReplaySubject<T>();

  /**
   * @memberof CommunicationService
   * @method receiveValue
   * @description Method to get the value from the messenger
   */
  public get getMessengerValue(): Observable<T> {
    return this.messenger.asObservable();
  }

  /**
   * @memberof CommunicationService
   * @method send
   * @description Sends a value to the messenger
   */
  public sendValue(id: T): void {
    this.messenger.next(id);
  }
}
