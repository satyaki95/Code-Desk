import React from 'react';

export interface DarkModeType {
    isDarkModeOn : boolean;
    setIsDarkModeOn : (newState : any) => any;
}

export const DarkModeContext = React.createContext<DarkModeType| null>(null);

export default function DarkModeProvider({children} : {children :any}){
    const initialValue = false;

const [isDarkModeOn, setIsDarkModeOn] = React.useState(initialValue);


return (
    <DarkModeContext.Provider value={{isDarkModeOn, setIsDarkModeOn}}>
      {children}
    </DarkModeContext.Provider>
  );
}