import { useEffect, useState } from "react";

export const useSubFirstName = (fullName: string | undefined) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const subFirstName = (fullName: string) => {
      return fullName.slice(0, 2).toLocaleUpperCase();
    };

    if (fullName) {
      setName(subFirstName(fullName));
    }
  }, [fullName]);

  return name;
};
