// src/store/features/auth/types.ts

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  lastLogin: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  MODERATOR = "MODERATOR",
}

export enum Permission {
  READ = "READ",
  WRITE = "WRITE",
  DELETE = "DELETE",
  MANAGE_USERS = "MANAGE_USERS",
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}
