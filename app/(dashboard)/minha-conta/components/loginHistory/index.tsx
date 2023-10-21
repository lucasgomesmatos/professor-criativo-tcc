"use client";
import { formatDateLocaleBr } from "@/shared/utils/dateUtils/date";
import { Element } from "react-scroll";
import { useAccountUserStore } from "../../store";

export const LoginHistory = () => {
  const { account } = useAccountUserStore();

  return (
    <Element name="a4" className="rounded-md bg-gray-700 p-8">
      <h1 className="text-2xl font-bold">Histórico de Login</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="w-full rounded-md bg-gray-950 p-6">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-700 text-xs uppercase text-gray-50 max-[540px]:hidden">
              <tr>
                <th scope="col" className="rounded-tl-md px-6 py-3">
                  Quando
                </th>
                <th scope="col" className="px-6 py-3">
                  Ip
                </th>
                {/* <th scope="col" className="rounded-tr-md px-6 py-3">
                  Local
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-400 bg-gray-600 text-gray-50 hover:bg-gray-400 max-[540px]:flex max-[540px]:flex-col">
                <td className="px-6 py-4  max-[540px]:before:block max-[540px]:before:text-sm max-[540px]:before:text-gray-200 max-[540px]:before:content-['Quando']">
                  {formatDateLocaleBr(account?.last_authentication.date)}
                </td>
                <td className="px-6 py-4 max-[540px]:before:block max-[540px]:before:text-sm max-[540px]:before:text-gray-200 max-[540px]:before:content-['Ip']">
                  {account?.last_authentication.ip}
                </td>
                {/* <td className="px-6 py-4 max-[540px]:before:block max-[540px]:before:text-sm max-[540px]:before:text-gray-200 max-[540px]:before:content-['Local']">
                  Pavao | MG | BR
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Element>
  );
};
