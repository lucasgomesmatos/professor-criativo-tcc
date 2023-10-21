"use client";
import { Breadcrumb } from "@/components/base/breadcrumb";
import { TextInputBase } from "@/components/base/forms/textInput";
import { useDebounce } from "@/hooks/useDebouce/useDebouse";
import { useFilterStore } from "@/store/filter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
const requestSearchFormValidationSchema = zod.object({
  search: zod.string(),
});

type SearchFormData = zod.infer<typeof requestSearchFormValidationSchema>;

export const SearchBar = () => {
  const pathname = useRouter();
  const { setFilter } = useFilterStore();

  const userRequestForm = useForm<SearchFormData>({
    resolver: zodResolver(requestSearchFormValidationSchema),
  });

  const { register, watch } = userRequestForm;
  const search = watch("search");
  const filter = useDebounce(2000, search);

  useEffect(() => {
    if (pathname) setFilter(null);
  }, [pathname, setFilter]);

  useEffect(() => {
    setFilter(filter);
  }, [filter, setFilter]);

  return (
    <div className="fixed z-10  w-full border-b border-solid border-gray-500 bg-gray-900 p-8 ">
      <div className="container gap-4">
        <div className="flex items-center gap-4">
          <Breadcrumb />
        </div>
        <TextInputBase
          id="search"
          label=""
          className="border-none pr-4 focus-within:bg-black "
          placeholder="Pesquisar..."
          type="text"
          icon={Search}
          {...register("search")}
          classNameIcon="text-white group-focus-within:text-purple-300"
        />
      </div>
    </div>
  );
};
