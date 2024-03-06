import { Injectable } from '@angular/core';
import {environnement} from "../../environment/environment";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voyage} from "../models/voyage";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  apiUrl = environnement.apiUrl+"voyages";

  errorHandler(error :any){
    let errorMessage ='';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }else{
      errorMessage= `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  constructor(private httpClient: HttpClient) {

  }
  getAll():Observable<Voyage[]>{
    return this.httpClient.get<Voyage[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getOne(id: number):Observable<Voyage>{
    return this.httpClient.get<Voyage>(this.apiUrl+"/"+id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  removeVoyage(id: number): Observable<Voyage> {
    return this.httpClient.delete(this.apiUrl+"/"+id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  editVoyage(voyage: Voyage): Observable<Voyage>{
    return this.httpClient.put<Voyage>(this.apiUrl+"/"+voyage.id, voyage).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  postVoyage(voyage: Voyage): Observable<Voyage>{
    return this.httpClient.post<Voyage>(this.apiUrl, voyage).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

}
