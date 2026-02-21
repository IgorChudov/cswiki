import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Star, CheckCircle } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  description: string;
  bonus: string;
  referralLink: string;
  logo: string;
  verified: boolean;
  rating: number;
}

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-600/10 flex flex-col">
      <div className="aspect-video bg-zinc-800 overflow-hidden relative">
        <ImageWithFallback
          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(partner.logo)}`}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
        {partner.verified && (
          <div className="absolute top-2 right-2 bg-green-600/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-white" />
            <span className="text-white">Проверено</span>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white">{partner.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-white">
                {partner.rating}
              </span>
            </div>
          </div>
          <p className="text-zinc-400">{partner.description}</p>
        </div>

        <div className="mb-4">
          <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/50">
            {partner.bonus}
          </Badge>
        </div>

        <div className="mt-auto pt-4 border-t border-zinc-800">
          <a
            href={partner.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Посетить сайт
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <p className="text-zinc-500 mt-2 text-center">
            Реферальная ссылка
          </p>
        </div>
      </div>
    </div>
  );
}