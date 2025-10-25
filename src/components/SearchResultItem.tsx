import { Star } from "lucide-react";
import { SearchResult } from "@/services/searchService";

interface SearchResultItemProps {
  result: SearchResult;
  onClick: () => void;
}

const SearchResultItem = ({ result, onClick }: SearchResultItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors text-left group"
    >
      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
        <img
          src={result.image}
          alt={result.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-foreground truncate">
          {result.name}
        </h4>
        <p className="text-xs text-muted-foreground truncate">
          {result.subtitle}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: result.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 fill-amber-500 text-amber-500"
            />
          ))}
        </div>
      </div>
    </button>
  );
};

export default SearchResultItem;
