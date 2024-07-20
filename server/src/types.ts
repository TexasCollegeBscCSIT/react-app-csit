import { Request } from "express";

export interface RequestWithUserObject extends Request {
    user: UserJWTPayload
  }

  export interface UserJWTPayload {
      email: string;
      password: string;
      isAdmin: boolean
  }