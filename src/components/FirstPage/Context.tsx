import React from 'react';


interface Context {
  selectedHashLink: string,
  setSelectedHasLink: React.Dispatch<React.SetStateAction<string>>

}
export const Context = React.createContext<Context>(null as any)

export const ContextProvider: React.FC = (props) => {
  const [selectedHashLink, setSelectedHasLink] = React.useState('')

  const value = {
    selectedHashLink,
    setSelectedHasLink,
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};