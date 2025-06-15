import {UserSchema} from "@entities/User";
import {LoginShema} from "@features/AuthByUsername";
import {IProfileShema} from "@entities/Profile";

export interface StateSchema  {
    user: UserSchema;
    loginForm: LoginShema
    profile: IProfileShema
}