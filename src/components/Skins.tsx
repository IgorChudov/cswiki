import { useState } from 'react';
import { SkinCard } from './SkinCard';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const skins = [
  {
    id: 1,
    name: 'AK-47 | Redline',
    weapon: 'AK-47',
    collection: 'Phoenix',
    rarity: 'Тайное',
    price: '$28.50',
    image: 'csgo weapon',
  },
  {
    id: 2,
    name: 'AWP | Dragon Lore',
    weapon: 'AWP',
    collection: 'Cobblestone',
    rarity: 'Тайное',
    price: '$8,450.00',
    image: 'gaming weapon sniper',
  },
  {
    id: 3,
    name: 'M4A4 | Howl',
    weapon: 'M4A4',
    collection: 'Huntsman',
    rarity: 'Контрабанда',
    price: '$6,200.00',
    image: 'gaming rifle',
  },
  {
    id: 4,
    name: 'Karambit | Fade',
    weapon: 'Нож',
    collection: 'Ножи',
    rarity: 'Тайное',
    price: '$1,850.00',
    image: 'blade knife',
  },
  {
    id: 5,
    name: 'Desert Eagle | Blaze',
    weapon: 'Desert Eagle',
    collection: 'Assault',
    rarity: 'Запрещённое',
    price: '$425.00',
    image: 'gaming pistol',
  },
  {
    id: 6,
    name: 'Glock-18 | Fade',
    weapon: 'Glock-18',
    collection: 'Cache',
    rarity: 'Запрещённое',
    price: '$385.00',
    image: 'gaming handgun',
  },
  {
    id: 7,
    name: 'AK-47 | Fire Serpent',
    weapon: 'AK-47',
    collection: 'Bravo',
    rarity: 'Тайное',
    price: '$2,100.00',
    image: 'gaming assault rifle',
  },
  {
    id: 8,
    name: 'M4A1-S | Hyper Beast',
    weapon: 'M4A1-S',
    collection: 'Falchion',
    rarity: 'Тайное',
    price: '$115.00',
    image: 'tactical weapon',
  },
  {
    id: 9,
    name: 'USP-S | Kill Confirmed',
    weapon: 'USP-S',
    collection: 'Shadow',
    rarity: 'Засекреченное',
    price: '$78.50',
    image: 'silenced pistol',
  },
  {
    id: 10,
    name: 'Butterfly Knife | Doppler',
    weapon: 'Нож',
    collection: 'Ножи',
    rarity: 'Тайное',
    price: '$2,450.00',
    image: 'butterfly knife',
  },
  {
    id: 11,
    name: 'AWP | Asiimov',
    weapon: 'AWP',
    collection: 'Phoenix',
    rarity: 'Тайное',
    price: '$125.00',
    image: 'futuristic sniper',
  },
  {
    id: 12,
    name: 'P250 | Nuclear Threat',
    weapon: 'P250',
    collection: 'Nuke',
    rarity: 'Промышленное',
    price: '$1,850.00',
    image: 'compact pistol',
  },
];

const categories = ['Все', 'Винтовки', 'Снайперские', 'Пистолеты', 'Ножи', 'ПП'];
const rarities = ['Все', 'Тайное', 'Засекреченное', 'Запрещённое', 'Контрабанда', 'Промышленное'];

export function Skins() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedRarity, setSelectedRarity] = useState('Все');

  const filteredSkins = skins.filter(skin => {
    const matchesSearch = skin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skin.weapon.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || 
                           (selectedCategory === 'Винтовки' && (skin.weapon.includes('AK-47') || skin.weapon.includes('M4'))) ||
                           (selectedCategory === 'Снайперские' && skin.weapon === 'AWP') ||
                           (selectedCategory === 'Пистолеты' && (skin.weapon.includes('Desert Eagle') || skin.weapon.includes('Glock') || skin.weapon.includes('USP') || skin.weapon.includes('P250'))) ||
                           (selectedCategory === 'Ножи' && skin.weapon === 'Нож');
    const matchesRarity = selectedRarity === 'Все' || skin.rarity === selectedRarity;
    
    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-white mb-2">
          База скинов CS:GO
        </h1>
        <p className="text-zinc-400">
          Просматривайте и находите все доступные скины оружия CS:GO
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <Input
            type="text"
            placeholder="Поиск скинов по названию или оружию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-zinc-400" />
              <span className="text-zinc-400">Категория</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-zinc-400" />
              <span className="text-zinc-400">Редкость</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {rarities.map(rarity => (
                <Button
                  key={rarity}
                  variant={selectedRarity === rarity ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRarity(rarity)}
                  className={selectedRarity === rarity ? "bg-orange-600 hover:bg-orange-700" : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"}
                >
                  {rarity}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-zinc-400">
          Показано {filteredSkins.length} {filteredSkins.length === 1 ? 'скин' : 'скинов'}
        </p>
      </div>

      {/* Skins Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSkins.map(skin => (
          <SkinCard key={skin.id} skin={skin} />
        ))}
      </div>

      {filteredSkins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-500">Скины не найдены по вашим критериям</p>
        </div>
      )}
    </div>
  );
}
