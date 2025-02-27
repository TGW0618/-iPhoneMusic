import { defineStore } from "pinia";
import { reactive,ref } from "vue";

// 新发现页数据
export const useNewFinedStore = defineStore("NewFinedDB", {
  state: () => {
    return {
      NewFinedData: ref({
        // 轮播图数据
        MusicCarouselData:reactive( [
          {
            id: 1,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-7.webp",
            SongTitle: "十万伏特",
            ArtistName: "汪苏泷",
            AlbumType: "国语流型",
            ReleaseDate: "2024年",
            Description:
              "前作《21世纪罗曼史》里，汪苏泷在《告别前要跳舞》中这样唱道:“再吃颗电池吧 妈妈/抓的越紧反而就越靠近悬崖/不如在这放手吧 妈妈/如果我被人看到啦/如果我本性暴露啦/如果我变成怪物/也不会蒸发一场末日狂欢后更多...",
            VideoURL:
              "/src/assets/NewFindViewData/CarouselMp4/Carousel (1).mp4",
          },
          {
            id: 2,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-5.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoURL:
              "/src/assets/NewFindViewData/CarouselMp4/Carousel (2).mp4",
          },
          {
            id: 3,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-3.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoURL:
              "/src/assets/NewFindViewData/CarouselMp4/Carousel (3).mp4",
          },
          {
            id: 4,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-4.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoUR: "/src/assets/NewFindViewData/CarouselMp4/Carousel (4).mp4",
          },
          {
            id: 5,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-2.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoUR: "/src/assets/NewFindViewData/CarouselMp4/Carousel (5).mp4",
          },
          {
            id: 6,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-6.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoUR: "/src/assets/NewFindViewData/CarouselMp4/Carousel (6).mp4",
          },
          {
            id: 7,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-1.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoUR: "/src/assets/NewFindViewData/CarouselMp4/Carousel (7).mp4",
          },
          {
            id: 8,
            imgURL:
              "/src/assets/HomepageViewData/MusicCarousel/MusicCarousel-8.webp",
            SongTitle: "歌曲标题",
            ArtistName: "歌手",
            AlbumType: "类型",
            ReleaseDate: "出版时间",
            Description: "内容介绍",
            VideoUR: "/src/assets/NewFindViewData/CarouselMp4/Carousel (8).mp4",
          },
        ]),
        // 最新歌曲数据
        MusicNewSongData: [
          {
            id: 1,
            imgURL: "/src/assets//Song/MusicImg/MusicImg-1.webp",
            SongTitle: "apt",
            ArtistName: "Jex",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/apt copy.m4a",
          },
          {
            id: 2,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-3.webp",
            SongTitle: "孤独患者",
            ArtistName: "陈奕迅",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/孤独患者 copy.mp3",
          },
          {
            id: 3,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-4.webp",
            SongTitle: "暧昧",
            ArtistName: "Jex",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/暧昧 copy.m4a",
          },
          {
            id: 4,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-5.webp",
            SongTitle: "What About Love",
            ArtistName: "张艺兴",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/What About Love copy.m4a",
          },
          {
            id: 5,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-6.webp",
            SongTitle: "Cry_For_Me",
            ArtistName: "Jex",
            ReleaseDate: "2024年",
            SongURL:
              "/src//assets//Song//MusicDB/Cry_For_Me_(feat._Ami) copy.m4a",
          },
          {
            id: 6,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-7.webp",
            SongTitle: "痴心绝对",
            ArtistName: "李圣杰",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/痴心绝对.mp3",
          },
          {
            id: 7,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-8.webp",
            SongTitle: "一时的选择",
            ArtistName: "林俊杰",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/一时的选择.mp3",
          },
          {
            id: 8,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-9.webp",
            SongTitle: "以后要做的事",
            ArtistName: "林俊杰",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/以后要做的事.mp3",
          },
          {
            id: 9,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-10.webp",
            SongTitle: "冰河时代",
            ArtistName: "G.E.M.邓紫棋",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/冰河时代.mp3",
          },
          {
            id: 10,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-11.webp",
            SongTitle: "十年",
            ArtistName: "陈奕迅",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/十年.mp3",
          },
          {
            id: 11,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-12.webp",
            SongTitle: "可惜没如果",
            ArtistName: "林俊杰",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/可惜没如果.mp3",
          },
          {
            id: 12,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-13.webp",
            SongTitle: "命硬",
            ArtistName: "侧田",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/命硬.mp3",
          },
          {
            id: 13,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-14.webp",
            SongTitle: "因为爱情",
            ArtistName: "陈奕迅;王菲",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/因为爱情.mp3",
          },
          {
            id: 14,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-15.webp",
            SongTitle: "失忆症",
            ArtistName: "王琪玮",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/失忆症.mp3",
          },
          {
            id: 15,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-16.webp",
            SongTitle: "得不到的温柔",
            ArtistName: "汪苏泷",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/得不到的温柔.mp3",
          },
          {
            id: 16,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-17.webp",
            SongTitle: "特别的人",
            ArtistName: "方大同",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/特别的人.mp3",
          },
          {
            id: 17,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-18.webp",
            SongTitle: "心墙",
            ArtistName: "林俊杰",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/心墙.mp3",
          },
          {
            id: 18,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-19.webp",
            SongTitle: "必杀技",
            ArtistName: "古巨基",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/必杀技.mp3",
          },
          {
            id: 19,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-20.webp",
            SongTitle: "无言感激",
            ArtistName: "谭咏麟",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 20,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-21.webp",
            SongTitle: "明天以後",
            ArtistName: "Lam, Chan",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/明天以後.mp3",
          },
          {
            id: 21,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-22.webp",
            SongTitle: "明年今日",
            ArtistName: "陈奕迅",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/明年今日.mp3",
          },
          {
            id: 22,
            imgURL: "/src/assets/Song/MusicImg/MusicImg-23.webp",
            SongTitle: "晴",
            ArtistName: "汪苏泷",
            ReleaseDate: "2024年",
            SongURL: "/src//assets//Song//MusicDB/晴.mp3",
          },
        ],
        // 最新发行数据
        MusicNewReleaseData: [
          {
            id: 1,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-19.webp",
            SongTitle: "十万伏特",
            ArtistName: "汪苏泷",
            AlbumType: "国语流型",
            ReleaseDate: "2024年",
            Description:
              "前作《21世纪罗曼史》里，汪苏泷在《告别前要跳舞》中这样唱道:“再吃颗电池吧 妈妈/抓的越紧反而就越靠近悬崖/不如在这放手吧 妈妈/如果我被人看到啦/如果我本性暴露啦/如果我变成怪物/也不会蒸发一场末日狂欢后更多...",
            VideoURL: "",
            Song: [
              {
                id: 1,
                SongTitle: "十年",
                ArtistName: "汪苏泷",
                SongURL: "/src//assets//Song//MusicDB/十年.mp3",
                imgURL:
                  "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-19.webp",ReleaseDate: "3:25",
              },
              {
                id: 2,
                SongTitle: "无言感激",
                ArtistName: "汪苏泷",
                SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
                imgURL:
                  "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-19.webp",ReleaseDate: "3:25",
              },
              {
                id: 3,
                SongTitle: "得不到的温柔",
                ArtistName: "汪苏泷",
                SongURL: "/src//assets//Song//MusicDB/得不到的温柔.mp3",
                imgURL:
                  "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-19.webp",ReleaseDate: "3:25",
              },
            ],
          },
          {
            id: 2,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-20.webp",
            SongTitle: "XIANG YU YIYANG 线上演唱会(live)",
            ArtistName: "林宥嘉",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },

          {
            id: 3,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-18.webp",
            SongTitle: "Unreal Unearth: Unending",
            ArtistName: "Hozier",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 4,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-17.webp",
            SongTitle: "青春疾走-EP",
            ArtistName: "林洁心",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 5,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-16.webp",
            SongTitle: "Merry Christmas",
            ArtistName: "Mariah Carey",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 6,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-15.webp",
            SongTitle: "Hadestown: Live From London",
            ArtistName: "Anais Mitchell, Hadestown",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 7,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-14.webp",
            SongTitle: "Schubert: Sonata in C Minor",
            ArtistName: "小林爱实",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 8,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-13.webp",
            SongTitle: "How Can We Lose When We're so Sincere",
            ArtistName: "Lontalius",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 9,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-12.webp",
            SongTitle: "Beats In Space 139",
            ArtistName: "Tim Sweeney",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 10,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-11.webp",
            SongTitle: "Draw Blood",
            ArtistName: "Svarttjern",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 11,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-10.webp",
            SongTitle: "Woman(2024 Remaster)-EP",
            ArtistName: "Couch Slut",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 12,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-9.webp",
            SongTitle: "not so xmas xmas,Vol.2-EP",
            ArtistName: "Garretrh.T, Gordon Flanders",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 13,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-8.webp",
            SongTitle: "Trapper+Rapper 2",
            ArtistName: "Big $wift",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 14,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-7.webp",
            SongTitle: "Zoon(Expander Edition)",
            ArtistName: "The Nefilim",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 15,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-6.webp",
            SongTitle: "The Brutalist",
            ArtistName: "Daniel Blumberg",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 16,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-5.webp",
            SongTitle: "MESO-EP",
            ArtistName: "Hands Like Houses",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 17,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-4.webp",
            SongTitle: "I Hope I Die Here",
            ArtistName: "No Cure",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 18,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-3.webp",
            SongTitle: "Yom-Ma-Lok",
            ArtistName: "Whispers",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 19,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-2.webp",
            SongTitle: "I Just Got A",
            ArtistName: "YoungBoy Never Broke Again",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
          {
            id: 20,
            imgURL:
              "/src/assets/NewFindViewData/NewReleaseImg/NewReleaseImg-1.webp",
            SongTitle: "Night Demon",
            ArtistName: "Mystery Blue",
            AlbumType: "类型",
            ReleaseDate: "时间",
            Description: "内容介绍",
            VideoURL: "",
          },
        ],
        // 近期更新数据
        MusicRecentUpdateData: [
          {
            id: 1,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-20.webp",
            SongTitle: "A-List: 国际流行",
            ArtistName: "Apple Music",
          },
          {
            id: 2,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-19.webp",
            SongTitle: "网络热播",
            ArtistName: "Apple Music",
          },
          {
            id: 3,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-18.webp",
            SongTitle: "A-List:国语流行",
            ArtistName: "Apple Music 国语流行",
          },
          {
            id: 4,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-17.webp",
            SongTitle: "潜力新歌:国语流行",
            ArtistName: "Apple Music 国语流行",
          },
          {
            id: 5,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-16.webp",
            SongTitle: "ALPHA:她引领声浪",
            ArtistName: "Apple Music",
          },
          {
            id: 6,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-15.webp",
            SongTitle: "今日热门",
            ArtistName: "Apple Music 热门",
          },
          {
            id: 7,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-14.webp",
            SongTitle: "每日来“电”",
            ArtistName: "Apple Music 电子",
          },
          {
            id: 8,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-13.webp",
            SongTitle: "来自台湾",
            ArtistName: "Apple Music",
          },
          {
            id: 9,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-12.webp",
            SongTitle: "Rap Life",
            ArtistName: "Apple Music 嘻哈/说唱",
          },
          {
            id: 10,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-11.webp",
            SongTitle: "潜力新歌:J-Pop",
            ArtistName: "Apple Music J-Pop",
          },
          {
            id: 11,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-10.webp",
            SongTitle: "剧集中的歌",
            ArtistName: "Apple Music",
          },
          {
            id: 12,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-9.webp",
            SongTitle: "游戏原声",
            ArtistName: "Apple Music 打游戏",
          },
          {
            id: 13,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-8.webp",
            SongTitle: "Up Next",
            ArtistName: "Apple Music 潜力之星",
          },
          {
            id: 14,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-7.webp",
            SongTitle: "电影中的歌",
            ArtistName: "Apple Music",
          },
          {
            id: 15,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-6.webp",
            SongTitle: "今日乡村乐",
            ArtistName: "Apple Music 乡村音乐",
          },
          {
            id: 16,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-5.webp",
            SongTitle: "C-Pop 潮",
            ArtistName: "ラ减pple Music C-Pop",
          },
          {
            id: 17,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-4.webp",
            SongTitle: "中嘻合璧",
            ArtistName: "Apple Music C-Pop",
          },
          {
            id: 18,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-3.webp",
            SongTitle: "电子乐新歌",
            ArtistName: "Apple Music 电子",
          },
          {
            id: 19,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-2.webp",
            SongTitle: "R&B 进行时",
            ArtistName: "Apple Music R&B",
          },
          {
            id: 20,
            imgURL:
              "/src/assets/NewFindViewData/RecentUpdateImg/RecentUpdateImg-1.webp",
            SongTitle: "动漫新歌",
            ArtistName: "Apple Music 日本动漫音乐",
          },
        ],
        // 节日电影数据
        MusicFestivalData: [
          {
            id: 1,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-20.webp",
            SongTitle: "Disenchanted (OriginalSoundtrack)",
            ArtistName: "Alan Menken、 Stephen...",
          },
          {
            id: 2,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-19.webp",
            SongTitle: "Office Christmas Party",
            ArtistName: "(Original Motion Picture...",
          },
          {
            id: 3,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-18.webp",
            SongTitle: "圣诞电影金曲",
            ArtistName: "圣诞特辑",
          },
          {
            id: 4,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-17.webp",
            SongTitle: "Jingle Jangle: A Christmas",
            ArtistName: "Journey (Music From The..",
          },
          {
            id: 5,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-16.webp",
            SongTitle: "Noelle (Original Motion PictureSoundtrack)",
            ArtistName: "Clyde Lawrence、Cody.",
          },
          {
            id: 6,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-15.webp",
            SongTitle: "Red One (Original Motion PictureSoundtrack)",
            ArtistName: "亨利·杰克曼",
          },
          {
            id: 7,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-14.webp",
            SongTitle: "The Nutcracker and the FourRealms(Original Motion...",
            ArtistName: "詹姆斯·纽顿·霍华",
          },
          {
            id: 8,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-13.webp",
            SongTitle: "Harry Potter and the DeathlyHallows",
            ArtistName: "亚历山大·德斯普拉",
          },
          {
            id: 9,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-12.webp",
            SongTitle: "The Star (Original Motion PictureSoundtrack)",
            ArtistName: "",
          },
          {
            id: 10,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-11.webp",
            SongTitle:
              "Harry Potter and the Half-Blood Prince (Original Motion...",
            ArtistName: "Nicholas Hooper",
          },
          {
            id: 11,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-10.webp",
            SongTitle: "The Nightmare BeforeChristmas (Special Edition)...",
            ArtistName: "丹尼·叶夫曼",
          },
          {
            id: 12,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-9.webp",
            SongTitle: "Elf (Original Motion PictureScore)",
            ArtistName: "约翰·戴柏尼",
          },
          {
            id: 13,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-8.webp",
            SongTitle: "Olaf's Frozen Adventure(Original Soundtrack)",
            ArtistName: "Elyssa Samsel、 Kate..",
          },
          {
            id: 14,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-7.webp",
            SongTitle: "Godmothered(OriginalSoundtrack)",
            ArtistName: "蕾切尔·波特曼",
          },
          {
            id: 15,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-6.webp",
            SongTitle: "Krampus-Original MotionPicture Soundtrack",
            ArtistName: "Douglas Pipes",
          },
          {
            id: 16,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-5.webp",
            SongTitle: "George Balanchine's TheNutcracker (Music from the...",
            ArtistName: "大卫·津曼、New York City..",
          },
          {
            id: 17,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-4.webp",
            SongTitle:
              "Harry Potter and the DeathlyHallows, Pt.2(Original Motio..",
            ArtistName: "亚历山大·德斯普拉",
          },
          {
            id: 18,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-3.webp",
            SongTitle:
              "The Best Man Holiday: OriginalMotion Picture Soundtrack",
            ArtistName: "",
          },
          {
            id: 19,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-2.webp",
            SongTitle: "Home Alone (Original MotionPicture Soundtrack)...",
            ArtistName: "约翰·威廉姆斯",
          },
          {
            id: 20,
            imgURL:
              "/src/assets/NewFindViewData/FestivalImg/FestivalImg-1.webp",
            SongTitle:
              "Harry Potter and the Chamberof Secrets (Original Motion...",
            ArtistName: "William Ross、约翰·威廉姆斯",
          },
        ],
        // 正在流行中的音乐数据
        MusicPopularData: reactive([
          {
            id: 1,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-1.webp",
            SongTitle: "交换余生",
            ArtistName: "林俊杰",
            ReleaseDate: "2004年",
            SongURL: "/src//assets//Song//MusicDB/孤独患者 copy.mp3",
          },
          {
            id: 2,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-2.webp",
            SongTitle: "江南",
            ArtistName: "林俊杰",
            ReleaseDate: "2004年",
            SongURL: "/src//assets//Song//MusicDB/孤独患者 copy.mp3",
          },
          {
            id: 3,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-3.webp",
            SongTitle: "爱不会绝迹",
            ArtistName: "林俊杰",
            ReleaseDate: "2004年",
            SongURL: "/src//assets//Song//MusicDB/孤独患者 copy.mp3",
          },
          {
            id: 4,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-4.webp",
            SongTitle: "手心的蔷薇",
            ArtistName: "林俊杰",
            ReleaseDate: "2052年",
            SongURL: "/src//assets//Song//MusicDB/孤独患者 copy.mp3",
          },
          {
            id: 5,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-5.webp",
            SongTitle: "痴心绝对",
            ArtistName: "李圣杰",
            ReleaseDate: "2021年",
            SongURL: "/src//assets//Song//MusicDB/痴心绝对.mp3",
          },
          {
            id: 6,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-6.webp",
            SongTitle: "痴心绝对",
            ArtistName: "李圣杰",
            ReleaseDate: "2044年",
            SongURL: "/src//assets//Song//MusicDB/痴心绝对.mp3",
          },
          {
            id: 7,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-7.webp",
            SongTitle: "痴心绝对",
            ArtistName: "李圣杰",
            ReleaseDate: "2022年",
            SongURL: "/src//assets//Song//MusicDB/痴心绝对.mp3",
          },
          {
            id: 8,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-8.webp",
            SongTitle: "痴心绝对",
            ArtistName: "李圣杰",
            ReleaseDate: "2011年",
            SongURL: "/src//assets//Song//MusicDB/痴心绝对.mp3",
          },
          {
            id: 9,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-9.webp",
            SongTitle: "十年",
            ArtistName: "陈奕迅",
            ReleaseDate: "2021年",
            SongURL: "/src//assets//Song//MusicDB/十年.mp3",
          },
          {
            id: 10,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-10.webp",
            SongTitle: "十年",
            ArtistName: "陈奕迅",
            ReleaseDate: "2019年",
            SongURL: "/src//assets//Song//MusicDB/十年.mp3",
          },
          {
            id: 11,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-11.webp",
            SongTitle: "十年",
            ArtistName: "陈奕迅",
            ReleaseDate: "2011年",
            SongURL: "/src//assets//Song//MusicDB/十年.mp3",
          },
          {
            id: 12,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-12.webp",
            SongTitle: "十年",
            ArtistName: "陈奕迅",
            ReleaseDate: "2012年",
            SongURL: "/src//assets//Song//MusicDB/十年.mp3",
          },
          {
            id: 13,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-13.webp",
            SongTitle: "无言感激",
            ReleaseDate: "2014年",
            ArtistName: "谭咏麟",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 14,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-14.webp",
            SongTitle: "无言感激",
            ArtistName: "谭咏麟",
            ReleaseDate: "2014年",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 15,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-15.webp",
            SongTitle: "无言感激",
            ArtistName: "谭咏麟",
            ReleaseDate: "2015年",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 16,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-16.webp",
            SongTitle: "无言感激",
            ArtistName: "谭咏麟",
            ReleaseDate: "2016年",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 17,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-17.webp",
            SongTitle: "无言感激",
            ReleaseDate: "2017年",
            ArtistName: "谭咏麟",
            SongURL: "/src//assets//Song//MusicDB/无言感激.mp3",
          },
          {
            id: 18,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-18.webp",
            SongTitle: "明年今日",
            ReleaseDate: "2018年",
            ArtistName: "陈奕迅",
            SongURL: "/src//assets//Song//MusicDB/明年今日.mp3",
          },
          {
            id: 19,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-19.webp",
            SongTitle: "明年今日",
            ReleaseDate: "2019年",
            ArtistName: "陈奕迅",
            SongURL: "/src//assets//Song//MusicDB/明年今日.mp3",
          },
          {
            id: 20,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-20.webp",
            SongTitle: "明年今日",
            ReleaseDate: "2020年",
            ArtistName: "陈奕迅",
            SongURL: "/src//assets//Song//MusicDB/明年今日.mp3",
          },
          {
            id: 21,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-21.webp",
            SongTitle: "明年今日",
            ArtistName: "陈奕迅",
            ReleaseDate: "2021年",
            SongURL: "/src//assets//Song//MusicDB/明年今日.mp3",
          },

          {
            id: 22,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-22.webp",
            SongTitle: "晴",
            ReleaseDate: "2022年",
            ArtistName: "汪苏泷",
            SongURL: "/src//assets//Song//MusicDB/晴.mp3",
          },
          {
            id: 23,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-23.webp",
            SongTitle: "晴",
            ReleaseDate: "2023年",
            ArtistName: "汪苏泷",
            SongURL: "/src//assets//Song//MusicDB/晴.mp3",
          },
          {
            id: 24,
            imgURL: "/src/assets/NewFindViewData/PopularImg/PopularImg-24.webp",
            SongTitle: "晴",
            ReleaseDate: "2024年",
            ArtistName: "汪苏泷",
            SongURL: "/src//assets//Song//MusicDB/晴.mp3",
          },
        ]),
      }),
    };
  },
  getters: {},
  actions: {},
});
