import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Eye, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Guide } from '../data/guidesData';

interface GuideCardProps {
  guide: Guide;
}

const difficultyColors: Record<string, string> = {
  'Beginner': 'bg-green-600/20 text-green-400 border-green-600/50',
  'Easy': 'bg-blue-600/20 text-blue-400 border-blue-600/50',
  'Medium': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
  'Hard': 'bg-red-600/20 text-red-400 border-red-600/50',
};

const categoryColors: Record<string, string> = {
  'Smokes': 'bg-gray-600/20 text-gray-400 border-gray-600/50',
  'Flashbangs': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
  'Molotovs': 'bg-orange-600/20 text-orange-400 border-orange-600/50',
  'Tutorials': 'bg-blue-600/20 text-blue-400 border-blue-600/50',
  'Strategies': 'bg-purple-600/20 text-purple-400 border-purple-600/50',
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-600/10 group">
      <div className="aspect-video bg-zinc-800 overflow-hidden relative">
        <ImageWithFallback
          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(guide.image)}`}
          alt={guide.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge className={categoryColors[guide.category] || 'bg-zinc-700'}>
            {guide.category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className={difficultyColors[guide.difficulty] || 'bg-zinc-700'}>
            {guide.difficulty}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-4 w-4 text-orange-500" />
          <span className="text-orange-500">{guide.map}</span>
        </div>
        
        <h3 className="text-white group-hover:text-orange-400 transition-colors mb-2">
          {guide.title}
        </h3>
        
        <p className="text-zinc-400 mb-4 line-clamp-2">
          {guide.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <div className="flex items-center gap-1 text-zinc-400">
            <Eye className="h-4 w-4" />
            <span>{guide.views}</span>
          </div>
          <Link to={`/guides/${guide.id}`} className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1">
            <span>Read Guide</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}