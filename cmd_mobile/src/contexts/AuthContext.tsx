import { createContext, useEffect, useState } from 'react';
import { UserDTO } from '../dtos/UserDTO';
import { api } from '../service/api';
import { UserCreateStorage, UserGetStorage, UserDeleteStorage } from '../storage/user/userCreate';
export type AuthContextDataProps ={
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isUserLoadingStorageData: boolean;
}

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isUserLoadingStorageData, setIsUserLoadingStorageData] = useState(true);

    async function signIn(email: string, password: string) {
        try {
            const { data } = await api.post('/auth', {email, password});
            console.log(data);
        if(data.email){
            setUser(data);
            UserCreateStorage(data);
        }

        } catch (error) {
            throw new Error('Email ou senha inválidos');
        }
    }

    async function signOut() {
        try {
            setIsUserLoadingStorageData(true);
            setUser({} as UserDTO);
            await UserDeleteStorage();
        } catch (error) {
            throw new Error('Erro ao deslogar');
        }finally{
            setIsUserLoadingStorageData(false);
        }
    }

    async function loadUserStorageData() {
        try {
            const userLogged = await UserGetStorage();
            if (userLogged) {
                setUser(userLogged);
                setIsUserLoadingStorageData(false);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsUserLoadingStorageData(false);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);
    return (
        <AuthContext.Provider value={
                {
                    user,
                    signIn,
                    signOut,
                    isUserLoadingStorageData
                }
            }>
                {children}
            </AuthContext.Provider>
    )
}