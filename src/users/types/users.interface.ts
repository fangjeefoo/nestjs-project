export type User = {
  userId: number;
  username: string;
  password: string;
  roles: Role[];
};

export enum Role {
  User = "user",
  Admin = "admin",
}
