import type { CharacterData } from '@/stores/character'

type LevelOneTemplate = {
  slug: string
  characterData: CharacterData
  tags: string[]
}

function character(data: Omit<CharacterData, 'variant' | 'playerName' | 'targetLevel' | 'asiPoints' | 'baseScoresApplied' | 'skillExpertise' | 'purchasedEquipment' | 'equipmentBudgetGp' | 'equipmentSpentGp' | 'currentHp' | 'tempHp' | 'brawlingMoves' | 'misdeeds' | 'size' | 'whacksLevel' | 'mark' | 'markSpirit' | 'virtue' | 'sin' | 'humanity' | 'sessionNotes' | 'classes'>): CharacterData {
  return {
    variant: 'dnd5e',
    playerName: '',
    targetLevel: data.level,
    asiPoints: 0,
    baseScoresApplied: true,
    skillExpertise: [],
    purchasedEquipment: [],
    equipmentBudgetGp: 0,
    equipmentSpentGp: 0,
    currentHp: data.maxHp,
    tempHp: 0,
    brawlingMoves: [],
    misdeeds: '',
    size: 'Medium',
    whacksLevel: 0,
    mark: '',
    markSpirit: '',
    virtue: '',
    sin: '',
    humanity: 10,
    sessionNotes: '',
    classes: [],
    ...data,
  }
}

