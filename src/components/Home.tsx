import { Link } from 'react-router-dom';
import { BookOpen, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PartnerCard } from './PartnerCard';

const featuredPartners = [
  {
    id: 1,
    name: 'CSGOEmpire',
    description: 'Премиум платформа для торговли CS:GO с мгновенным выводом средств и широким выбором скинов. Доверие миллионов игроков по всему миру.',
    bonus: 'Получите $5 бонус при регистрации',
    referralLink: 'https://csgoempire.com/ref/YOURCODE',
    logo: 'casino gaming',
    verified: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'SkinBaron',
    description: 'Покупайте и продавайте скины CS:GO мгновенно. Низкие комиссии, безопасные сделки и лучшие цены на рынке.',
    bonus: 'Скидка 5% на первую покупку',
    referralLink: 'https://skinbaron.com/ref/YOURCODE',
    logo: 'marketplace shopping',
    verified: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'CSGORoll',
    description: 'Играйте в захватывающие игры, выигрывайте скины и получайте ежедневные бесплатные кейсы. Один из самых популярных сайтов CS:GO.',
    bonus: '3 бесплатных кейса',
    referralLink: 'https://csgoroll.com/ref/YOURCODE',
    logo: 'dice gaming',
    verified: true,
    rating: 4.6,
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-white mb-4">
              Добро пожаловать в CS:GO Wiki
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Ваш главный ресурс для Counter-Strike: Global Offensive - скины, гайды и проверенные партнёрские платформы. Откройте для себя редкие скины и эксклюзивные предложения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/skins"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
              >
                Скины
              </Link>
              <Link
                to="/partners"
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
              >
                Партнёры
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-white mb-2">
              Полная база данных
            </h3>
            <p className="text-zinc-400">
              Просматривайте нашу обширную базу скинов CS:GO с подробной информацией о редкости, износе и ценах.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-white mb-2">
              Проверенные партнёры
            </h3>
            <p className="text-zinc-400">
              Подключайтесь к проверенным партнёрским платформам с эксклюзивными предложениями, торговыми возможностями и специальными акциями.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-white mb-2">
              Рыночная аналитика
            </h3>
            <p className="text-zinc-400">
              Следите за последними трендами, изменениями цен и рыночным анализом ваших любимых скинов.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-orange-500 mb-1">1000+</div>
              <div className="text-zinc-400">Скинов в базе</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">50+</div>
              <div className="text-zinc-400">Коллекций</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">15+</div>
              <div className="text-zinc-400">Партнёрских сайтов</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">Ежедневно</div>
              <div className="text-zinc-400">Обновление цен</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Partners Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-white mb-8">
          Избранные партнёры
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPartners.map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}