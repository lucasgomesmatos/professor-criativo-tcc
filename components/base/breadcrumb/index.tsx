"use client";
import { capitalize } from "@/shared/utils/stringUtils/capitalize";
import { useFilterStore } from "@/store/filter";
import { ChevronRight, Inspect } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((item) => item.length);

  const finalLinks = paths.map((path, index, array) => {
    const currentPath = array.slice(0, index + 1).join("/");
    const href = `/${currentPath}`;
    const label = capitalize(decodeURIComponent(path));

    return {
      url: href,
      label: label,
    };
  });

  const { setFilter } = useFilterStore();

  return (
    <div>
      <ol className="my-2 flex">
        {finalLinks.map((path, index) => (
          <div key={index} className="flex items-center">
            {index === 0 && (
              <Inspect
                data-color={Boolean(index === paths.length - 1)}
                className="h-5 w-5 data-[color=true]:text-purple-300"
              />
            )}
            <li className="breadcrumb-item">
              {path.url && (
                <Link
                  onClick={() => {
                    setFilter(null);
                  }}
                  data-color={Boolean(index === paths.length - 1)}
                  className="ml-2 font-medium hover:text-purple-300 data-[color=true]:text-purple-300"
                  href={path.url}
                >
                  {path.label}
                </Link>
              )}
            </li>
            {index !== paths.length - 1 && (
              <li className="breadcrumb-separator">
                <ChevronRight className="ml-2 h-4 w-4" />
              </li>
            )}
          </div>
        ))}
      </ol>
    </div>
  );
};
