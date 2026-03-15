export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
};

export type PublicUser = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type JWTPayload = {
  sub: string; // user id
  name: string;
  email: string;
  iat: number; // issued-at
  exp: number; // expiration time
};
