import { ReactNode } from "react";
import { DataFormProvider } from "./dataUser";

interface IChildren {
  children: ReactNode;
}

const Providers = ({ children }: IChildren) => {
  return <DataFormProvider>{children}</DataFormProvider>;
};

export { Providers };
