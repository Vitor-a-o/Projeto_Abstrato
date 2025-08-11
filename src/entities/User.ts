import {v4 as uuid} from 'uuid';

type UserProps = {
    name: string;
    email: string;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class User{
    public readonly id: string;
    public name: string;
    public email: string;
    public readonly createdAt: Date;
    public updatedAt: Date;

    constructor(props: UserProps) {
        this.id = props.id ?? uuid();
        this.name = props.name;
        this.email = props.email;
        this.createdAt = props.createdAt ?? new Date();
        this.updatedAt = props.updatedAt ?? new Date();
    }
}