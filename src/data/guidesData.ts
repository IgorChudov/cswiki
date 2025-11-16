export interface Guide {
  id: number;
  title: string;
  category: string;
  map: string;
  difficulty: string;
  description: string;
  image: string;
  views: string;
  author: string;
  publishDate: string;
  duration: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    image: string;
    tips?: string[];
  }[];
}

export const guides: Guide[] = [
  {
    id: 1,
    title: 'Dust 2 Smoke Lineup Guide',
    category: 'Smokes',
    map: 'Dust 2',
    difficulty: 'Easy',
    description: 'Learn all essential smoke grenades for Dust 2, including CT spawn, long doors, and B site executions.',
    image: 'dust desert gaming',
    views: '15.2k',
    author: 'ProPlayer',
    publishDate: 'Nov 10, 2024',
    duration: '8 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Xbox Smoke from T Spawn',
        description: 'Position yourself at the left corner of T spawn, aim at the top left corner of the building, and throw the smoke. This will land on Xbox and block CT vision from mid.',
        image: 'crosshair aim spot',
        tips: [
          'Use this smoke early in the round for mid control',
          'Jump throw is not required for this lineup',
          'Can be combined with a flash over mid doors'
        ]
      },
      {
        stepNumber: 2,
        title: 'CT Spawn Smoke from T Spawn',
        description: 'Stand at the back of T spawn near the left wall, aim above the palm tree visible in the distance, and use a jump throw. This smoke will block CT rotations through mid.',
        image: 'desert palm tree',
        tips: [
          'Requires jump throw bind',
          'Timing is crucial - throw after Xbox smoke',
          'Gives your team 10-15 seconds of safe mid crossing'
        ]
      },
      {
        stepNumber: 3,
        title: 'Long Doors Smoke from Outside Long',
        description: 'From outside long doors, stand against the left wall, aim at the top corner of the door frame, and throw. This blocks CT AWPers holding long.',
        image: 'door frame architecture',
        tips: [
          'Very safe lineup from outside long',
          'Combine with flash for aggressive push',
          'Smoke lasts long enough for site execute'
        ]
      },
      {
        stepNumber: 4,
        title: 'A Site CT Spawn Smoke',
        description: 'From A long, position near the corner box, aim at the top of the building towards CT spawn, and jump throw. This prevents CT rotations to A site.',
        image: 'building rooftop',
        tips: [
          'Essential for A site executes',
          'Can be thrown while taking A site',
          'Gives team time to plant safely'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Mirage CT Smokes',
    category: 'Smokes',
    map: 'Mirage',
    difficulty: 'Medium',
    description: 'Master CT side smokes for Mirage including jungle, stairs, and connector positions.',
    image: 'middle eastern architecture',
    views: '12.8k',
    author: 'SmokeKing',
    publishDate: 'Nov 8, 2024',
    duration: '10 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Jungle Smoke from CT Spawn',
        description: 'Stand at the back left corner of CT spawn, aim at the corner of the building near A site, and jump throw. This smoke lands perfectly in jungle.',
        image: 'urban corner building',
        tips: [
          'Quick rotation smoke for retakes',
          'Blocks T vision from jungle to stairs',
          'Essential for A site retakes'
        ]
      },
      {
        stepNumber: 2,
        title: 'Stairs Smoke for Retake',
        description: 'From CT spawn, align with the right side pillar, aim above the palace building, and jump throw. Smoke will block stairs entry.',
        image: 'stairs architecture',
        tips: [
          'Great for isolating A site players',
          'Combine with jungle smoke',
          'Allows safe plant defuse attempts'
        ]
      },
      {
        stepNumber: 3,
        title: 'Connector Smoke from Mid',
        description: 'Stand in mid near the boxes, aim at the top of connector entrance, regular throw. Blocks vision from A site to mid.',
        image: 'corridor passage',
        tips: [
          'Easy throw, no jump required',
          'Use when holding B site',
          'Slows down T splits'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Inferno Banana Flash Guide',
    category: 'Flashbangs',
    map: 'Inferno',
    difficulty: 'Easy',
    description: 'Perfect flashbang techniques for banana control and B site takes on Inferno.',
    image: 'italian village',
    views: '9.5k',
    author: 'FlashMaster',
    publishDate: 'Nov 5, 2024',
    duration: '6 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Banana Pop Flash',
        description: 'From T side of banana, throw flash against the left wall so it bounces behind the sandbags. This will flash any CT holding from car or sandbags.',
        image: 'wall bounce effect',
        tips: [
          'Timing is key - coordinate with teammate',
          'Flash bounces quickly, be ready to peek',
          'Works best when CT is playing default position'
        ]
      },
      {
        stepNumber: 2,
        title: 'B Site Entry Flash',
        description: 'Stand at the entrance of B site, aim high at the wall near coffins, and throw. Flash will pop as you enter site.',
        image: 'high wall architecture',
        tips: [
          'Excellent for site entries',
          'Flashes common holding positions',
          'Follow immediately after throw'
        ]
      },
      {
        stepNumber: 3,
        title: 'CT Spawn Flash from Banana',
        description: 'From mid banana position, aim towards CT spawn area and throw flash high. This blinds rotating CTs.',
        image: 'open courtyard',
        tips: [
          'Use during site execute',
          'Delays CT rotations',
          'Gives team extra seconds to plant'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Beginner\'s Spray Control',
    category: 'Tutorials',
    map: 'All Maps',
    difficulty: 'Beginner',
    description: 'Complete guide to mastering spray patterns for AK-47 and M4A4. Includes practice routines.',
    image: 'target practice',
    views: '22.1k',
    author: 'AimCoach',
    publishDate: 'Nov 12, 2024',
    duration: '15 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Understanding Spray Patterns',
        description: 'CS:GO weapons have predictable spray patterns. The AK-47 sprays up and slightly right, then left. Understanding this pattern is the first step to controlling your spray.',
        image: 'pattern diagram',
        tips: [
          'Practice without enemies first',
          'Use workshop maps for spray training',
          'Start with 10 bullet bursts'
        ]
      },
      {
        stepNumber: 2,
        title: 'AK-47 Recoil Compensation',
        description: 'To control AK-47 spray, pull your mouse down and slightly left after the first 5 bullets, then right for bullets 10-15. Practice this movement until it becomes muscle memory.',
        image: 'mouse movement guide',
        tips: [
          'Start slow and increase speed',
          'Focus on first 10 bullets',
          'Practice 15 minutes daily'
        ]
      },
      {
        stepNumber: 3,
        title: 'M4A4 Spray Control',
        description: 'M4A4 has easier recoil than AK-47. Pull down steadily with slight left-right adjustments. The pattern is more vertical and forgiving.',
        image: 'weapon training',
        tips: [
          'Easier to master than AK-47',
          'Lower damage but more accurate',
          'Great for holding angles'
        ]
      },
      {
        stepNumber: 4,
        title: 'Practice Routine',
        description: 'Spend 10 minutes in aim training map, spray at wall to see pattern. Then practice on moving bots. Finally, use in deathmatch.',
        image: 'training routine schedule',
        tips: [
          'Consistency is more important than duration',
          'Track your progress weekly',
          'Warm up before competitive matches'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Overpass Pop Flashes',
    category: 'Flashbangs',
    map: 'Overpass',
    difficulty: 'Hard',
    description: 'Advanced pop flash positions for taking control of bathrooms, connector, and A site.',
    image: 'urban overpass',
    views: '7.3k',
    author: 'UtilityPro',
    publishDate: 'Nov 3, 2024',
    duration: '12 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Bathrooms Entry Flash',
        description: 'From connector, aim at the ceiling near bathrooms entrance and throw. Flash will pop right as you enter, blinding defenders.',
        image: 'ceiling architecture',
        tips: [
          'Extremely effective pop flash',
          'Requires precise aim',
          'Coordinate with teammate for double peek'
        ]
      },
      {
        stepNumber: 2,
        title: 'A Site Heaven Flash',
        description: 'From truck position, throw flash high towards heaven. It will pop mid-air and flash anyone playing on top of site.',
        image: 'elevated platform',
        tips: [
          'Great for site executes',
          'Hard to dodge',
          'Follow with smoke for heaven'
        ]
      },
      {
        stepNumber: 3,
        title: 'Bank Flash from Park',
        description: 'Advanced lineup: from park, throw flash at specific angle so it bounces off wall into bank. Requires practice but very effective.',
        image: 'wall bounce trajectory',
        tips: [
          'Hardest flash in this guide',
          'Practice in private server',
          'Extremely rewarding when mastered'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Nuke Outside Smokes',
    category: 'Smokes',
    map: 'Nuke',
    difficulty: 'Hard',
    description: 'Complex smoke lineups for Nuke outside, including heaven, squeaky, and secret.',
    image: 'industrial facility',
    views: '5.9k',
    author: 'TacticalGamer',
    publishDate: 'Oct 28, 2024',
    duration: '14 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Heaven Smoke from Outside',
        description: 'Stand at T red container, aim at specific point on silo building, jump throw. This completely blocks heaven vision.',
        image: 'industrial silo',
        tips: [
          'Most important Nuke smoke',
          'Requires jump throw bind',
          'Must be pixel perfect'
        ]
      },
      {
        stepNumber: 2,
        title: 'Squeaky Door Smoke',
        description: 'From secret area, aim above squeaky door at the building corner, jump throw. Blocks CT rotation through squeaky.',
        image: 'metal door industrial',
        tips: [
          'Prevents fast CT rotations',
          'Can be thrown safely from cover',
          'Lasts entire execute duration'
        ]
      },
      {
        stepNumber: 3,
        title: 'Red Box Smoke',
        description: 'From T spawn area, align with specific landmark, aim high at outside building, jump throw. Smoke lands on red box position.',
        image: 'red container',
        tips: [
          'Blocks common CT position',
          'Allows safe outside control',
          'Combine with heaven smoke'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Economy Management Guide',
    category: 'Tutorials',
    map: 'All Maps',
    difficulty: 'Medium',
    description: 'Learn when to buy, save, and force buy. Understand eco rounds and economy impact.',
    image: 'money strategy',
    views: '18.7k',
    author: 'StrategyExpert',
    publishDate: 'Nov 1, 2024',
    duration: '20 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Understanding the Economy System',
        description: 'CS:GO economy is based on round wins, losses, kills, and bomb plants. You start with $800 and can earn up to $16,000. Learn the income for each scenario.',
        image: 'financial chart graph',
        tips: [
          'Round loss: $1,400-$3,400 (loss bonus)',
          'Round win: $3,250',
          'Bomb plant: $800 bonus for T side'
        ]
      },
      {
        stepNumber: 2,
        title: 'When to Full Buy',
        description: 'Full buy (rifle + armor + utilities) costs ~$4,500-$5,500. Buy when your team has minimum $4,000 and you can afford to lose one round.',
        image: 'shopping equipment',
        tips: [
          'Coordinate with team',
          'Save $1,000-$2,000 for next round',
          'Drop weapons for teammates if possible'
        ]
      },
      {
        stepNumber: 3,
        title: 'Force Buy Strategies',
        description: 'Force buying (spending all money on weaker weapons) can catch enemies off-guard. Do this when enemy team has economic advantage and you need to break their streak.',
        image: 'tactical decision',
        tips: [
          'P250 + armor is cost-effective',
          'Coordinate timing with team',
          'Target isolated enemies'
        ]
      },
      {
        stepNumber: 4,
        title: 'When to Eco/Save',
        description: 'If your team can\'t afford proper weapons, save money (eco round). Buy nothing or pistol only. This ensures a full buy next round.',
        image: 'saving money piggy',
        tips: [
          'Don\'t buy if team has <$2,000',
          'Try to survive round for extra money',
          'Hunt for weapon drops from enemies'
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Vertigo Molotov Strategies',
    category: 'Molotovs',
    map: 'Vertigo',
    difficulty: 'Medium',
    description: 'Essential molotov throws for delaying pushes and clearing common positions on Vertigo.',
    image: 'skyscraper building',
    views: '6.2k',
    author: 'UtilityKing',
    publishDate: 'Oct 25, 2024',
    duration: '9 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'A Site Default Molotov',
        description: 'From A ramp, throw molotov towards default plant position. This delays Ts from planting and forces them into unfavorable positions.',
        image: 'fire flames effect',
        tips: [
          'Use when hearing plant sound',
          'Forces Ts into open',
          'Buy time for team rotation'
        ]
      },
      {
        stepNumber: 2,
        title: 'Mid Stairs Molotov',
        description: 'Throw molotov at mid stairs to delay T push. Can be thrown from both top and bottom, creating temporary barrier.',
        image: 'stairway concrete',
        tips: [
          'Great for stalling',
          'Combo with smoke',
          'Allows CT rotations'
        ]
      },
      {
        stepNumber: 3,
        title: 'B Site Generator Molotov',
        description: 'Clear generator corner with molotov from B site entrance. Forces hiding Ts to reposition or take damage.',
        image: 'generator machinery',
        tips: [
          'Essential for site retakes',
          'Clears common camping spot',
          'Safe throw from distance'
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Ancient A Site Executes',
    category: 'Strategies',
    map: 'Ancient',
    difficulty: 'Medium',
    description: 'Coordinated team strategies for taking A site on Ancient with proper utility usage.',
    image: 'ancient ruins temple',
    views: '11.4k',
    author: 'TeamLeader',
    publishDate: 'Oct 30, 2024',
    duration: '11 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Setup and Utility Distribution',
        description: 'Gather team at mid. Designate who throws each utility: 2 smokes (elbow, heaven), 2 flashes, 1 molotov. Everyone should know their role.',
        image: 'team planning strategy',
        tips: [
          'Communication is crucial',
          'Check everyone has utilities',
          'Timing must be coordinated'
        ]
      },
      {
        stepNumber: 2,
        title: 'Execute Timing',
        description: 'On call, throw elbow smoke first, then heaven smoke, followed by flash. Molotov donut position. Push as smokes land.',
        image: 'smoke grenade deployment',
        tips: [
          'Count down: 3-2-1-execute',
          'Enter together, not one by one',
          'Trade kills if teammate dies'
        ]
      },
      {
        stepNumber: 3,
        title: 'Post-Plant Setup',
        description: 'After plant, position 2 players on site, 1 watching cave, 1 watching mid. Use remaining utilities to delay retake.',
        image: 'defensive position',
        tips: [
          'Don\'t all stack site',
          'Save mollies for retake',
          'Communicate enemy positions'
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Crosshair Placement Tips',
    category: 'Tutorials',
    map: 'All Maps',
    difficulty: 'Beginner',
    description: 'Improve your aim by learning proper crosshair placement and pre-aiming techniques.',
    image: 'crosshair target',
    views: '25.6k',
    author: 'AimGod',
    publishDate: 'Nov 14, 2024',
    duration: '10 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Head Level Positioning',
        description: 'Always keep your crosshair at head level. This is the most important fundamental. Imagine a horizontal line where enemy heads would appear.',
        image: 'head level visualization',
        tips: [
          'Check corners at head height',
          'Adjust for slopes and stairs',
          'Never look at the ground'
        ]
      },
      {
        stepNumber: 2,
        title: 'Pre-aiming Common Angles',
        description: 'Before peeking, position crosshair where enemy is likely to be. Study common positions and pre-aim them.',
        image: 'angle geometry',
        tips: [
          'Learn map callouts',
          'Watch pro player POVs',
          'Practice in deathmatch'
        ]
      },
      {
        stepNumber: 3,
        title: 'Crosshair Distance from Corners',
        description: 'Keep crosshair slightly away from corners you\'re peeking. This gives you reaction time and optimal distance for headshots.',
        image: 'corner distance spacing',
        tips: [
          'Not too close to wall',
          'About 1-2 feet from corner',
          'Adjust based on peeking speed'
        ]
      },
      {
        stepNumber: 4,
        title: 'Movement and Crosshair Sync',
        description: 'As you move, constantly adjust crosshair to maintain head level on potential enemy positions. Smooth mouse movement is key.',
        image: 'movement flow',
        tips: [
          'Low sensitivity helps with precision',
          'Practice smooth tracking',
          'Clear angles one at a time'
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'Cache Mid Control Smokes',
    category: 'Smokes',
    map: 'Cache',
    difficulty: 'Easy',
    description: 'Simple smoke lineups for gaining mid control and executing site takes on Cache.',
    image: 'warehouse industrial',
    views: '8.1k',
    author: 'CacheExpert',
    publishDate: 'Oct 20, 2024',
    duration: '7 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Mid Garage Smoke',
        description: 'From T spawn, stand at specific position, aim above garage entrance, jump throw. Smoke blocks CT mid control.',
        image: 'garage entrance',
        tips: [
          'Essential for mid control',
          'Easy lineup to learn',
          'Opens up A and B options'
        ]
      },
      {
        stepNumber: 2,
        title: 'Whitebox Smoke',
        description: 'From mid position, throw smoke towards whitebox area. This blocks CT vision from connector to mid.',
        image: 'white box container',
        tips: [
          'Quick throw, no lineup needed',
          'Allows safe mid crossing',
          'Can be thrown on the move'
        ]
      },
      {
        stepNumber: 3,
        title: 'A Site Heaven Smoke',
        description: 'From A main, aim at specific spot on building, jump throw. Smoke lands on heaven, blocking CT vision.',
        image: 'elevated platform view',
        tips: [
          'Critical for A executes',
          'Practice the angle',
          'Combine with other A smokes'
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Anubis B Site Defense',
    category: 'Strategies',
    map: 'Anubis',
    difficulty: 'Hard',
    description: 'Advanced defensive setups and retake strategies for B site on Anubis.',
    image: 'egyptian temple',
    views: '4.7k',
    author: 'DefenseMaster',
    publishDate: 'Oct 15, 2024',
    duration: '13 min read',
    steps: [
      {
        stepNumber: 1,
        title: 'Initial Setup Positions',
        description: 'Position 1 player water, 1 player connector, 1 rotating from mid. This creates crossfire and prevents easy trades.',
        image: 'tactical positions map',
        tips: [
          'Don\'t stack in one spot',
          'Communicate enemy movements',
          'Be ready to fall back'
        ]
      },
      {
        stepNumber: 2,
        title: 'Utility Usage',
        description: 'Use molotov to delay main push, smoke off second entrance, flash for escaping. Save some utility for retake.',
        image: 'grenade utility icons',
        tips: [
          'Don\'t waste all utility at once',
          'Molly forces Ts to wait',
          'Smoke buys time for rotation'
        ]
      },
      {
        stepNumber: 3,
        title: 'Retake Strategy',
        description: 'If site is lost, retake from two angles. Smoke off post-plant positions, flash and push together. Don\'t peek one by one.',
        image: 'retake coordination',
        tips: [
          'Wait for full team',
          'Use remaining utility',
          'Trade kills efficiently'
        ]
      }
    ]
  },
];
