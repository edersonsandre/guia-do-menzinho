import { api } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  password?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ApiError {
  error: string;
}

// Criar novo usuário (cadastro)
export async function createUser(
  input: CreateUserInput
): Promise<User> {
  const response = await api.post<User>("/api/users", input);
  return response.data;
}

// Fazer login
export async function login(input: LoginInput): Promise<User> {
  const response = await api.post<User>("/api/users/login", input);
  return response.data;
}

// Listar todos os usuários
export async function getUsers(): Promise<User[]> {
  const response = await api.get<User[]>("/api/users");
  return response.data;
}

// Buscar usuário por ID
export async function getUserById(id: number): Promise<User> {
  const response = await api.get<User>(`/api/users/${id}`);
  return response.data;
}

// Atualizar usuário
export async function updateUser(
  id: number,
  input: UpdateUserInput
): Promise<User> {
  const response = await api.put<User>(`/api/users/${id}`, input);
  return response.data;
}

// Deletar usuário
export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/api/users/${id}`);
}

