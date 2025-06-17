import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-beige-50 border-chocolate-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-chocolate-100 p-3 rounded-full">
            <Icon name={icon} size={32} className="text-chocolate-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-chocolate-800 mb-2">
          {title}
        </h3>
        <p className="text-chocolate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
