import {UserSchema} from "@entities/User";
import {LoginShema} from "@features/AuthByUsername";

export interface StateSchema  {
    user: UserSchema;
    loginForm: LoginShema
}