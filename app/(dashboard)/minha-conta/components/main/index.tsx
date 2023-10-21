"use client";

import { DataUserAccess } from "../dataUserAccess";
import { DataUserAccount } from "../dataUserAccount";
import { LoginHistory } from "../loginHistory";
import { NavMenu } from "../navMenu";
import { Signature } from "../signature";

export const MainAccountUser = () => {
  return (
    <main>
      <div className="container">
        <div className="mt-10  flex w-full justify-between gap-5">
          <NavMenu />
          <div className="mb-[600px] ml-0 flex flex-1 flex-col gap-10 md:ml-52">
            <DataUserAccount />
            <DataUserAccess />
            <Signature />
            <LoginHistory />
          </div>
        </div>
      </div>
    </main>
  );
};
