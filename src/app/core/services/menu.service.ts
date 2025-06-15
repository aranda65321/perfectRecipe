import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { MenusDomainResponseDto } from '../domain/dto/MenuDomainResponseDto';
import { MenuDto } from '../domain/dto/MenuDto';
import { MenuResponseDto } from '../domain/dto/MenuResponseDto';
import { MenuDomainsReponseDto } from '../domain/dto/MenuDomainsReponseDto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  public async findMenusByDomainId(id?: string) {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.menuDomain.findMenusByDomainId}${id}`;
    return (await firstValueFrom(this.httpClient.get<MenusDomainResponseDto>(url))).content;
  }

  public findMenuById(id: string): Observable<MenuResponseDto> {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.menu.findById}${id}`;
    return this.httpClient.get<MenuResponseDto>(url);
  }

  public findAllMenus(): Observable<MenusDomainResponseDto> {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.menu.findAllMenus}`;
    return this.httpClient.get<MenusDomainResponseDto>(url);
  }

  public findAllMenusWithChild(): Observable<MenusDomainResponseDto> {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.menu.findAllMenusWithChild}`;
    return this.httpClient.get<MenusDomainResponseDto>(url);
  }

  public findAllMenusDomain(): Observable<MenuDomainsReponseDto> {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.menuDomain.findAll}`;
    return this.httpClient.get<MenuDomainsReponseDto>(url);
  }
}
