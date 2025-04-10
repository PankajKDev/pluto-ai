import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section className="w-screen flex flex-col items-center  bg-gradient-to-b from-background/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Professionals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[800px]">
            See how Pluto AI has helped developers and tech professionals
            advance their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-muted p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    className="object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="relative flex-1">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                <blockquote className="pt-4 text-base text-left">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Join over 10,000+ developers who have transformed their careers with
            Pluto AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
