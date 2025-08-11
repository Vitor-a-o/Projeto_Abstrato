type UserProps = {
    name: string;
    email: string;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare class User {
    readonly id: string;
    name: string;
    email: string;
    readonly createdAt: Date;
    updatedAt: Date;
    constructor(props: UserProps);
}
export {};
