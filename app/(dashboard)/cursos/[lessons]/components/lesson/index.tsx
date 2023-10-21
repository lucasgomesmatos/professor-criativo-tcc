import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export const Lesson = ({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) => {
  return (
    <button
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-gray-200 enabled:hover:text-gray-100 data-[active=true]:text-green-500"
      onClick={onPlay}
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-green-500" />
      ) : (
        <Video className="h-4 w-4 text-gray-200 " />
      )}

      <span className="w-40  text-left ">{title}</span>
      <span className="ml-auto font-mono text-xs text-gray-200 ">
        {duration}
      </span>
    </button>
  );
};
