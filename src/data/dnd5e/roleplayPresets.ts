export interface RoleplayPreset {
  personalityTraits: string
  ideals: string
  flaws: string
}

export const roleplayPresets: readonly RoleplayPreset[] = [
  {
    personalityTraits: 'I study a room before I speak, looking for exits, motives, and hidden dangers.',
    ideals: 'Courage matters most when fear is reasonable.',
    flaws: 'I sometimes delay action because I want one more piece of proof.',
  },
  {
    personalityTraits: 'I keep my promises plainly and expect others to do the same.',
    ideals: 'A community survives when its strongest people protect its weakest.',
    flaws: 'I take betrayal personally and struggle to forgive it.',
  },
  {
    personalityTraits: 'I answer danger with dry humor and a steady hand.',
    ideals: 'Freedom is worth risk, noise, and uncomfortable choices.',
    flaws: 'I make light of problems until they become impossible to ignore.',
  },
  {
    personalityTraits: 'I ask careful questions and remember small details others overlook.',
    ideals: 'Truth should be uncovered, even when powerful people prefer silence.',
    flaws: 'I can become suspicious of allies who are simply afraid.',
  },
  {
    personalityTraits: 'I move first when innocent lives are at stake.',
    ideals: 'Mercy is strength when it does not endanger the helpless.',
    flaws: 'I rush into danger before explaining my plan.',
  },
  {
    personalityTraits: 'I treat every road, ruin, and rumor as a lesson waiting to be learned.',
    ideals: 'Knowledge is only valuable when it helps real people.',
    flaws: 'I underestimate threats that do not fit what I already know.',
  },
  {
    personalityTraits: 'I stay calm in a crisis and speak in practical steps.',
    ideals: 'Discipline turns panic into survival.',
    flaws: 'I can sound cold when others need comfort more than orders.',
  },
  {
    personalityTraits: 'I prefer negotiation, but I keep my weapon ready.',
    ideals: 'Peace won through understanding lasts longer than victory won through fear.',
    flaws: 'I give dangerous people one chance too many.',
  },
  {
    personalityTraits: 'I notice craftsmanship, tracks, tools, and the way things break.',
    ideals: 'Useful skill is a quiet form of honor.',
    flaws: 'I judge people too quickly when they waste resources or effort.',
  },
  {
    personalityTraits: 'I remember losses clearly and let them sharpen my caution.',
    ideals: 'No mistake should be repeated when lives are on the line.',
    flaws: 'I blame myself for failures that were never fully under my control.',
  },
]

export const roleplayPresetsZh: readonly RoleplayPreset[] = [
  {
    personalityTraits: '我开口前会先观察房间，寻找出口、动机和隐藏的危险。',
    ideals: '当恐惧合情合理时，勇气才最有价值。',
    flaws: '我有时会因为想再多确认一点证据而拖延行动。',
  },
  {
    personalityTraits: '我直白地遵守承诺，也期待别人同样如此。',
    ideals: '一个共同体能存续，是因为强者愿意保护弱者。',
    flaws: '我会把背叛看得很重，很难真正原谅。',
  },
  {
    personalityTraits: '面对危险时，我习惯用冷幽默和稳定的手来回应。',
    ideals: '自由值得冒险，也值得承受混乱和不舒服的选择。',
    flaws: '我常把问题说得很轻，直到它们变得无法忽视。',
  },
  {
    personalityTraits: '我会谨慎提问，并记住别人忽略的小细节。',
    ideals: '真相应该被揭开，即使有权势的人更希望沉默。',
    flaws: '我可能会怀疑那些其实只是害怕的盟友。',
  },
  {
    personalityTraits: '当无辜者的生命受到威胁时，我会第一个行动。',
    ideals: '只要不危及无助者，仁慈就是一种力量。',
    flaws: '我经常还没解释计划，就已经冲进危险里。',
  },
  {
    personalityTraits: '我把每条道路、每处遗迹和每个传闻都看作等待学习的课程。',
    ideals: '知识只有在帮助真实的人时才有价值。',
    flaws: '对于不符合我既有认知的威胁，我常常低估它们。',
  },
  {
    personalityTraits: '危机中我会保持冷静，并把话说成可执行的步骤。',
    ideals: '纪律能把恐慌转化为生存机会。',
    flaws: '当别人更需要安慰而不是命令时，我可能显得冷淡。',
  },
  {
    personalityTraits: '我偏好谈判，但武器始终在手边。',
    ideals: '通过理解赢得的和平，比通过恐惧赢得的胜利更持久。',
    flaws: '我会给危险的人太多次机会。',
  },
  {
    personalityTraits: '我会注意工艺、足迹、工具，以及事物损坏的方式。',
    ideals: '有用的技艺是一种安静的荣誉。',
    flaws: '当别人浪费资源或努力时，我会过快地评判他们。',
  },
  {
    personalityTraits: '我清楚记得失去，并让这些记忆磨利我的谨慎。',
    ideals: '只要生命还悬在一线，同样的错误就不该重复。',
    flaws: '我会为那些从来不完全受我控制的失败责备自己。',
  },
]

function presetsForLocale(locale = 'en'): readonly RoleplayPreset[] {
  return locale.startsWith('zh') ? roleplayPresetsZh : roleplayPresets
}

export function pickRoleplayPreset(locale = 'en'): RoleplayPreset {
  const presets = presetsForLocale(locale)
  return presets[Math.floor(Math.random() * presets.length)]!
}

export function pickRoleplayValue(field: keyof RoleplayPreset, locale = 'en'): string {
  return pickRoleplayPreset(locale)[field]
}
