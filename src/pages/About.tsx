import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-western text-center mb-8 text-primary">
          About The Misfit Junkies
        </h1>
        
        <p className="text-xl text-center text-accent mb-16 font-body font-medium">
          Welcome to The Misfit Junkies
        </p>

        <div className="space-y-8">
          <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <h2 className="text-3xl font-western mb-4 text-primary">Our Story</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The Misfit Junkies was founded with a vision to create a few Ark Survival Ascended servers. Well one day we said lets make it a Multigame Community and here we are today we have 3 Ark Survival Ascended Severs got Valheim up and running.
            </p>
          </Card>

          <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <h2 className="text-3xl font-western mb-4 text-primary">Server Features</h2>
            <ul className="space-y-3 font-body text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Authentic Wild West setting with period-accurate locations and activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Custom scripts including ranching, mining, hunting, and trading systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Dynamic economy with player-driven businesses and markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Active law enforcement and outlaw factions for immersive conflict RP</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Regular events including showdowns, cattle drives, and town festivals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Experienced and dedicated staff team available 24/7</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <h2 className="text-3xl font-western mb-4 text-primary">Community Values</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              At The Misfit Junkies, we prioritize creating a welcoming and inclusive environment 
              where everyone can enjoy quality roleplay. We believe in:
            </p>
            <ul className="space-y-3 font-body text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Respectful and mature interactions between all community members</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Quality over quantity in roleplay scenarios</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Collaborative storytelling that enhances everyone's experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-2xl">•</span>
                <span>Fair and transparent server management</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
