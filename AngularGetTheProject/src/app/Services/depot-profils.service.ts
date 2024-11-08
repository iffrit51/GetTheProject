import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepotProfils } from 'src/app/Models/depotprofils.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DepotProfilsService {
    baseApiUrl: string=environment.baseApiUrl;
    constructor(private http:HttpClient) { }

    addDepotProfil(addMissionRequest : DepotProfils):Observable<DepotProfils>{
        addMissionRequest.id=0
        return this.http.post<DepotProfils>(this.baseApiUrl+ '/api/DepotProfils',addMissionRequest);
      }
    getDepotProfil(id:string):Observable<DepotProfils>{
        return this.http.get<DepotProfils>(this.baseApiUrl+ '/api/GetDepotProfil/'+id);
      }
    }
