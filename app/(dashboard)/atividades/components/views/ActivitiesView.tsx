"use client";
import { Button } from "@/components/base/button";
import { Card } from "@/components/base/card";
import { CardsSkeleton } from "@/components/base/cardSkeleton";
import { NoResult } from "@/components/base/noResult";
import { SeparatorBase } from "@/components/ui/separator";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { useIntersectionObserver } from "@/hooks/useObserve/useObserve";
import { getActivities } from "@/services/disciplines";
import { Endpoint } from "@/shared/utils/axios/constants/environment";
import { limitString } from "@/shared/utils/stringUtils/limitString";
import { useFilterStore } from "@/store/filter";
import { ActivityRequest } from "@/types/response/activity";
import { FileUp, TextSelect } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useActivitiesStore } from "../../[activities]/store";
import { useDisciplinesStore } from "../../store";
import { ActivityDialog } from "../activityDialog";

export const ActivitiesView = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { filter } = useFilterStore();
  const { disciplineId } = useDisciplinesStore();
  const { activities, setActivities, setOpenDialogActivity } =
    useActivitiesStore();

  const { data, isLoading, error, isFetching } = useFetch<ActivityRequest>(
    Endpoint.ACTIVITIES,
    () => getActivities(disciplineId, filter, currentPage),
    filter,
    currentPage
  );

  useEffect(() => {
    if (error || data instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }
    setActivities(data?.data);
  }, [data, setActivities, error]);

  const showNoResult = !isLoading && !data?.data?.length;

  const containerObserveScrollRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    containerRef: containerObserveScrollRef,
    setCurrentPage: setCurrentPage,
    data: data,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div
        data-loading={isLoading}
        className="mb-20 mt-56 flex  flex-wrap justify-center gap-4  data-[loading=true]:overflow-y-hidden"
      >
        {showNoResult && <NoResult />}
        {isLoading ? (
          <CardsSkeleton />
        ) : (
          activities?.map((activity) => (
            <div key={activity.id}>
              <Card.Root>
                <Card.HeaderBase className="h-10">
                  <TextSelect className="h-9 w-9 text-purple-400 group-hover:text-purple-300 " />
                </Card.HeaderBase>
                <Card.Content className="flex h-28 items-center ">
                  <div className="flex items-center gap-4">
                    <SeparatorBase
                      className="h-8 w-1 rounded bg-purple-400  group-hover:bg-purple-300"
                      orientation="vertical"
                    />
                    <p
                      data-size={Boolean(activity.name.length > 60)}
                      className="text-base font-semibold tracking-wide data-[size=true]:text-sm"
                    >
                      {limitString(activity.name, 80)}
                    </p>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button
                    onClick={() => setOpenDialogActivity(activity, true)}
                    className="flex items-center justify-center gap-4 p-4"
                  >
                    <FileUp className="h-5 w-5" /> Ver Mais
                  </Button>
                </Card.Footer>
              </Card.Root>
            </div>
          ))
        )}
      </div>
      <div className="mb-8 flex items-center justify-center p-4">
        {!isLoading && isFetching && <span> Carregando...</span>}
      </div>

      <div ref={containerObserveScrollRef} />
      <ActivityDialog />
    </div>
  );
};
