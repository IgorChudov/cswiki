// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize skins page if on skins.html
    if (window.location.pathname.includes('skins.html')) {
        initSkinsPage();
    }
    
    // Initialize guides page if on guides/index.html
    if (window.location.pathname.includes('guides/index.html')) {
        initGuidesPage();
    }
});

// ==================== SKINS PAGE ====================
let allSkins = [];
let selectedCategory = 'all';
let selectedRarity = 'all';
let searchQuery = '';

async function initSkinsPage() {
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const skinsGrid = document.getElementById('skins-grid');
    const noResults = document.getElementById('no-results');
    
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterAndRenderSkins();
        });
    }
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active', 'bg-orange-600', 'text-white');
                b.classList.add('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            });
            btn.classList.remove('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            btn.classList.add('active', 'bg-orange-600', 'text-white');
            selectedCategory = btn.dataset.category;
            filterAndRenderSkins();
        });
    });
    
    // Rarity buttons
    document.querySelectorAll('.rarity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.rarity-btn').forEach(b => {
                b.classList.remove('active', 'bg-orange-600', 'text-white');
                b.classList.add('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            });
            btn.classList.remove('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            btn.classList.add('active', 'bg-orange-600', 'text-white');
            selectedRarity = btn.dataset.rarity;
            filterAndRenderSkins();
        });
    });
    
    // Fetch skins
    try {
        const response = await fetch('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json');
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        allSkins = await response.json();
        
        loadingEl.style.display = 'none';
        skinsGrid.classList.remove('hidden');
        filterAndRenderSkins();
    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.classList.remove('hidden');
        document.getElementById('error-message').textContent = `Ошибка: ${error.message}`;
    }
}

