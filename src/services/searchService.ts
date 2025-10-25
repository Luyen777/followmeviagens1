import { maldivesResorts } from "@/data/maldivesResorts";

export interface SearchResult {
  slug: string;
  name: string;
  subtitle: string;
  rating: number;
  image: string;
  routePath: string;
}

// Normalize text for search (lowercase, remove accents)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// Calculate relevance score for a resort based on search term
const calculateScore = (resort: any, normalizedTerm: string): number => {
  const normalizedName = normalizeText(resort.name);
  const normalizedTitle = normalizeText(resort.heroTitle || "");
  const normalizedSubtitle = normalizeText(resort.heroSubtitle || "");
  const normalizedLocation = normalizeText(resort.location || "");
  const normalizedHighlights = normalizeText(
    resort.heroHighlights?.join(" ") || ""
  );

  let score = 0;

  // Exact name match
  if (normalizedName === normalizedTerm) {
    score += 100;
  }
  // Name starts with term
  else if (normalizedName.startsWith(normalizedTerm)) {
    score += 80;
  }
  // Name contains term
  else if (normalizedName.includes(normalizedTerm)) {
    score += 60;
  }

  // Location or subtitle contains term
  if (
    normalizedLocation.includes(normalizedTerm) ||
    normalizedSubtitle.includes(normalizedTerm)
  ) {
    score += 40;
  }

  // Title or highlights contain term
  if (
    normalizedTitle.includes(normalizedTerm) ||
    normalizedHighlights.includes(normalizedTerm)
  ) {
    score += 30;
  }

  return score;
};

// Main search function
export const searchResorts = (searchTerm: string): SearchResult[] => {
  // Minimum 2 characters required
  if (!searchTerm || searchTerm.trim().length < 2) {
    return [];
  }

  const normalizedTerm = normalizeText(searchTerm.trim());

  // Convert maldivesResorts object to array with scores
  const resortsWithScores = Object.entries(maldivesResorts).map(
    ([slug, resort]) => ({
      slug,
      resort,
      score: calculateScore(resort, normalizedTerm),
    })
  );

  // Filter resorts with score > 0, sort by score, take top 5
  const results = resortsWithScores
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => ({
      slug: item.slug,
      name: item.resort.name,
      subtitle: item.resort.heroSubtitle || item.resort.location || "",
      rating: item.resort.rating || 5,
      image: item.resort.heroImage,
      routePath: `/ilhas-maldivas/${item.slug}`,
    }));

  return results;
};
