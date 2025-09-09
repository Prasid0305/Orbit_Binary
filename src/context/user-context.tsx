
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type User = {
    firstName: string;
    lastName: string;
    experience: string;
    position: string;
    team: string;
};

type UserContextType = {
    user: User;
    setUser: (user: User) => void;
    loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const getInitialState = (): User => ({
    firstName: '',
    lastName: '',
    experience: '',
    position: '',
    team: '',
});

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUserState] = useState<User>(getInitialState);
    const [loading, setLoading] = useState(true); // Start in a loading state

    useEffect(() => {
        try {
            const item = window.localStorage.getItem('user');
            if (item) {
                setUserState(JSON.parse(item));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
        } finally {
            setLoading(false); // Stop loading once done
        }
    }, []);

    const setUser = (newUser: User) => {
        try {
            setUserState(newUser);
            window.localStorage.setItem('user', JSON.stringify(newUser));
        } catch (error) {
            console.error("Failed to save user to localStorage", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
