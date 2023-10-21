import { SearchBar } from "@/components/base/searchBar";
import { ActivitiesView } from "../components/views/ActivitiesView";

export default function Activities() {
  return (
    <div className="overflow-hidden">
      <SearchBar />
      <ActivitiesView />
    </div>
  );
}
