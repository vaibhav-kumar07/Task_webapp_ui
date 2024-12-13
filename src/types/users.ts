export interface IUser {
    _id: string;
    code: string;
    name: string;
    pin: string; // encrypted - 6 digits
    device_id?: string;
    is_active: boolean;
    forget_pin: boolean;
    registration_date?: Date;
    role: Role;
    created_by: string;
    created_at: string;
    updated_by: string;
    updated_at: string;
}

export enum Role {
    Owner = "OWNER",
    Admin = "ADMIN",
    Accountant = "ACCOUNTANT",
}

export interface UserParams {
    page?: number;
    rowsPerPage?: number;
    role?: Role;
    searchText?: string;
    isActive?: string;
    sortOrder?: string;
    sortColumn?: string;
}
