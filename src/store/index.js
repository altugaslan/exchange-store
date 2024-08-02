import { createContext } from "react";

// Boş bir merkezi state oluşturur.
const StoreContext = createContext();

// Merkezi state başka componentlerden import edilebilmesi için export edilir.
export default StoreContext;
