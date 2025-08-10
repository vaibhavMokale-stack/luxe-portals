import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterState } from '@/types/property';

interface SearchFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  resultCount: number;
}

const SearchFilters = ({ filters, onFiltersChange, resultCount }: SearchFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: '',
      priceMin: 0,
      priceMax: 50000000,
      beds: 0,
      baths: 0,
      propertyType: 'any',
      status: 'any',
    });
  };

  const hasActiveFilters = filters.searchTerm || 
    filters.priceMin > 0 || 
    filters.priceMax < 50000000 || 
    filters.beds > 0 || 
    filters.baths > 0 || 
    (filters.propertyType && filters.propertyType !== 'any') || 
    (filters.status && filters.status !== 'any');

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search by address, neighborhood, or MLS ID..."
          className="pl-10 bg-background border-border"
          value={filters.searchTerm}
          onChange={(e) => updateFilter('searchTerm', e.target.value)}
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-foreground hover:text-primary"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </Button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {resultCount} {resultCount === 1 ? 'property' : 'properties'}
          </span>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 pt-4 border-t border-border">
          {/* Price Range */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={filters.priceMin || ''}
                onChange={(e) => updateFilter('priceMin', Number(e.target.value) || 0)}
                className="bg-background"
              />
              <Input
                type="number"
                placeholder="Max"
                value={filters.priceMax === 50000000 ? '' : filters.priceMax}
                onChange={(e) => updateFilter('priceMax', Number(e.target.value) || 50000000)}
                className="bg-background"
              />
            </div>
          </div>

          {/* Beds */}
          <div>
            <label className="block text-sm font-medium mb-2">Min Beds</label>
            <Select value={filters.beds.toString()} onValueChange={(value) => updateFilter('beds', Number(value))}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Baths */}
          <div>
            <label className="block text-sm font-medium mb-2">Min Baths</label>
            <Select value={filters.baths.toString()} onValueChange={(value) => updateFilter('baths', Number(value))}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Property Type</label>
            <Select value={filters.propertyType} onValueChange={(value) => updateFilter('propertyType', value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="Single Family">Single Family</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="Townhouse">Townhouse</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
                <SelectItem value="Multi-Unit">Multi-Unit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="For Sale">For Sale</SelectItem>
                <SelectItem value="For Lease">For Lease</SelectItem>
                <SelectItem value="Sold">Sold</SelectItem>
                <SelectItem value="Active Under Contract">Under Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;