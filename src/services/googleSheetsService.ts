import { GOOGLE_SHEETS_CONFIG } from '@/config/googleSheets';

export interface PackageData {
  title: string;
  description: string;
  image: string;
  duration: string;
  destination: string;
  flightIncluded: string;
  validity: string;
  classification: string;
  mealPlan: string;
  referenceNumber: string;
  priceFrom: number;
  focusTags: string[];
  uniquePerk: string;
  slug: string;
}

export async function fetchResortsFromGoogleSheets(): Promise<PackageData[]> {
  const { API_KEY, SHEET_ID, SHEET_NAME, RANGE } = GOOGLE_SHEETS_CONFIG;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!${RANGE}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length <= 1) {
      throw new Error('No data found in sheet');
    }

    // Skip header row (index 0) and map data rows
    return rows.slice(1).map((row: string[]) => {
      const title = row[0] || '';
      // Generate slug from title if not provided
      const slug = (row[11] || title)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      return {
        title,
        mealPlan: row[1] || '', // Plano de Refeição
        description: row[2] || '', // Descrição Curta
        image: row[3] || '', // Imagem link
        classification: row[4] || '', // Classificação
        duration: row[5] || '', // Duração
        focusTags: row[6] ? row[6].split(',').map(tag => tag.trim()) : [], // Foco do Resort (tags)
        flightIncluded: row[7] || '', // Transfer de Malé
        uniquePerk: row[8] || '', // Diferencial Único
        referenceNumber: row[9] || '', // Ref.
        priceFrom: parseInt(row[10]) || 0, // Preço (convert to number)
        slug, // Generated or from column 11
        destination: 'Maldivas', // Default value
        validity: 'Consulte disponibilidade', // Default value
      };
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
}
