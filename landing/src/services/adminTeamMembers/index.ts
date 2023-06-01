import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { ITeamMembers } from "../../types/Admin/Response.types";

export class AdminTeamMembers {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getTeamMembers() {
    return this.httpService.get<ITeamMembers>("api/team-members");
  }
  
  public updateTeamMembers(data: ITeamMembers) {
    return this.httpService.put("api/team-members", data);
  }
}

const factory = new HttpServiceFactory();
export const adminTeamMembers = new AdminTeamMembers(
  factory.createAuthHttpService()
);
