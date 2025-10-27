/**
 * MALDIVES RESORTS DATA INDEX
 * 
 * NEW STRUCTURE (for efficiency):
 * - New resorts should be created in src/data/resorts/[slug].ts
 * - Import and add them to the maldivesResorts object below
 * - This reduces file size and credit usage for future edits
 * 
 * MIGRATION PLAN:
 * - Existing resorts remain inline for now
 * - Will be gradually migrated to individual files as needed
 */

import heroImage from "@/assets/maldives-hero-latest.avif";
import adaaranOverwaterVillasAerial from "@/assets/adaaran-select/overwater-villas-aerial.jpg";

// New modular imports (add new resorts here)
import intercontinentalMaldives from "./resorts/intercontinental-maldives";
import oneAndOnlyReethiRah from "./resorts/one-and-only-reethi-rah";
import patinaMaldives from "./resorts/patina-maldives";
import radissonBlu from "./resorts/radisson-blu";
import ritzCarltonMaldives from "./resorts/ritz-carlton-maldives";
import sixSensesKanuhura from "./resorts/six-senses-kanuhura";
import sixSensesLaamu from "./resorts/six-senses-laamu";
import siyamWorld from "./resorts/siyam-world";
import soMaldives from "./resorts/so-maldives";
import sonevaJani from "./resorts/soneva-jani";
import sonevaFushi from "./resorts/soneva-fushi";
import sonevaSecret from "./resorts/soneva-secret";
import theNautilus from "./resorts/the-nautilus";
import vakkaruMaldives from "./resorts/vakkaru-maldives";
import velaaPrivateIsland from "./resorts/velaa-private-island";
import waldorfAstoriaMaldives from "./resorts/waldorf-astoria-maldives";
import youAndMeByCocoon from "./resorts/you-and-me-by-cocoon";
import giliLankanfushi from "./resorts/gili-lankanfushi";
import kudadoo from "./resorts/kudadoo";
import joaliBeing from "./resorts/joali-being";
import conradMaldives from "./resorts/conrad-maldives";
import anantaraKihavah from "./resorts/anantara-kihavah";
import fourSeasonsKudaHuraa from "./resorts/four-seasons-kuda-huraa";
import fourSeasonsLandaaGiraavaru from "./resorts/four-seasons-landaa-giraavaru";
import chevalBlancRandheli from "./resorts/cheval-blanc-randheli";
import joaliMaldives from "./resorts/joali-maldives";
import niyamaPrivateIslands from "./resorts/niyama-private-islands";
import adaaranSelect from "./resorts/adaaran-select";
import amillaMaldives from "./resorts/amilla-maldives";
import anantaraDhigu from "./resorts/anantara-dhigu";
import ayadaMaldives from "./resorts/ayada-maldives";
import comoMaalifushi from "./resorts/como-maalifushi";
import emeraldFaarufushi from "./resorts/emerald-faarufushi";
import emeraldMaldives from "./resorts/emerald-maldives";
import fairmontMaldives from "./resorts/fairmont-maldives";
import finolhu from "./resorts/finolhu";
import hardRock from "./resorts/hard-rock";
import heritanceAarah from "./resorts/heritance-aarah";
import hideawayBeachResort from "./resorts/hideaway-beach-resort";
import hurawalhiIsland from "./resorts/hurawalhi-island";
import huvafenFushi from "./resorts/huvafen-fushi";
import iruVeli from "./resorts/iru-veli";
import jawakaraIslands from "./resorts/jawakara-islands";
import jwMarriottMaldives from "./resorts/jw-marriott-maldives";
import leMeridien from "./resorts/le-meridien";
import milaidhooIsland from "./resorts/milaidhoo-island";
import nooeMaldives from "./resorts/nooe-maldives";
import kudaVillingili from "./resorts/kuda-villingili";
import kuredhivaru from "./resorts/kuredhivaru";
import adaaranBeachVillasAerial from "@/assets/adaaran-select/beach-villas-aerial.jpg";
import adaaranBuffetRestaurant from "@/assets/adaaran-select/buffet-restaurant.jpg";
import adaaranSunsetVillaInterior from "@/assets/adaaran-select/sunset-villa-interior.jpg";
import adaaranDivingCoralReef from "@/assets/adaaran-select/diving-coral-reef.jpg";
import adaaranVillaBathroomOceanView from "@/assets/adaaran-select/villa-bathroom-ocean-view.jpg";
import adaaranMainRestaurantInterior from "@/assets/adaaran-select/main-restaurant-interior.jpg";
import adaaranSunsetWaterVillaRoom from "@/assets/adaaran-select/sunset-water-villa-room.jpg";
import adaaranResortAerialPool from "@/assets/adaaran-select/resort-aerial-pool.jpg";
import adaaranIslandAerialView from "@/assets/adaaran-select/island-aerial-view.jpg";

