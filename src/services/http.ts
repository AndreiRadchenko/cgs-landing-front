import axios from 'axios';

export class HttpSerivce {
  baseUrl: string | undefined;
  fetchingService: any;

  constructor(baseUrl = "http://localhost:3000", fetchingService = axios) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      'Authorization': localStorage.getItem('token'),
    }
  }

  private getHeadersFromConfig(config: any) {
    return { headers: config.headers };
  }
  
  post(config: any, withAuth = true) { // while we don't have completed backend I use any, after I will make interfaces for res objects
      if (withAuth) {
        config.headers = {
          ...config.headers,
          ...this.populateTokenToHeaderConfig(),
        }
      }
    return this.fetchingService.post(this.getFullApiUrl(config.url), config.data, this.getHeadersFromConfig(config));
  }
}