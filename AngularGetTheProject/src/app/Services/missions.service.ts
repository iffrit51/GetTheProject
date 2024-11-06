import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Mission } from '../Models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  baseApiUrl: string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  getAllMissions(): Observable<Mission[]>{
    return this.http.get<Mission[]>(this.baseApiUrl+ '/api/Missions')
  }
  addMission(addMissionRequest : Mission):Observable<Mission>{
    addMissionRequest.id='0'
    return this.http.post<Mission>(this.baseApiUrl+ '/api/Missions',addMissionRequest);
  }
  getMission(id:string):Observable<Mission>{
    return this.http.get<Mission>(this.baseApiUrl+ '/api/Missions/'+id);
  }
  updateMission(id:string,updateMissionRequest:Mission):Observable<Mission>{
    return this.http.put<Mission>(this.baseApiUrl+ '/api/Missions/'+id,updateMissionRequest);
  }
  deleteMission(id:string):Observable<Mission>{
    return this.http.delete<Mission>(this.baseApiUrl+ '/api/Missions/'+id);
  }
  getNumberOfMissions(): Observable<number>{
    return this.http.get<number>(this.baseApiUrl+ '/api/Missions/Number')
  }
 
}
