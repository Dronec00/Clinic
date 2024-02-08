import React, { createContext, useState, useMemo } from 'react';

interface ItemType {
  value: string;
  href: string
};

interface ContextType {
  formState: boolean;
  formActive: () => void;
  formClose: () => void;
  items: ItemType[];
}

const Context = createContext<any>(null);

const Provider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [formState, setFormState] = useState<boolean>(false) 
    const formActive = () => {
        setFormState(true)
    }
    const formClose = () => {
        setFormState(false)
    }

    const items = useMemo<ItemType[]>(()=>{
        return [{value: 'О клинике', href: '/about'},
        {value: 'Услуги', href: '/service'}, 
        {value: 'Специалисты', href: '/specialists '}, 
        {value: 'Цены', href: '/price'}, 
        {value: 'Контакты', href: '/contacts'}]
    },[]) // кэширование навигации

  return (
    <Context.Provider value={{formState, formActive, formClose, items}}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };