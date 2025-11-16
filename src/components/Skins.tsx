import { useState, useEffect } from 'react';
import { SkinCard } from './SkinCard';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const categories = ['Все', 'Винтовки', 'Снайперские', 'Пистолеты', 'Ножи', 'ПП'];
const rarities = ['Все', 'Тайное', 'Засекреченное', 'Запрещённое', 'Контрабанда', 'Промышленное'];

export function Skins() {
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedRarity, setSelectedRarity] = useState('Все');

  useEffect(() => {
    const fetchSkins = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json');
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        const data = await response.json();
        setSkins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkins();
  }, []);

  if (loading) return <p className="text-white text-center py-12">Загрузка скинов...</p>;
  if (error) return <p className="text-red-500 text-center py-12">Ошибка: {error}</p>;

  const filteredSkins = skins.filter(skin => {
    const skinName = skin.name || '';
    const weaponName = skin.weapon?.name || '';
    const skinCategory = skin.category?.name || '';
    const skinRarity = skin.rarity?.name || '';

    const matchesSearch =
      skinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      weaponName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Все' ||
      (selectedCategory === 'Винтовки' && /AK-47|M4/i.test(weaponName)) ||
      (selectedCategory === 'Снайперские' && /AWP/i.test(weaponName)) ||
      (selectedCategory === 'Пистолеты' && /Desert Eagle|Glock|USP|P250/i.test(weaponName)) ||
      (selectedCategory === 'Ножи' && /Knife|Нож/i.test(weaponName));

    const matchesRarity =
      selectedRarity === 'Все' || skinRarity === selectedRarity;

    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-white mb-2">База скинов CS:GO</h1>
        <p className="text-zinc-400">Просматривайте и находите все доступные скины оружия CS:GO</p>
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
          {/* Category Filter */}
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

          {/* Rarity Filter */}
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
      {filteredSkins.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkins.map(skin => (
            <SkinCard key={skin.id} skin={{
              id: skin.id,
              name: skin.name,
              weapon: skin.weapon?.name,
              rarity: skin.rarity?.name,
              collection: skin.collections?.[0]?.name || '',
              price: '', // если есть цена в данных API, можно сюда добавить
              image: skin.image
            }} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-500">Скины не найдены по вашим критериям</p>
        </div>
      )}
    </div>
  );
}
