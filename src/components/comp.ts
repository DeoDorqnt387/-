import { ref, type Ref } from 'vue'

interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

export function REQ() {
  const userName: Ref<string> = ref('Deodorqnt')
  const description: Ref<string> = ref('For Bretonnia - For the Queen')

  const socialLinks: Ref<SocialLink[]> = ref([
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      icon: './images/youtube.png',
      color: '#FF0000'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/DeoDorqnt387',
      icon: './images/github.png',
      color: '#ffffff'
    },
    {
      name: 'Backloggd',
      url: 'https://www.backloggd.com/u/DeoDorqnt/',
      icon: './images/backloggd.jpg',
      color: '#4A90E2'
    },
    {
      name: 'MyAnimeList',
      url: 'https://myanimelist.net/profile/DeoDorqnt?q=DeoDorqnt&cat=user',
      icon: './images/mal.jpg',
      color: '#2E51A2'
    },
    {
      name: 'AniList',
      url: 'https://anilist.co/user/DeoDorqnt/',
      icon: './images/ani.png',
      color: '#02A9FF'
    },
    {
      name: 'Kitsu',
      url: 'https://kitsu.app/users/1610485',
      icon: './images/kitsu.png',
      color: '#F75239'
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/profiles/76561198995714902',
      icon: './images/steam.png',
      color: '#00ADEE'
    }
  ])



  return {
    userName,
    description,
    socialLinks,
  }
}