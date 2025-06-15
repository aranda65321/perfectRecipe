import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DomainDto } from '../domain/dto/DomainDto';
import { DomainResponseDto } from '../domain/dto/DomainResponseDto';
import { DomainsResponseDto } from '../domain/dto/DomainsResponseDto';

@Injectable({
  providedIn: 'root'
})
export class DomainConfigurationService {

  constructor(private httpClient: HttpClient) { }

  public async getDomainConfiguration(): Promise<DomainDto> {
    return await this.findDomainByIdAsync(environment.configuration.domain.id);
  }

  public findAllDomains(): Observable<DomainsResponseDto> {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.domain.findAll}`;
    return this.httpClient.get<DomainsResponseDto>(url);
  }

  public async findDomainByIdAsync(id: string) {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.domain.findDomainById}${id}`;
    return (await firstValueFrom(this.httpClient.get<DomainResponseDto>(url))).content;
  }

  public findDomainById(id: string) {
    let url = `${environment.services.hubPortalApi.host}${environment.services.hubPortalApi.endpoints.domain.findDomainById}${id}`;
    return this.httpClient.get<DomainResponseDto>(url);
  }

}
