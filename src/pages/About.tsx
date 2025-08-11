import { Star, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '$2.3B+', label: 'Total Sales Volume', icon: TrendingUp },
    { number: '500+', label: 'Properties Sold', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '15+', label: 'Years Experience', icon: Users },
  ];

  const testimonials = [
    {
      quote: "Alexandra's attention to detail and market knowledge exceeded all expectations. She positioned our property perfectly and delivered exceptional results.",
      author: "Sarah Chen",
      role: "Beverly Hills Client",
      rating: 5
    },
    {
      quote: "Professional, discreet, and incredibly effective. Alexandra understood our unique requirements and found us the perfect home.",
      author: "Michael Rodriguez",
      role: "West Hollywood Client", 
      rating: 5
    },
    {
      quote: "Working with Alexandra was seamless from start to finish. Her network and negotiation skills are unmatched in the luxury market.",
      author: "Jennifer Walsh",
      role: "Sunset Strip Client",
      rating: 5
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
              Meet
              <span className="block text-primary">Alexandra Sterling</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Representing Los Angeles' most exceptional properties with uncompromising standards for quality, 
              discretion, and client service. Specializing in luxury residential sales and leasing across 
              Beverly Hills, West Hollywood, and the greater Los Angeles market.
            </p>
            <Button size="lg" className="bg-gradient-luxury text-primary-foreground hover:shadow-gold">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-card rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src="/listings/agent-portrait.jpg" 
                alt="Alexandra Sterling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-card border-border">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-serif font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
              Credentials & Recognition
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Licensed Real Estate Professional (DRE #01234567) with over 15 years of experience 
                in luxury residential markets. Member of the Beverly Hills Greater Los Angeles Association 
                of Realtors and the National Association of Realtors.
              </p>
              <p>
                Consistently ranked among the top 1% of luxury agents in Los Angeles County. 
                Recognized for excellence in client service and innovative marketing strategies 
                that maximize property exposure and value.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                Neighborhood Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Beverly Hills', 'West Hollywood', 'Sunset Strip', 'Hollywood Hills', 'Bel Air', 'Brentwood'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
              Concierge Services
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Property Preparation</h4>
                <p className="text-muted-foreground text-sm">
                  Professional staging, architectural photography, and marketing materials 
                  designed to showcase your property's unique character.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Market Intelligence</h4>
                <p className="text-muted-foreground text-sm">
                  Comprehensive market analysis, pricing strategies, and buyer insights 
                  to position your property for optimal results.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Exclusive Network</h4>
                <p className="text-muted-foreground text-sm">
                  Access to off-market opportunities and qualified buyers through 
                  established relationships with luxury brokers and private clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12 text-foreground">
            My Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to sell, lease, or acquire luxury real estate, 
            I'm here to provide the expertise and personalized service you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-luxury text-primary-foreground hover:shadow-gold">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
              View Properties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
