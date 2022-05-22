import {Role} from "./role.enum";


export interface User {
  id?:number;
  username:string;
  firstName: string;
  lastName: string;
  password:string;
  roles: string[] ;
  accessToken?:string ;


}
