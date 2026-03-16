import fs from 'fs';
import path from 'path';

export type UserCredentials = {
  username: string;
  password: string;
};

const usersPath = path.resolve(__dirname, '../data/users.json');

export function loadUsers(): UserCredentials[] {
  const raw = fs.readFileSync(usersPath, 'utf-8');
  return JSON.parse(raw) as UserCredentials[];
}

export function getUser(username: string): UserCredentials {
  const users = loadUsers();
  const user = users.find((u) => u.username === username);
  if (!user) {
    throw new Error(`User not found: ${username}`);
  }
  return user;
}
