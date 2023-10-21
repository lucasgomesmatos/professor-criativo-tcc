import { Button } from "@/components/base/button";
import { DialogBase } from "@/components/base/dialogBase";
import { useSendFeedbackRequest } from "@/services/courses/feedback";
import { useFeedbackStore } from "../../store/feedback";

export const RangeFeedback = () => {
  const {
    openDialogRangeFeedback,
    setOpenDialogRangeFeedback,
    setRating,
    rate,
  } = useFeedbackStore();
  const { isLoading, mutate } = useSendFeedbackRequest(
    setOpenDialogRangeFeedback
  );

  return (
    <DialogBase
      setOpenDialogBase={() => {
        setOpenDialogRangeFeedback();
        setRating(0);
      }}
      title=""
      isOpen={openDialogRangeFeedback}
    >
      <div className="p-6 text-center">
        <h1 className="mb-2 text-xl">Selecione sua avaliação:</h1>
        <div className="flex items-center justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              data-color={Boolean(star <= rate)}
              className={
                "cursor-pointer text-3xl text-gray-400  data-[color=true]:text-yellow-500"
              }
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        {rate > 0 && (
          <Button
            className="mt-6 flex h-16 w-full items-center justify-center"
            disabled={isLoading}
            loading={isLoading}
            onClick={() => mutate(rate)}
          >
            Confirmar
          </Button>
        )}
      </div>
    </DialogBase>
  );
};
