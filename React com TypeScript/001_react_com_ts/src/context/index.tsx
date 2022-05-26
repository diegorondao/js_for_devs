import { createContext } from 'react';

export interface IAppContext {
    language: string,
    framework: string,
    projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

//Valor compartilhado entre todos os componentes
export const contextValue: IAppContext = {
    language:  "Javascript",
    framework: "Express",
    projects:  10
};  