import { Card, CardContent } from "@/components/ui/card";

interface InfoPanelProps {
  image: string;
  title: string;
  description: string;
}

const InfoPanel = ({ image, title, description }: InfoPanelProps) => {
  return (
    <Card className="overflow-hidden group hover:-translate-y-2 transition-transform duration-300 bg-card border-border">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoPanel;
