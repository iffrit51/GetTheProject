import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Profil } from '../Models/profil.model';
@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  baseApiUrl: string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  getAllProfils(): Observable<Profil[]>{
    return this.http.get<Profil[]>(this.baseApiUrl+ '/api/Profils')
  }
  getProfil(id:string):Observable<Profil>{
    return this.http.get<Profil>(this.baseApiUrl+ '/api/Profils/'+id);
  }
  addProfil(addProfilRequest : Profil):Observable<Profil>{
    addProfilRequest.id='0'
    return this.http.post<Profil>(this.baseApiUrl+ '/api/Profils',addProfilRequest);
  }
  updateProfil(id:string,updateProfilRequest:Profil):Observable<Profil>{
    return this.http.put<Profil>(this.baseApiUrl+ '/api/profils/'+id,updateProfilRequest);
  }
  getNumberOfProfils(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl+ '/api/Profils/Number')
  }
  deleteProfil(id:string):Observable<Profil>{
    return this.http.delete<Profil>(this.baseApiUrl+ '/api/Profils/'+id);
  }
}
