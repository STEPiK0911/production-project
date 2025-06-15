import {Country, Currency} from "@shared/common/common";

export interface IProfile {
     "first": string,
     "lastname": string,
     "age": number,
     "currency": Currency,
     "country": Country,
     "city": string,
     "username": string,
     "avatar": string
 }

 export interface IProfileShema {
     data?: IProfile;
     isLoading: boolean;
     error?: string;
     readonly: boolean;
 }