import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

interface Skin {
  id: number;
  name: string;
  weapon: string;
  collection: string;
  rarity: string;
  price: string;
  image: string;
}

interface SkinCardProps {
  skin: Skin;
}

const rarityColors: Record<string, string> = {
  'Тайное': 'bg-red-600/20 text-red-400 border-red-600/50',
  'Засекреченное': 'bg-pink-600/20 text-pink-400 border-pink-600/50',
  'Запрещённое': 'bg-purple-600/20 text-purple-400 border-purple-600/50',
  'Контрабанда': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
  'Промышленное': 'bg-blue-600/20 text-blue-400 border-blue-600/50',
};

export function SkinCard({ skin }: SkinCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-600/10 group">
      <div className="aspect-video bg-zinc-800 overflow-hidden relative">
        <ImageWithFallback
          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(skin.image)}`}
          alt={skin.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className={rarityColors[skin.rarity] || 'bg-zinc-700'}>
            {skin.rarity}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <p className="text-orange-500">{skin.weapon}</p>
          <h3 className="text-white group-hover:text-orange-400 transition-colors">
            {skin.name}
          </h3>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-zinc-400">
            Коллекция {skin.collection}
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <span className="text-white">
            {skin.price}
          </span>
          <button className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1">
            <span>Просмотр</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}