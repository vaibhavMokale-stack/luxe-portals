import { useParams } from 'react-router-dom';
import { sampleProperties } from '@/data/properties';
import { MapPin, Bed, Bath, Square, Calendar, Car, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = sampleProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price?: number, monthlyRent?: number) => {
    if (monthlyRent) {
      return `$${monthlyRent.toLocaleString()}/month`;
    }
    if (price) {
      return `$${(price / 1000000).toFixed(2)} Million`;
    }
    return 'Price Upon Request';
  };

  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith('/src/assets/')) {
      const imageName = imagePath.split('/').pop();
      return `/src/assets/${imageName}`;
    }
    return imagePath;
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={getImageSrc(property.images[0])}
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Property Badge */}
        <div className="absolute top-8 left-8">
          <Badge className={`${
            property.status === 'For Sale' ? 'bg-primary/20 text-primary border-primary/30' :
            property.status === 'For Lease' ? 'bg-accent/20 text-accent border-accent/30' :
            property.status === 'Sold' ? 'bg-destructive/20 text-destructive border-destructive/30' :
            'bg-muted text-muted-foreground border-border'
          }`}>
            {property.status}
          </Badge>
        </div>

        {/* Property Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {property.address}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{property.neighborhood}, {property.city}</span>
            </div>
            <div className="text-3xl font-serif font-semibold text-primary">
              {formatPrice(property.price, property.monthlyRent)}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Facts Card */}
            <Card className="bg-background/95 backdrop-blur-md border-border mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold text-foreground">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold text-foreground">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-serif font-bold text-foreground">{property.sqft.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                  {property.lotSize && (
                    <div className="text-center">
                      <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-serif font-bold text-foreground">{property.lotSize}</div>
                      <div className="text-sm text-muted-foreground">Acres</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-gradient-card border-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">Property Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-gradient-card border-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Property Details */}
            <Card className="bg-gradient-card border-border mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground">Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Property Type</span>
                  <span className="text-foreground font-medium">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">MLS ID</span>
                  <span className="text-foreground font-medium">{property.mlsId}</span>
                </div>
                {property.yearBuilt && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year Built</span>
                    <span className="text-foreground font-medium">{property.yearBuilt}</span>
                  </div>
                )}
                {property.parkingSpaces && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Parking</span>
                    <span className="text-foreground font-medium">{property.parkingSpaces} spaces</span>
                  </div>
                )}
                {property.soldDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sold Date</span>
                    <span className="text-foreground font-medium">
                      {new Date(property.soldDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground">
                  Interested in {property.address.split(' ').slice(0, 2).join(' ')}?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="bg-background border-border"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="bg-background border-border"
                    />
                  </div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-background border-border"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-background border-border"
                  />
                  <Textarea 
                    placeholder="I'm interested in learning more about this property..."
                    className="bg-background border-border min-h-[100px]"
                  />
                  <Button className="w-full bg-gradient-luxury text-primary-foreground hover:shadow-gold">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="pt-6">
                <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Interactive Map</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-50">
          <Button className="w-full bg-gradient-luxury text-primary-foreground hover:shadow-gold">
            Schedule a Showing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;