export interface ResortData {
  slug: string;
  name: string;
  rating: number;
  location: string;
  transferTime: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHighlights: string[];
  seoTitle: string;
  seoDescription: string;
  about: string;
  sections: Array<{
    id: string;
    title: string;
    subtitle?: string;
    type: 'list' | 'cards' | 'text' | 'two-column';
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
      badge?: string;
      items?: string[];
    }>;
    content?: string;
  }>;
  accommodations: {
    title: string;
    description: string;
    types: Array<{
      name: string;
      size: string;
      beds: string;
      maxOccupancy: string;
      features: string[];
    }>;
  };
  pricing: {
    seasons: Array<{
      name: string;
      period: string;
      priceText: string;
      priceSubtext?: string;
    }>;
    paymentTerms: string[];
    cancellationPolicy: string;
    notes?: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const maldivesResorts: Record<string, ResortData> = {
  "ayada-maldives": ayadaMaldives,
  "amilla-maldives": amillaMaldives,
  "adaaran-select": adaaranSelect,
  "anantara-dhigu": anantaraDhigu,
  "anantara-kihavah": anantaraKihavah,
  "cheval-blanc-randheli": chevalBlancRandheli,
  "como-maalifushi": comoMaalifushi,
  "conrad-maldives": conradMaldives,
  "emerald-maldives": emeraldMaldives,
  "emerald-faarufushi": emeraldFaarufushi,
  "fairmont-maldives": fairmontMaldives,
  "four-seasons-kuda": fourSeasonsKudaHuraa,
  "four-seasons-landaa": fourSeasonsLandaaGiraavaru,
  "finolhu": finolhu,
  "gili-lankanfushi": giliLankanfushi,
  "hard-rock": hardRock,
  "heritance-aarah": heritanceAarah,
  "hideaway-beach-resort": hideawayBeachResort,
  "hurawalhi-island": hurawalhiIsland,
  "huvafen-fushi": huvafenFushi,
  "iru-veli": iruVeli,
  "jawakara-islands": jawakaraIslands,
  "le-meridien": leMeridien,
  "milaidhoo-island": milaidhooIsland,
  "niyama-private-islands": niyamaPrivateIslands,
  "nooe-maldives": nooeMaldives,
  "joali-being": joaliBeing,
  "joali-maldives": joaliMaldives,
  "jw-marriott-maldives": jwMarriottMaldives,
  "kuda-villingili": kudaVillingili,
  "kudadoo": kudadoo,
  "kuredhivaru": kuredhivaru,
  // New modular resorts (from individual files)
  [oneAndOnlyReethiRah.slug]: oneAndOnlyReethiRah,
  [patinaMaldives.slug]: patinaMaldives,
  [radissonBlu.slug]: radissonBlu,
  [ritzCarltonMaldives.slug]: ritzCarltonMaldives,
  [sixSensesKanuhura.slug]: sixSensesKanuhura,
  [sixSensesLaamu.slug]: sixSensesLaamu,
  [siyamWorld.slug]: siyamWorld,
  [sonevaJani.slug]: sonevaJani,
  [sonevaFushi.slug]: sonevaFushi,
  [sonevaSecret.slug]: sonevaSecret,
  [theNautilus.slug]: theNautilus,
  [vakkaruMaldives.slug]: vakkaruMaldives,
  [velaaPrivateIsland.slug]: velaaPrivateIsland,
  [waldorfAstoriaMaldives.slug]: waldorfAstoriaMaldives,
  [youAndMeByCocoon.slug]: youAndMeByCocoon,
  [intercontinentalMaldives.slug]: intercontinentalMaldives,
  [soMaldives.slug]: soMaldives
};
