import { PartnerCard } from './PartnerCard';
import { Shield, TrendingUp } from 'lucide-react';

const partners = [
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
  {
    id: 4,
    name: 'DMarket',
    description: 'Межигровая торговая площадка для обмена скинами. Быстро, безопасно, поддерживает несколько способов оплаты, включая криптовалюту.',
    bonus: '$10 приветственный бонус',
    referralLink: 'https://dmarket.com/ref/YOURCODE',
    logo: 'market exchange',
    verified: true,
    rating: 4.5,
  },
  {
    id: 5,
    name: 'CSGOFast',
    description: 'Быстрый и честный сайт для ставок CS:GO с доказуемо честными играми. Мгновенные депозиты и выводы средств.',
    bonus: 'Бонус на первый депозит',
    referralLink: 'https://csgofast.com/ref/YOURCODE',
    logo: 'fast gaming',
    verified: true,
    rating: 4.4,
  },
  {
    id: 6,
    name: 'Tradeit.gg',
    description: 'Обменивайте свои скины CS:GO мгновенно с помощью автоматизированных ботов. Получите нужные скины за секунды.',
    bonus: 'Бесплатно $1 на первый обмен',
    referralLink: 'https://tradeit.gg/ref/YOURCODE',
    logo: 'trade exchange',
    verified: true,
    rating: 4.6,
  },
];

export function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-white mb-2">
          Партнёрские платформы
        </h1>
        <p className="text-zinc-400">
          Проверенные партнёрские сайты с эксклюзивными предложениями и бонусами для игроков CS:GO
        </p>
      </div>

      {/* Info Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-4 flex items-start gap-3">
          <Shield className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white mb-1">Проверенные партнёры</h3>
            <p className="text-zinc-400">
              Все партнёры проверены и пользуются доверием нашего сообщества. Используйте реферальные ссылки для получения эксклюзивных бонусов.
            </p>
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white mb-1">Эксклюзивные предложения</h3>
            <p className="text-zinc-400">
              Получайте специальные бонусы и скидки, используя наши реферальные ссылки. Регулярно обновляется новыми предложениями.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map(partner => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h3 className="text-white mb-2">Важное уведомление</h3>
        <p className="text-zinc-400">
          Пожалуйста, играйте ответственно. Эти партнёрские сайты предоставлены в информационных целях.
          Всегда проверяйте условия использования каждой платформы перед регистрацией.
          Некоторые функции могут быть недоступны в вашем регионе из-за местного законодательства.
        </p>
      </div>
    </div>
  );
}
