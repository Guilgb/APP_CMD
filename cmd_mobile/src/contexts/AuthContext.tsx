import { createContext, useState } from 'react';
import { UserDTO } from '../dtos/UserDTO';
import { api } from '../service/api';

export type AuthContextDataProps ={
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    async function signIn(email: string, password: string) {
        try {
            const { data } = await api.post('/auth', {email, password});
            console.log(data);
        if(data.email){
            setUser(data);
        }

        } catch (error) {
            throw new Error('Email ou senha inválidos');
        }
    }
    return (
        <AuthContext.Provider value={{user, signIn}}>
                {children}
            </AuthContext.Provider>
    )
}