import { Link } from 'react-router-dom';
import { Property } from '@/types/property';
import { MapPin, Bed, Bath, Square, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price?: number, monthlyRent?: number) => {
    if (monthlyRent) {
      return `$${monthlyRent.toLocaleString()}/mo`;
    }
    if (price) {
      return `$${(price / 1000000).toFixed(2)}M`;
    }
    return 'Price Upon Request';
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      'For Sale': 'bg-primary/20 text-primary border-primary/30',
      'For Lease': 'bg-accent/20 text-accent border-accent/30',
      'Sold': 'bg-destructive/20 text-destructive border-destructive/30',
      'Active Under Contract': 'bg-muted text-muted-foreground border-border',
    };
    return variants[status] || variants['For Sale'];
  };

  // Import the image dynamically
  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith('/src/assets/')) {
      const imageName = imagePath.split('/').pop();
      return `/src/assets/${imageName}`;
    }
    return imagePath;
  };

  return (
    <Link to={`/property/${property.id}`} className="block group">
      <div className="property-card bg-gradient-card rounded-xl overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={getImageSrc(property.images[0])}
            alt={property.address}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="property-card-overlay">
            <Button 
              variant="secondary" 
              className="bg-background/90 text-foreground hover:bg-background/100 border border-border/50"
            >
              View Property
            </Button>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={getStatusBadge(property.status)}>
              {property.status}
            </Badge>
          </div>

          {/* Sold Date */}
          {property.soldDate && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/90 text-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                Sold {new Date(property.soldDate).toLocaleDateString()}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price */}
          <div className="mb-3">
            <span className="text-2xl font-serif font-semibold text-primary">
              {formatPrice(property.price, property.monthlyRent)}
            </span>
          </div>

          {/* Address */}
          <div className="mb-4">
            <div className="flex items-start gap-2 text-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div>
                <div className="font-medium">{property.address}</div>
                <div className="text-sm text-muted-foreground">
                  {property.neighborhood}, {property.city}
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.beds}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.baths}</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-4 h-4" />
                <span>{property.sqft.toLocaleString()} sq ft</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="mt-3 pt-3 border-t border-border">
            <span className="text-xs text-muted-foreground font-medium">
              {property.propertyType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;