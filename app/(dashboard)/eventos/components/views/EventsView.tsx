"use client";
import { Button } from "@/components/base/button";
import { Card } from "@/components/base/card";
import { CardsSkeleton } from "@/components/base/cardSkeleton";
import { NoResult } from "@/components/base/noResult";
import { Pagination } from "@/components/base/pagination";
import { SeparatorBase } from "@/components/ui/separator";
import { useFetch } from "@/hooks/useFetch/useFetch";
import { getEvents } from "@/services/events";
import {
  Endpoint,
  Environment,
} from "@/shared/utils/axios/constants/environment";
import { limitString } from "@/shared/utils/stringUtils/limitString";
import { useFilterStore } from "@/store/filter";
import { EventRequest } from "@/types/response/event";
import { Calendar, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useEventsStore } from "../../store";
import { EventDialog } from "../eventDialog";

export const EventsView = () => {
  const { filter } = useFilterStore();
  const { setEvents, events, setOpenDialogEvent } = useEventsStore();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useFetch<EventRequest>(
    Endpoint.EVENTS,
    () => getEvents(filter, currentPage),
    filter,
    currentPage
  );

  useEffect(() => {
    if (error instanceof Error) {
      toast.error("Erro de conexão");
      return;
    }
    setEvents(data?.data);
  }, [data, setEvents, error]);

  const showNoResult = !isLoading && !events?.length;

  return (
    <div className="container">
      <div className="mb-24 mt-56 flex flex-wrap justify-center gap-4">
        {showNoResult && <NoResult />}
        {isLoading ? (
          <CardsSkeleton />
        ) : (
          events?.map((event) => (
            <div key={event.id}>
              <Card.Root>
                <Card.HeaderBase className="h-10">
                  <CalendarDays className="h-9 w-9 text-purple-400 group-hover:text-purple-300 " />
                </Card.HeaderBase>
                <Card.Content>
                  <div className="flex items-center gap-4">
                    <SeparatorBase
                      className="h-8 w-1 rounded bg-purple-400  group-hover:bg-purple-300"
                      orientation="vertical"
                    />
                    <p
                      data-size={Boolean(event.name.length > 60)}
                      className="text-base font-semibold tracking-wide data-[size=true]:text-sm"
                    >
                      {limitString(event.name, 80)}
                    </p>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button
                    onClick={() => setOpenDialogEvent(event, true)}
                    className="flex items-center justify-center gap-4 p-4"
                  >
                    <Calendar className="h-5 w-5" /> Ver mais
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
      <EventDialog />
    </div>
  );
};
