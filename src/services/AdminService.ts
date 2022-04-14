import { IAdmin } from './../types/AdminAuth.types';
import { HttpSerivce } from './http';

export class AdminService extends HttpSerivce {
  constructor() {
    super();
  }

  authAdmin(data: IAdmin) {
    return this.post({
      url: 'auth',
      data,
    }, false)
  }
}