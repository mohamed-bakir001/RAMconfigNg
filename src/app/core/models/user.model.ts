import {Role} from "./role.enum";


export interface User {
  id:number;
  username:string;
  firstname: string;
  lastname: string;
  password:string;
  roles: Role[] ;

}
