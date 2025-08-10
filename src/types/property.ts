export interface Property {
  id: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  price?: number;
  monthlyRent?: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: number;
  propertyType: 'Single Family' | 'Condo' | 'Townhouse' | 'Land' | 'Multi-Unit';
  status: 'For Sale' | 'For Lease' | 'Sold' | 'Active Under Contract';
  mlsId: string;
  images: string[];
  description: string;
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  soldDate?: string;
  yearBuilt?: number;
  parkingSpaces?: number;
  hasPool?: boolean;
  hasView?: boolean;
}

export interface FilterState {
  searchTerm: string;
  priceMin: number;
  priceMax: number;
  beds: number;
  baths: number;
  propertyType: string;
  status: string;
}