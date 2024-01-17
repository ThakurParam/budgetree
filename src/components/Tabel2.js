import React from "react";
import { Tabel } from "./Tabel";
import { transactions } from "../Arrays/transactions";

export const Tabel2 = () => {
  return (
    <div>
      <Tabel transactions={transactions} />
    </div>
  );
};