function filterAndRenderSkins() {
    const skinsGrid = document.getElementById('skins-grid');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    const resultsLabel = document.getElementById('results-label');
    
    const filteredSkins = allSkins.filter(skin => {
        const skinName = skin.name || '';
        const weaponName = skin.weapon?.name || '';
        const skinCategory = skin.category?.name || '';
        const skinRarity = skin.rarity?.name || '';
        
        const matchesSearch = skinName.toLowerCase().includes(searchQuery) ||
                             weaponName.toLowerCase().includes(searchQuery);
        
        let matchesCategory = selectedCategory === 'all';
        if (selectedCategory === 'rifle') matchesCategory = /AK-47|M4/i.test(weaponName);
        else if (selectedCategory === 'sniper') matchesCategory = /AWP/i.test(weaponName);
        else if (selectedCategory === 'pistol') matchesCategory = /Desert Eagle|Glock|USP|P250/i.test(weaponName);
        else if (selectedCategory === 'knife') matchesCategory = /Knife|Нож/i.test(weaponName);
        else if (selectedCategory === 'smg') matchesCategory = /MP7|MP9|MAC-10|UMP-45/i.test(weaponName);
        
        const matchesRarity = selectedRarity === 'all' || skinRarity === selectedRarity;
        
        return matchesSearch && matchesCategory && matchesRarity;
    });
    
    // Update results count
    resultsCount.textContent = filteredSkins.length;
    resultsLabel.textContent = getRussianCount(filteredSkins.length, 'скин', 'скина', 'скинов');
    
    if (filteredSkins.length === 0) {
        skinsGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    skinsGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    skinsGrid.innerHTML = filteredSkins.slice(0, 100).map(skin => {
        const rarityClass = getRarityClass(skin.rarity?.name);
        return `
            <article class="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 card-hover transition-all group">
                <div class="aspect-video bg-zinc-800 overflow-hidden relative">
                    <img src="${skin.image || 'https://via.placeholder.com/400x300?text=No+Image'}" 
                         alt="${skin.name}" 
                         class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                         loading="lazy">
                    <div class="absolute top-2 right-2">
                        <span class="${rarityClass} rounded-full px-2 py-1 text-xs border">
                            ${skin.rarity?.name || 'N/A'}
                        </span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="mb-2">
                        <p class="text-orange-500 text-sm">${skin.weapon?.name || 'Unknown'}</p>
                        <h3 class="text-white group-hover:text-orange-400 transition-colors font-semibold">${skin.name}</h3>
                    </div>
                    <div class="flex items-center justify-between pt-3 border-t border-zinc-800">
                        <span class="text-zinc-400 text-sm">
                            ${skin.collections?.[0]?.name || 'Коллекция неизвестна'}
                        </span>
                        <button class="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 text-sm font-medium">
                            <span>Просмотр</span>
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function getRarityClass(rarity) {
    const classes = {
        'Тайное': 'rarity-covert',
        'Засекреченное': 'rarity-classified',
        'Запрещённое': 'rarity-restricted',
        'Контрабанда': 'rarity-contraband',
        'Промышленное': 'rarity-industrial'
    };
    return classes[rarity] || 'bg-zinc-700 text-zinc-300';
}

// ==================== GUIDES PAGE ====================
const guidesData = [
    {
        id: 1,
        title: 'Dust 2 Smoke Lineup Guide',
        category: 'Smokes',
        map: 'Dust 2',
        difficulty: 'Easy',
        description: 'Изучите все необходимые смок-гранаты для Dust 2, включая CT спавн, long doors и исполнение на B сайт.',
        image: 'dust desert gaming',
        views: '15.2k',
        file: 'dust-2-smokes.html'
    },
    {
        id: 2,
        title: 'Mirage CT Smokes',
        category: 'Smokes',
        map: 'Mirage',
        difficulty: 'Medium',
        description: 'Освойте смоки за CT сторону на Mirage: jungle, stairs и connector позиции.',
        image: 'middle eastern architecture',
        views: '12.8k',
        file: 'mirage-ct-smokes.html'
    },
    {
        id: 3,
        title: 'Inferno Banana Flash Guide',
        category: 'Flashbangs',
        map: 'Inferno',
        difficulty: 'Easy',
        description: 'Идеальные техники флешек для контроля banana и захвата B сайта на Inferno.',
        image: 'italian village',
        views: '9.5k',
        file: 'inferno-banana-flash.html'
    },
    {
        id: 4,
        title: "Beginner's Spray Control",
        category: 'Tutorials',
        map: 'All Maps',
        difficulty: 'Beginner',
        description: 'Полное руководство по контролю спрея для AK-47 и M4A4. Включает упражнения для тренировки.',
        image: 'target practice',
        views: '22.1k',
        file: 'beginners-spray-control.html'
    },
    {
        id: 5,
        title: 'Overpass Pop Flashes',
        category: 'Flashbangs',
        map: 'Overpass',
        difficulty: 'Hard',
        description: 'Продвинутые pop flash позиции для захвата bathrooms, connector и A сайта.',
        image: 'urban overpass',
        views: '7.3k',
        file: 'overpass-pop-flashes.html'
    },
    {
        id: 6,
        title: 'Nuke Outside Smokes',
        category: 'Smokes',
        map: 'Nuke',
        difficulty: 'Hard',
        description: 'Сложные смок-линейки для Nuke outside: heaven, squeaky и secret.',
        image: 'industrial facility',
        views: '5.9k',
        file: 'nuke-outside-smokes.html'
    },
    {
        id: 7,
        title: 'Economy Management Guide',
        category: 'Tutorials',
        map: 'All Maps',
        difficulty: 'Medium',
        description: 'Узнайте когда покупать, сохранять и форсить. Поймите экономику раундов.',
        image: 'money strategy',
        views: '18.7k',
        file: 'economy-management.html'
    },
    {
        id: 8,
        title: 'Vertigo Molotov Strategies',
        category: 'Molotovs',
        map: 'Vertigo',
        difficulty: 'Medium',
        description: 'Необходимые броски молотова для задержки пушей и очистки позиций на Vertigo.',
        image: 'skyscraper building',
        views: '6.2k',
        file: 'vertigo-molotovs.html'
    },
    {
        id: 9,
        title: 'Ancient A Site Executes',
        category: 'Strategies',
        map: 'Ancient',
        difficulty: 'Medium',
        description: 'Командные стратегии для захвата A сайта на Ancient с правильным использованием утилит.',
        image: 'ancient ruins temple',
        views: '11.4k',
        file: 'ancient-a-site.html'
    },
    {
        id: 10,
        title: 'Crosshair Placement Tips',
        category: 'Tutorials',
        map: 'All Maps',
        difficulty: 'Beginner',
        description: 'Улучшите свой аим изучив правильное позиционирование прицела и пре-аим техники.',
        image: 'crosshair target',
        views: '25.6k',
        file: 'crosshair-placement.html'
    },
    {
        id: 11,
        title: 'Cache Mid Control Smokes',
        category: 'Smokes',
        map: 'Cache',
        difficulty: 'Easy',
        description: 'Простые смок-линейки для получения контроля мид и исполнения на Cache.',
        image: 'warehouse industrial',
        views: '8.1k',
        file: 'cache-mid-smokes.html'
    },
    {
        id: 12,
        title: 'Anubis B Site Defense',
        category: 'Strategies',
        map: 'Anubis',
        difficulty: 'Hard',
        description: 'Продвинутые защитные расстановки и стратегии ретейка для B сайта на Anubis.',
        image: 'egyptian temple',
        views: '4.7k',
        file: 'anubis-b-defense.html'
    }
];

let guidesSearchQuery = '';
let guidesSelectedCategory = 'all';
let guidesSelectedDifficulty = 'all';

function initGuidesPage() {
    const searchInput = document.getElementById('guides-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            guidesSearchQuery = e.target.value.toLowerCase();
            filterAndRenderGuides();
        });
    }
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active', 'bg-orange-600', 'text-white');
                b.classList.add('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            });
            btn.classList.remove('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            btn.classList.add('active', 'bg-orange-600', 'text-white');
            guidesSelectedCategory = btn.dataset.category;
            filterAndRenderGuides();
        });
    });
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('active', 'bg-orange-600', 'text-white');
                b.classList.add('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            });
            btn.classList.remove('bg-zinc-900', 'border', 'border-zinc-800', 'text-zinc-300');
            btn.classList.add('active', 'bg-orange-600', 'text-white');
            guidesSelectedDifficulty = btn.dataset.difficulty;
            filterAndRenderGuides();
        });
    });
    
    filterAndRenderGuides();
}

function filterAndRenderGuides() {
    const guidesGrid = document.getElementById('guides-grid');
    const noResults = document.getElementById('no-guides-results');
    const resultsCount = document.getElementById('guides-results-count');
    const resultsLabel = document.getElementById('guides-results-label');
    
    const filteredGuides = guidesData.filter(guide => {
        const matchesSearch = guide.title.toLowerCase().includes(guidesSearchQuery) ||
                             guide.map.toLowerCase().includes(guidesSearchQuery) ||
                             guide.description.toLowerCase().includes(guidesSearchQuery);
        
        const matchesCategory = guidesSelectedCategory === 'all' || 
                               guide.category.toLowerCase() === guidesSelectedCategory.toLowerCase();
        
        const matchesDifficulty = guidesSelectedDifficulty === 'all' || 
                                 guide.difficulty.toLowerCase() === guidesSelectedDifficulty.toLowerCase();
        
        return matchesSearch && matchesCategory && matchesDifficulty;
    });
    
    resultsCount.textContent = filteredGuides.length;
    resultsLabel.textContent = getRussianCount(filteredGuides.length, 'гайд', 'гайда', 'гайдов');
    
    if (filteredGuides.length === 0) {
        guidesGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    guidesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    const categoryColors = {
        'Smokes': 'bg-gray-600/20 text-gray-400',
        'Flashbangs': 'bg-yellow-600/20 text-yellow-400',
        'Molotovs': 'bg-orange-600/20 text-orange-400',
        'Tutorials': 'bg-blue-600/20 text-blue-400',
        'Strategies': 'bg-purple-600/20 text-purple-400'
    };
    
    const difficultyColors = {
        'Beginner': 'bg-green-600/20 text-green-400',
        'Easy': 'bg-blue-600/20 text-blue-400',
        'Medium': 'bg-yellow-600/20 text-yellow-400',
        'Hard': 'bg-red-600/20 text-red-400'
    };
    
    guidesGrid.innerHTML = filteredGuides.map(guide => `
        <article class="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 card-hover transition-all group">
            <div class="aspect-video bg-zinc-800 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" 
                     alt="${guide.title}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                     loading="lazy">
                <div class="absolute top-2 left-2">
                    <span class="${categoryColors[guide.category] || 'bg-zinc-700'} rounded-full px-2 py-1 text-xs">${getCategoryName(guide.category)}</span>
                </div>
                <div class="absolute top-2 right-2">
                    <span class="${difficultyColors[guide.difficulty] || 'bg-zinc-700'} rounded-full px-2 py-1 text-xs">${getDifficultyName(guide.difficulty)}</span>
                </div>
            </div>
            <div class="p-4">
                <div class="flex items-center gap-2 mb-2">
                    <svg class="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="text-orange-500 text-sm">${guide.map}</span>
                </div>
                <h3 class="text-white group-hover:text-orange-400 transition-colors mb-2 font-semibold">${guide.title}</h3>
                <p class="text-zinc-400 text-sm mb-4 line-clamp-2">${guide.description}</p>
                <div class="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div class="flex items-center gap-1 text-zinc-400 text-sm">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <span>${guide.views}</span>
                    </div>
                    <a href="${guide.file}" class="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 text-sm font-medium">
                        <span>Читать</span>
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function getCategoryName(category) {
    const names = {
        'Smokes': 'Смоки',
        'Flashbangs': 'Флешки',
        'Molotovs': 'Молотовы',
        'Tutorials': 'Обучение',
        'Strategies': 'Стратегии'
    };
    return names[category] || category;
}

function getDifficultyName(difficulty) {
    const names = {
        'Beginner': 'Новичок',
        'Easy': 'Легко',
        'Medium': 'Средне',
        'Hard': 'Сложно'
    };
    return names[difficulty] || difficulty;
}

// Helper function for Russian pluralization
function getRussianCount(count, one, few, many) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    
    if (lastDigit === 1) {
        return one;
    }
    
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    
    return many;
}
