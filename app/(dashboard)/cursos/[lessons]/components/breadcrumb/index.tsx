"use client";
import { capitalize } from "@/shared/utils/stringUtils/capitalize";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCoursesStore } from "../../../store";
import { useModulesStore } from "../../store";

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

  const { setUpdateDate } = useModulesStore();
  const { setUpdateDate: setUpdateDateCourse } = useCoursesStore();

  return (
    <div>
      <ol className="my-4 flex">
        {finalLinks.map((path, index) => (
          <div key={index} className="flex items-center">
            <li className="breadcrumb-item">
              {path.url ? (
                <Link
                  data-color={Boolean(index === paths.length - 1)}
                  className="ml-2 data-[color=true]:text-purple-300"
                  href={path.url}
                  onClick={() => {
                    setUpdateDateCourse();
                    setUpdateDate();
                  }}
                >
                  {path.label}
                </Link>
              ) : (
                <span className="text-purple-300">{path.label}</span>
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
