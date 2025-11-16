import { useState } from 'react';
import { GuideCard } from './GuideCard';
import { Search, Bomb, Zap, BookOpen, Target, Shield, Map } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { guides } from '../data/guidesData';

const categories = [
  { name: 'All', icon: BookOpen },
  { name: 'Smokes', icon: Bomb },
  { name: 'Flashbangs', icon: Zap },
  { name: 'Molotovs', icon: Shield },
  { name: 'Tutorials', icon: Target },
  { name: 'Strategies', icon: Map },
];

const difficulties = ['All', 'Beginner', 'Easy', 'Medium', 'Hard'];

export function Guides() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.map.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || guide.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-white mb-2">
          CS:GO Guides & Tutorials
        </h1>
        <p className="text-zinc-400">
          Master smokes, flashes, and strategies for all competitive maps
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <Input
            type="text"
            placeholder="Search guides by title, map, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-zinc-400">Category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(({ name, icon: Icon }) => (
            <Button
              key={name}
              variant={selectedCategory === name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(name)}
              className={selectedCategory === name 
                ? "bg-orange-600 hover:bg-orange-700" 
                : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              }
            >
              <Icon className="h-4 w-4 mr-2" />
              {name}
            </Button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-zinc-400">Difficulty</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {difficulties.map(difficulty => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(difficulty)}
              className={selectedDifficulty === difficulty 
                ? "bg-orange-600 hover:bg-orange-700" 
                : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              }
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-zinc-400">
          Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map(guide => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-500">No guides found matching your criteria</p>
        </div>
      )}
    </div>
  );
}