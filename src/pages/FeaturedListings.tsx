import { useState, useMemo } from 'react';
import { sampleProperties } from '@/data/properties';
import { FilterState } from '@/types/property';
import SearchFilters from '@/components/SearchFilters';
import PropertyCard from '@/components/PropertyCard';

const FeaturedListings = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    priceMin: 0,
    priceMax: 50000000,
    beds: 0,
    baths: 0,
    propertyType: '',
    status: '',
  });

  const filteredProperties = useMemo(() => {
    return sampleProperties.filter(property => {
      // Search term
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          property.address.toLowerCase().includes(searchLower) ||
          property.neighborhood.toLowerCase().includes(searchLower) ||
          property.city.toLowerCase().includes(searchLower) ||
          property.mlsId.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Price range
      const propertyPrice = property.price || property.monthlyRent || 0;
      if (propertyPrice < filters.priceMin || propertyPrice > filters.priceMax) {
        return false;
      }

      // Beds and baths
      if (filters.beds > 0 && property.beds < filters.beds) return false;
      if (filters.baths > 0 && property.baths < filters.baths) return false;

      // Property type
      if (filters.propertyType && property.propertyType !== filters.propertyType) {
        return false;
      }

      // Status
      if (filters.status && property.status !== filters.status) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Representation for
            <span className="block text-primary">Exceptional Properties</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discreet service, rigorous market intelligence, and design-forward presentation.
          </p>
        </div>

        {/* Search & Filters */}
    <div className="max-w-screen-xl mx-auto px-4 overflow-hidden">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-5">
        {/* Make SearchFilters a child grid so it stacks on mobile */}
        <div className="grid gap-3 md:grid-cols-[1fr,auto] md:items-center">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            resultCount={filteredProperties.length}
          />
        </div>
      </div>
    </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                No Properties Found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or clearing the filters to see more properties.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;
