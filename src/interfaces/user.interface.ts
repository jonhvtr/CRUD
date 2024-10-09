export interface User {
  id: string
  email: string
  name: string
  createAt: Date
  updateAt: Date
}

export interface UserCreate {
  email: string
  name: string
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
