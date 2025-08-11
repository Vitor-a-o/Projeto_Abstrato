import { User } from "src/entities/User";
export interface IUserRepository {
    create(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    list(params: {
        skip: number;
        take: number;
    }): Promise<User[]>;
    count(): Promise<number>;
}
export declare const IUSER_REPOSITORY: unique symbol;