export const dnd5eLevelOneCharacters: LevelOneTemplate[] = [
  {
    slug: 'barbarian-human-kara-ironbrook',
    tags: ['human', 'barbarian', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-barbarian-human-kara-ironbrook', name: 'Kara Ironbrook', race: 'human', subrace: '', className: 'barbarian', subclass: '', level: 1, background: 'soldier', alignment: 'ng', experiencePoints: 0,
      abilityScores: { str: 15, dex: 14, con: 14, int: 10, wis: 12, cha: 8 }, racialBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['athletics', 'intimidation', 'perception', 'survival'], savingThrowProficiencies: ['str', 'con'], languages: ['Common'], proficienciesOther: ['light armor', 'medium armor', 'shields', 'simple weapons', 'martial weapons'],
      weapons: [{ name: 'Greataxe', attackBonus: 5, damage: '1d12+3' }, { name: 'Javelin', attackBonus: 5, damage: '1d6+3' }], armor: '', shield: false, equipment: ['Greataxe', "Explorer's Pack", '4 Javelins', "Traveler's clothes"], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我说话直接，手也直接。只要有人躲在我身后，我就不会退。', ideals: '守护。强壮不是为了欺压别人，而是为了让软弱者能喘口气。', bonds: 'Ironbrook 的矿工把我当家人，我会为他们讨回公道。', flaws: '我太容易把愤怒当成唯一答案。', featuresTraits: ['Rage', 'Unarmored Defense'], backstory: 'Kara 曾是 Ironbrook 矿镇的搬运工，靠肩膀和倔强养活家人。矿道塌方那天，她徒手搬开支梁救出三名工友，也第一次感到体内怒火化成力量。镇上的长者让她带着家族旧斧外出求援，她于是离开熟悉的山谷，寻找能让矿镇不再被领主压榨的办法。', age: '21 岁', height: '5 尺 10 寸', weight: '170 磅', eyes: '棕色', hair: '黑色短发', skin: '晒成古铜色', allies: 'Ironbrook 矿镇的工友', treasure: '父亲留下的旧铁斧吊坠',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 12, maxHp: 15, speed: 30,
    }),
  },
  {
    slug: 'bard-halfling-nessa-quickstring',
    tags: ['halfling', 'lightfoot', 'bard', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-bard-halfling-nessa-quickstring', name: 'Nessa Quickstring', race: 'halfling', subrace: 'lightfoot', className: 'bard', subclass: '', level: 1, background: 'entertainer', alignment: 'cg', experiencePoints: 0,
      abilityScores: { str: 8, dex: 14, con: 14, int: 10, wis: 12, cha: 15 }, racialBonuses: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['performance', 'persuasion', 'deception', 'acrobatics', 'insight'], savingThrowProficiencies: ['dex', 'cha'], languages: ['Common', 'Halfling'], proficienciesOther: ['light armor', 'simple weapons', 'hand crossbow', 'longsword', 'rapier', 'shortsword', 'lute'],
      weapons: [{ name: 'Rapier', attackBonus: 4, damage: '1d8+2' }, { name: 'Dagger', attackBonus: 4, damage: '1d4+2' }], armor: 'Leather', shield: false, equipment: ['Rapier', "Diplomat's Pack", 'Lute', 'Leather Armor', 'Dagger'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我总能在最糟糕的时候讲出一个笑话。只要还有一根弦没断，我就能继续演。', ideals: '欢乐。世界已经够沉重了，我要让人们记得还能笑。', bonds: '我欠河路酒馆老板娘一份恩情，是她给了我第一把鲁特琴。', flaws: '我太想取悦观众，常在该安静时说个不停。', featuresTraits: ['Lucky', 'Brave', 'Halfling Nimbleness', 'Naturally Stealthy', 'Spellcasting', 'Bardic Inspiration'], backstory: 'Nessa 曾在河路酒馆间巡演，靠快歌和更快的手指讨生活。一次演出中，她用幻术救下一名被诬陷的小贩，也发现自己的歌声能真正改写局面。她把所有积蓄换成旅行装备，决定把舞台扩展到整片大陆。', age: '24 岁', height: '3 尺 0 寸', weight: '36 磅', eyes: '榛色', hair: '蜂蜜色卷发', skin: '红润', allies: '河路各酒馆的乐手和侍者', treasure: '一枚刻着笑脸的黄铜拨片',
      spellcastingClass: 'bard', spellcastingAbility: 'cha', cantrips: ['vicious-mockery', 'minor-illusion'], spellsKnown: ['1-healing-word', '1-faerie-fire', '1-charm-person', '1-thunderwave'], spellsPrepared: [], hitDie: 8, maxHp: 10, speed: 25,
    }),
  },
  {
    slug: 'cleric-dwarf-mira-dawnforge',
    tags: ['dwarf', 'hill-dwarf', 'cleric', 'life', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-cleric-dwarf-mira-dawnforge', name: 'Mira Dawnforge', race: 'dwarf', subrace: 'hill-dwarf', className: 'cleric', subclass: 'life', level: 1, background: 'acolyte', alignment: 'lg', experiencePoints: 0,
      abilityScores: { str: 12, dex: 10, con: 14, int: 10, wis: 15, cha: 13 }, racialBonuses: { str: 0, dex: 0, con: 2, int: 0, wis: 1, cha: 0 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['insight', 'medicine', 'religion', 'persuasion'], savingThrowProficiencies: ['wis', 'cha'], languages: ['Common', 'Dwarvish'], proficienciesOther: ['light armor', 'medium armor', 'shields', 'simple weapons', 'heavy armor'],
      weapons: [{ name: 'Mace', attackBonus: 3, damage: '1d6+1' }, { name: 'Light Crossbow', attackBonus: 2, damage: '1d8' }], armor: 'Chain Mail', shield: true, equipment: ['Mace', 'Chain Mail', 'Light Crossbow', "Priest's Pack", 'Shield', 'Holy Symbol'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我会先检查伤口，再询问姓名。我的背包里总有绷带、干粮和给别人留的位置。', ideals: '慈悲。生命是神赐的火，必须被守护。', bonds: '我会让 Dawnforge 神龛的炉火在远方也被人看见。', flaws: '我很难接受有些人拒绝被帮助。', featuresTraits: ['Darkvision', 'Dwarven Resilience', 'Stonecunning', 'Spellcasting', 'Divine Domain: Life Domain', 'Bonus Proficiency', 'Disciple of Life'], backstory: 'Mira 在 Dawnforge 家族神龛中长大，负责照料伤者、修补工具，也聆听旅人讲述外界苦难。当一队难民来到山门，她意识到等待别人求助远远不够。她带上圣徽和祖母的锤子，踏上道路，把治愈送到需要它的地方。', age: '88 岁', height: '4 尺 2 寸', weight: '160 磅', eyes: '暖棕色', hair: '铜红色辫发', skin: '浅棕色', allies: 'Dawnforge 家族神龛', treasure: '祖母留下的青铜圣徽',
      spellcastingClass: 'cleric', spellcastingAbility: 'wis', cantrips: ['guidance', 'sacred-flame', 'spare-the-dying'], spellsKnown: [], spellsPrepared: ['1-cure-wounds', '1-bless', '1-guiding-bolt', '1-shield-of-faith'], hitDie: 8, maxHp: 11, speed: 25,
    }),
  },
  {
    slug: 'druid-human-orin-mossvale', tags: ['human', 'druid', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-druid-human-orin-mossvale', name: 'Orin Mossvale', race: 'human', subrace: '', className: 'druid', subclass: '', level: 1, background: 'hermit', alignment: 'tn', experiencePoints: 0,
      abilityScores: { str: 10, dex: 14, con: 14, int: 12, wis: 15, cha: 8 }, racialBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['nature', 'survival', 'medicine', 'insight'], savingThrowProficiencies: ['int', 'wis'], languages: ['Common', 'Druidic'], proficienciesOther: ['light armor', 'medium armor', 'shields', 'club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickle', 'sling', 'spear', 'herbalism kit'],
      weapons: [{ name: 'Quarterstaff', attackBonus: 2, damage: '1d6' }, { name: 'Sickle', attackBonus: 4, damage: '1d4+2' }], armor: 'Leather', shield: true, equipment: ['Wooden Shield', 'Quarterstaff', 'Leather Armor', "Explorer's Pack", 'Druidic Focus'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我会先听一听周围，再决定该说什么。脚下有泥土时，我思考得更清楚。', ideals: '循环。取走之物必须归还，否则世界会失衡。', bonds: '苔谷的泉水正在枯竭，我必须找到原因。', flaws: '我把太多问题归因于“不自然”，有时忽略人的复杂处境。', featuresTraits: ['Spellcasting', 'Druidic'], backstory: 'Orin 是苔谷边缘的牧羊人，直到一场异常干旱让他向古井旁的橡树求助。回应他的不是人声，而是土地本身的低语。环林德鲁伊教他辨认这种声音，也把他派往外界，调查河流为何一年比一年浅。', age: '30 岁', height: '5 尺 8 寸', weight: '150 磅', eyes: '灰绿色', hair: '棕色', skin: '晒成棕色', allies: '苔谷环林的德鲁伊导师', treasure: '装着家乡泉水的小陶瓶',
      spellcastingClass: 'druid', spellcastingAbility: 'wis', cantrips: ['druidcraft', 'produce-flame'], spellsKnown: [], spellsPrepared: ['1-cure-wounds', '1-faerie-fire', '1-detect-magic', '1-thunderwave'], hitDie: 8, maxHp: 11, speed: 30,
    }),
  },
  {
    slug: 'fighter-dwarf-dain-redshield', tags: ['dwarf', 'mountain-dwarf', 'fighter', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-fighter-dwarf-dain-redshield', name: 'Dain Redshield', race: 'dwarf', subrace: 'mountain-dwarf', className: 'fighter', subclass: '', level: 1, background: 'soldier', alignment: 'ln', experiencePoints: 0,
      abilityScores: { str: 15, dex: 12, con: 14, int: 10, wis: 13, cha: 8 }, racialBonuses: { str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['athletics', 'perception', 'intimidation', 'survival'], savingThrowProficiencies: ['str', 'con'], languages: ['Common', 'Dwarvish'], proficienciesOther: ['all armor', 'shields', 'simple weapons', 'martial weapons'],
      weapons: [{ name: 'Longsword', attackBonus: 5, damage: '1d8+3' }, { name: 'Light Crossbow', attackBonus: 3, damage: '1d8+1' }], armor: 'Chain Mail', shield: true, equipment: ['Longsword', 'Shield', 'Chain Mail', 'Light Crossbow', "Dungeoneer's Pack"], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我总先确认退路和盾墙位置。只要我还站着，敌人就别想越过我。', ideals: '纪律。好队伍靠信任和训练活下来。', bonds: 'Redshield Gate 是我的家门，我会让威胁永远到不了那里。', flaws: '我不太信任没受过训练的人，常低估他们的勇气。', featuresTraits: ['Darkvision', 'Dwarven Resilience', 'Stonecunning', 'Fighting Style', 'Second Wind'], backstory: 'Dain 曾在 Redshield Gate 站岗十年，日复一日检查商队、驱赶盗匪、修补盾墙。他厌倦了只守一扇门，因为越来越多麻烦来自门外更远处。带着旧盾和军饷，他踏上路途，想在危险抵达家门前先迎上去。', age: '72 岁', height: '4 尺 6 寸', weight: '180 磅', eyes: '钢灰色', hair: '黑色', skin: '石褐色', allies: 'Redshield Gate 的老卫兵们', treasure: '刻满守夜记号的旧红盾',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 10, maxHp: 14, speed: 25,
    }),
  },
  {
    slug: 'monk-elf-sela-windstep', tags: ['elf', 'wood-elf', 'monk', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-monk-elf-sela-windstep', name: 'Sela Windstep', race: 'elf', subrace: 'wood-elf', className: 'monk', subclass: '', level: 1, background: 'hermit', alignment: 'ng', experiencePoints: 0,
      abilityScores: { str: 10, dex: 15, con: 14, int: 10, wis: 14, cha: 8 }, racialBonuses: { str: 0, dex: 2, con: 0, int: 0, wis: 1, cha: 0 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['acrobatics', 'insight', 'religion', 'medicine'], savingThrowProficiencies: ['str', 'dex'], languages: ['Common', 'Elvish'], proficienciesOther: ['simple weapons', 'shortsword', 'herbalism kit'],
      weapons: [{ name: 'Quarterstaff', attackBonus: 4, damage: '1d6+2' }, { name: 'Dart', attackBonus: 4, damage: '1d4+2' }], armor: '', shield: false, equipment: ['Quarterstaff', '10 Darts', "Explorer's Pack"], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我走路很轻，说话也很轻。战斗前，我会先呼吸三次。', ideals: '自律。能控制自己的人，才有资格影响世界。', bonds: '风叶静修院给了我方向，我必须证明这份教导能在山外成立。', flaws: '我有时把情绪压得太深，直到它突然爆发。', featuresTraits: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance', 'Mask of the Wild', 'Unarmored Defense', 'Martial Arts'], backstory: 'Sela 从小在风叶静修院练习呼吸、平衡和步法。她的导师认为真正的宁静不能只存在于山门内，于是让她下山，在尘世混乱中检验修行。Sela 带着一根朴素木杖和几枚叶形念珠，寻找能让拳脚服务于慈悲的道路。', age: '74 岁', height: '5 尺 8 寸', weight: '130 磅', eyes: '浅绿色', hair: '深褐色', skin: '古铜色', allies: '风叶静修院的师兄妹', treasure: '三枚叶形木念珠',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 8, maxHp: 10, speed: 35,
    }),
  },
  {
    slug: 'paladin-human-garrick-lighthand', tags: ['human', 'paladin', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-paladin-human-garrick-lighthand', name: 'Garrick Lighthand', race: 'human', subrace: '', className: 'paladin', subclass: '', level: 1, background: 'folk-hero', alignment: 'lg', experiencePoints: 0,
      abilityScores: { str: 15, dex: 10, con: 14, int: 8, wis: 12, cha: 14 }, racialBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['athletics', 'persuasion', 'animal-handling', 'survival'], savingThrowProficiencies: ['wis', 'cha'], languages: ['Common'], proficienciesOther: ['all armor', 'shields', 'simple weapons', 'martial weapons'],
      weapons: [{ name: 'Longsword', attackBonus: 5, damage: '1d8+3' }, { name: 'Javelin', attackBonus: 5, damage: '1d6+3' }], armor: 'Chain Mail', shield: true, equipment: ['Longsword', 'Shield', '5 Javelins', "Priest's Pack", 'Chain Mail', 'Holy Symbol'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我会记住每扇需要夜里点灯的门。只要有人害怕，我就会站到前面。', ideals: '希望。一点光也能让黑暗后退。', bonds: '我守过的那座小教堂提醒我：平凡地方也值得英雄保护。', flaws: '我太急于证明自己，常把危险看得太轻。', featuresTraits: ['Divine Sense', 'Lay on Hands'], backstory: 'Garrick 曾是乡间治安官的助手，负责点灯、巡夜和把醉汉送回家。一场亡灵袭击中，他用火把和旧剑守住教堂大门，直到黎明到来。神殿骑士看见他的勇气，邀请他接受训练。现在他踏上旅途，寻找足以让自己立誓的真正使命。', age: '22 岁', height: '6 尺 0 寸', weight: '185 磅', eyes: '蓝色', hair: '棕色', skin: '白皙', allies: '训练他的神殿骑士', treasure: '袭击之夜留下的焦黑火把头',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 10, maxHp: 13, speed: 30,
    }),
  },
  {
    slug: 'ranger-human-tessa-greenbow', tags: ['human', 'ranger', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-ranger-human-tessa-greenbow', name: 'Tessa Greenbow', race: 'human', subrace: '', className: 'ranger', subclass: '', level: 1, background: 'outlander', alignment: 'ng', experiencePoints: 0,
      abilityScores: { str: 12, dex: 15, con: 14, int: 10, wis: 14, cha: 8 }, racialBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['survival', 'perception', 'nature', 'athletics'], savingThrowProficiencies: ['str', 'dex'], languages: ['Common'], proficienciesOther: ['light armor', 'medium armor', 'shields', 'simple weapons', 'martial weapons'],
      weapons: [{ name: 'Longbow', attackBonus: 4, damage: '1d8+2' }, { name: 'Shortsword', attackBonus: 4, damage: '1d6+2' }], armor: 'Leather', shield: false, equipment: ['Longbow', '20 Arrows', '2 Shortswords', "Explorer's Pack", 'Leather Armor'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我能从脚印里读出比闲聊更多的东西。篝火旁我话不多，但总在听。', ideals: '警觉。危险越早被发现，流血就越少。', bonds: '边境村落信任巡林者，我不能让他们失望。', flaws: '我不擅长请求帮助，总想独自追完踪迹。', featuresTraits: ['Favored Enemy', 'Natural Explorer'], backstory: 'Tessa 在边境猎户家庭长大，学会从折枝、泥印和鸟群惊飞中读出危险。最近，森林里的鹿群开始逃向村庄，狼群却沉默消失。巡林队人手不足，她主动出发寻找原因。她带着绿弓和简易地图，第一次独自走进更深的荒野。', age: '25 岁', height: '5 尺 6 寸', weight: '135 磅', eyes: '棕绿色', hair: '深棕色', skin: '晒成棕色', allies: '边境巡林队', treasure: '父亲亲手削成的绿色长弓握把',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 10, maxHp: 13, speed: 30,
    }),
  },
  {
    slug: 'rogue-halfling-milo-underbough', tags: ['halfling', 'lightfoot', 'rogue', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-rogue-halfling-milo-underbough', name: 'Milo Underbough', race: 'halfling', subrace: 'lightfoot', className: 'rogue', subclass: '', level: 1, background: 'urchin', alignment: 'cn', experiencePoints: 0,
      abilityScores: { str: 8, dex: 15, con: 14, int: 13, wis: 12, cha: 10 }, racialBonuses: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['stealth', 'sleight-of-hand', 'deception', 'perception', 'acrobatics', 'investigation'], savingThrowProficiencies: ['dex', 'int'], languages: ['Common', 'Halfling'], proficienciesOther: ['light armor', 'simple weapons', 'hand crossbow', 'longsword', 'rapier', 'shortsword', "thieves' tools", 'disguise kit'],
      weapons: [{ name: 'Rapier', attackBonus: 4, damage: '1d8+2' }, { name: 'Shortbow', attackBonus: 4, damage: '1d6+2' }], armor: 'Leather', shield: false, equipment: ['Rapier', 'Shortbow', '20 Arrows', "Burglar's Pack", 'Leather Armor', "Thieves' Tools"], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我看起来像迷路，其实已经数清了所有出口。越说我不敢做，我越想证明你错了。', ideals: '机会。每个人都该有一次从坏牌里翻身的机会。', bonds: '市场里的摊贩曾喂饱我，我不能让他们被黑帮吞掉。', flaws: '我忍不住顺手牵羊，哪怕那会让计划变复杂。', featuresTraits: ['Lucky', 'Brave', 'Halfling Nimbleness', 'Naturally Stealthy', 'Expertise', 'Sneak Attack', "Thieves' Cant"], backstory: 'Milo 小时候在大市场替摊贩跑腿，后来学会从拥挤人潮中找机会。他偷过钱袋，也替被欺负的小孩偷回过被骗走的午餐钱。一次他无意偷到一封走私信，发现市场要被更大的犯罪团伙接管，于是带着信离开，寻找能帮他揭开真相的人。', age: '20 岁', height: '3 尺 2 寸', weight: '39 磅', eyes: '棕色', hair: '浅棕色', skin: '红润', allies: '老市场的摊贩和跑腿孩子', treasure: '那封揭露走私路线的密信',
      spellcastingClass: '', spellcastingAbility: '', cantrips: [], spellsKnown: [], spellsPrepared: [], hitDie: 8, maxHp: 10, speed: 25,
    }),
  },
  {
    slug: 'sorcerer-tiefling-ilya-emberveil', tags: ['tiefling', 'sorcerer', 'draconic', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-sorcerer-tiefling-ilya-emberveil', name: 'Ilya Emberveil', race: 'tiefling', subrace: '', className: 'sorcerer', subclass: 'draconic', level: 1, background: 'sage', alignment: 'ng', experiencePoints: 0,
      abilityScores: { str: 8, dex: 14, con: 14, int: 12, wis: 10, cha: 15 }, racialBonuses: { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['arcana', 'insight', 'persuasion', 'deception'], savingThrowProficiencies: ['con', 'cha'], languages: ['Common', 'Infernal', 'Draconic'], proficienciesOther: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
      weapons: [{ name: 'Dagger', attackBonus: 4, damage: '1d4+2' }, { name: 'Light Crossbow', attackBonus: 4, damage: '1d8+2' }], armor: '', shield: false, equipment: ['Light Crossbow', '20 Bolts', 'Component pouch', "Scholar's Pack", '2 Daggers'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我说话前会先观察别人是否害怕我。火焰靠近时，我既紧张又忍不住倾听。', ideals: '自知。只有理解自己的力量，才不会被它吞没。', bonds: '养母的裁缝铺是我第一个家，我要证明她收留我不是错误。', flaws: '我太害怕伤人，有时在必须出手时犹豫。', featuresTraits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy', 'Spellcasting', 'Sorcerous Origin: Draconic Bloodline', 'Dragon Ancestor', 'Draconic Resilience'], backstory: 'Ilya 在小城裁缝铺长大，习惯把角藏在兜帽下。某次火灾中，她伸手挡住倒塌梁木，火焰却绕开了她的皮肤。随后梦里开始出现红龙的低语，指引她寻找血脉源头。她带着一件未完成的红披肩离家，想学会掌控这份危险的馈赠。', age: '19 岁', height: '5 尺 5 寸', weight: '125 磅', eyes: '金橙色', hair: '黑色', skin: '暗红色', allies: '养母经营的小裁缝铺', treasure: '一件未完成的红披肩',
      spellcastingClass: 'sorcerer', spellcastingAbility: 'cha', cantrips: ['fire-bolt', 'minor-illusion', 'light', 'ray-of-frost'], spellsKnown: ['1-magic-missile', '1-shield'], spellsPrepared: [], hitDie: 6, maxHp: 9, speed: 30,
    }),
  },
  {
    slug: 'warlock-tiefling-rook-ashbind', tags: ['tiefling', 'warlock', 'fiend', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-warlock-tiefling-rook-ashbind', name: 'Rook Ashbind', race: 'tiefling', subrace: '', className: 'warlock', subclass: 'fiend', level: 1, background: 'criminal', alignment: 'cn', experiencePoints: 0,
      abilityScores: { str: 8, dex: 14, con: 14, int: 12, wis: 10, cha: 15 }, racialBonuses: { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['deception', 'arcana', 'investigation', 'stealth'], savingThrowProficiencies: ['wis', 'cha'], languages: ['Common', 'Infernal'], proficienciesOther: ['light armor', 'simple weapons', "thieves' tools"],
      weapons: [{ name: 'Light Crossbow', attackBonus: 4, damage: '1d8+2' }, { name: 'Dagger', attackBonus: 4, damage: '1d4+2' }], armor: 'Leather', shield: false, equipment: ['Light Crossbow', '20 Bolts', 'Component pouch', "Scholar's Pack", 'Leather Armor', '2 Daggers'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我说话像仍在法庭上作证。我的影子有时比我更诚实。', ideals: '自由。任何契约都不该成为永恒枷锁。', bonds: '我会洗清自己的罪名，也会找出是谁伪造了账册。', flaws: '我太容易相信“再做一次交易就能解决问题”。', featuresTraits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy', 'Otherworldly Patron: The Fiend', 'Pact Magic', "Dark One's Blessing"], backstory: 'Rook 曾是抄写员，因拒绝篡改账册被陷害入狱。行刑前夜，一个温柔却灼热的声音从灰烬中提出交易：自由，换取未来某个未说明的请求。Rook 接受了。锁链熔断后，他逃出城市，带着焦黑契约残片，试图弄清主顾究竟想要什么。', age: '27 岁', height: '5 尺 10 寸', weight: '150 磅', eyes: '煤黑色', hair: '深红色', skin: '灰红色', allies: '仍相信他清白的旧同事', treasure: '焦黑契约的一角',
      spellcastingClass: 'warlock', spellcastingAbility: 'cha', cantrips: ['eldritch-blast', 'minor-illusion'], spellsKnown: ['1-hex', '1-hellish-rebuke'], spellsPrepared: [], hitDie: 8, maxHp: 10, speed: 30,
    }),
  },
  {
    slug: 'wizard-gnome-merin-inkwhisper', tags: ['gnome', 'rock-gnome', 'wizard', 'level-1', 'dnd5e'],
    characterData: character({
      id: 'blog-wizard-gnome-merin-inkwhisper', name: 'Merin Inkwhisper', race: 'gnome', subrace: 'rock-gnome', className: 'wizard', subclass: '', level: 1, background: 'sage', alignment: 'ng', experiencePoints: 0,
      abilityScores: { str: 8, dex: 14, con: 14, int: 15, wis: 12, cha: 10 }, racialBonuses: { str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 0 }, asiBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
      skillProficiencies: ['arcana', 'history', 'investigation', 'insight'], savingThrowProficiencies: ['int', 'wis'], languages: ['Common', 'Gnomish', 'Draconic'], proficienciesOther: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
      weapons: [{ name: 'Quarterstaff', attackBonus: 1, damage: '1d6-1' }, { name: 'Dagger', attackBonus: 4, damage: '1d4+2' }], armor: '', shield: false, equipment: ['Quarterstaff', 'Component pouch', "Scholar's Pack", 'Spellbook', 'Bottle of ink', 'Quill', 'Parchment (10 sheets)'], coins: { cp: 0, sp: 0, ep: 0, gp: 10, pp: 0 },
      personalityTraits: '我会给每件怪事编号。看到未知符号时，我的第一反应是掏笔而不是后退。', ideals: '发现。世界像一本没编目录的书，我要替它补上索引。', bonds: '地下书库给了我第一本法术书，我要带回值得收藏的新知识。', flaws: '我在该逃跑时也想多看一眼。', featuresTraits: ['Darkvision', 'Gnome Cunning', "Artificer's Lore", 'Tinker', 'Spellcasting', 'Arcane Recovery'], backstory: 'Merin 曾在地下书库修补旧书，最擅长从虫蛀和水渍中复原文字。某本破损手稿里夹着一页真正的法术笔记，她照着练习，意外点亮整座阅览室。导师没有责罚她，而是给了她一本空白法术书，要求她去外面记录活着的魔法。', age: '48 岁', height: '3 尺 5 寸', weight: '42 磅', eyes: '蓝灰色', hair: '浅棕色', skin: '浅棕色', allies: '地下书库的修书师与导师', treasure: '第一本空白法术书，封面仍有墨香',
      spellcastingClass: 'wizard', spellcastingAbility: 'int', cantrips: ['fire-bolt', 'mage-hand', 'prestidigitation'], spellsKnown: ['1-magic-missile', '1-shield', '1-mage-armor', '1-burning-hands', '1-detect-magic', '1-sleep'], spellsPrepared: ['1-magic-missile', '1-shield', '1-mage-armor', '1-sleep'], hitDie: 6, maxHp: 8, speed: 25,
    }),
  },
]
