"use client";

import { Button } from "@/components/base/button";
import { Card } from "@/components/base/card";
import { CardsSkeleton } from "@/components/base/cardSkeleton";
import { NoResult } from "@/components/base/noResult";
import { Pagination } from "@/components/base/pagination";
import { SeparatorBase } from "@/components/ui/separator";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { getCourses } from "@/services/courses";
import { Environment } from "@/shared/utils/axios/constants/environment";
import { useFilterStore } from "@/store/filter";
import { Course, CourseRequest } from "@/types/response/course";
import { MonitorPlay, PlayCircleIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useModulesStore } from "../../[lessons]/store";
import { useCoursesStore } from "../../store";

export const CoursesView = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { filter } = useFilterStore();
  const { setCourses, courses, setCourseId, dateUpdate } = useCoursesStore();
  const { setReset } = useModulesStore();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useFetch<CourseRequest>(
    String(dateUpdate),
    () => getCourses(filter, currentPage),
    filter,
    currentPage
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }
    data && setCourses(data?.data);
    setReset();
  }, [data, setCourses, error, setReset]);

  useEffect(() => setReset(), [setReset, pathname]);

  const showNoResult = !isLoading && !courses?.length;

  const handleChangePushPage = (course: Course) => {
    setCourseId(course.id);
    push(`${pathname}/${course.slug}`);
  };

  return (
    <div className="container">
      <div className="mb-24 mt-56 flex flex-wrap justify-center gap-4">
        {showNoResult && <NoResult />}
        {isLoading ? (
          <CardsSkeleton />
        ) : (
          courses?.map((course) => (
            <div key={course.id}>
              <Card.Root>
                <Card.HeaderBase className="h-10">
                  <MonitorPlay className="h-9 w-9 text-purple-400 group-hover:text-purple-300 " />
                </Card.HeaderBase>
                <Card.Content>
                  <div className="flex items-center gap-4">
                    <SeparatorBase
                      className="h-8 w-1 rounded bg-purple-400  group-hover:bg-purple-300"
                      orientation="vertical"
                    />
                    <p
                      data-size={Boolean(course.name.length > 60)}
                      className="text-base font-semibold tracking-wide data-[size=true]:text-sm"
                    >
                      {course.name}
                    </p>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button
                    onClick={() => handleChangePushPage(course)}
                    className="flex items-center justify-center gap-4 p-4"
                  >
                    <PlayCircleIcon className="h-5 w-5" /> Acessar
                  </Button>
                </Card.Footer>
              </Card.Root>
            </div>
          ))
        )}
      </div>
      {data && data?.meta.last_page > 1 && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={Environment.LIMITE_DE_LINHAS}
          totalItems={data.meta.total}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
