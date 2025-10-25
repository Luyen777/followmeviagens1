import { SearchResult } from "@/services/searchService";
import SearchResultItem from "@/components/SearchResultItem";

interface SearchResultsProps {
  results: SearchResult[];
  isSearching: boolean;
  onResultClick: (slug: string) => void;
}

const SearchResults = ({
  results,
  isSearching,
  onResultClick,
}: SearchResultsProps) => {
  if (isSearching) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-xl p-4 z-50">
        <p className="text-sm text-muted-foreground text-center">
          Buscando...
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-xl p-4 z-50">
        <p className="text-sm text-muted-foreground text-center">
          Nenhum resort encontrado. Tente outra busca.
        </p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50">
      <div className="max-h-[400px] overflow-y-auto">
        {results.map((result) => (
          <SearchResultItem
            key={result.slug}
            result={result}
            onClick={() => onResultClick(result.slug)}
          />
        ))}
      </div>
      <div className="border-t border-border p-2 bg-muted/30">
        <p className="text-xs text-muted-foreground text-center">
          Pressione Enter para ir ao primeiro resultado
        </p>
      </div>
    </div>
  );
};

export default SearchResults;
