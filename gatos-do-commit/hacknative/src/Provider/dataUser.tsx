import { createContext, useState, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

interface IDataContext {
  dataForm: any;
  setDataForm: any;
}

export const DataFormContext = createContext<IDataContext>({} as IDataContext);

const DataFormProvider = ({ children }: IChildren) => {
  const [dataForm, setDataForm] = useState();

  return (
    <DataFormContext.Provider value={{ dataForm, setDataForm }}>
      {children}
    </DataFormContext.Provider>
  );
};

export { DataFormProvider };
