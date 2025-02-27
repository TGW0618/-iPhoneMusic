// 广播数据

import { defineStore } from "pinia";

export const useRadioData = defineStore("RadioData", {
  state: () => {
    return {
      // 轮播图数据
      RadioDataList: [
        {
          id: 1,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-1.webp",
          to: "MusicBoxListSonView",
          VideoURL: "/src/assets/HomepageViewData/MusicSonTop/From Zero.mp4",
        },
        {
          id: 2,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-2.webp",
          to: "MusicBoxListSonView",
          VideoURL: "/src/assets/HomepageViewData/MusicSonTop/HAPPY.mp4",
        },
        {
          id: 3,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-3.webp",
          to: "MusicBoxListSonView",
          VideoURL: "/src/assets/HomepageViewData/MusicSonTop/HAPPY.mp4",
        },
        {
          id: 4,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-4.webp",
          to: "MusicBoxListSonView",
          VideoUR: "",
        },
        {
          id: 5,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-5.webp",
          to: "MusicBoxListSonView",
          VideoUR: "",
        },
        {
          id: 6,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-6.webp",
          to: "MusicBoxListSonView",
          VideoUR: "",
        },
        {
          id: 7,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-7.webp",
          to: "MusicBoxListSonView",
          VideoUR: "",
        },
        {
          id: 8,
          imgURL:
            "/src/assets/RadioViewData/RadioView-Carousel/RadioView-Carousel-8.webp",
          to: "MusicBoxListSonView",
          VideoUR: "",
        },
      ],
      // 风格电台1数据
      StyleRadioBoxList1: [
        {
          id: 1,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-1.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 2,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-2.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 3,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-3.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 4,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-4.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 5,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-5.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 6,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-6.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 7,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-7.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 8,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-8.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 9,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-9.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 10,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-10.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
      ],
      // 风格电台2数据
      StyleRadioBoxList2: [
        {
          id: 1,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-11.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 2,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-12.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 3,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-13.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 4,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-14.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 5,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-15.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 6,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-16.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 7,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-17.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 8,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-18.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 9,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-19.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
        {
          id: 10,
          imgURL: "/src/assets/RadioViewData/StyleRadioImg/StyleRadio-20.webp",
          SongTitle: "粤语流行电台",
          ArtistName: "Apple Music 电台",
        },
      ],
      // 电台主持人数据
      RadioHostList: [
        {
          id: 1,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-8.webp",
          SongTitle: "The Zane Lowe Show",
        },
        {
          id: 2,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-7.webp",
          SongTitle: "The Ebro Show",
        },
        {
          id: 3,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-6.webp",
          SongTitle: "The Chart Show",
        },
        {
          id: 4,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-5.webp",
          SongTitle: "J-Pop Now Radio",
        },
        {
          id: 5,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-4.webp",
          SongTitle: "Tokyo Highway Radio",
        },
        {
          id: 6,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-3.webp",
          SongTitle: "Rocket Hour Radio",
        },
        {
          id: 7,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-2.webp",
          SongTitle: "Deep Hidden Meaning",
        },
        {
          id: 8,
          imgURL: "/src/assets/RadioViewData/RadioHostImg/LongRe-1.webp",
          SongTitle: "Hidden Meaning",
        },
      ],
      // 艺人主持节目数据
      ArtistsHostProList: [
        {
          id: 1,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-1.webp",
          SongTitle: "Beats in Space",
        },
        {
          id: 2,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-2.webp",
          SongTitle: "Rocket Hour",
        },
        {
          id: 3,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-3.webp",
          SongTitle: "Huey's'80s Radio",
        },
        {
          id: 4,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-4.webp",
          SongTitle: "Deep Hidden Meaning",
        },
        {
          id: 5,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-5.webp",
          SongTitle: "What Would Dolly Do? Radio",
        },
        {
          id: 6,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-6.webp",
          SongTitle: "AOI Radio With De La Soul",
        },
        {
          id: 7,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-7.webp",
          SongTitle: "Home Now Radio",
        },
        {
          id: 8,
          imgURL: "/src/assets/RadioViewData/ArtistsHostProImg/ArtistsHostProImg-8.webp",
          SongTitle: "The Bootsy Collins Show",
        },
      ],
      // 最近播放数据
      RecentlyPlayedList:[
        {
          id: 1,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-1.webp",
          SongTitle: "The Story of a Trans",
          ArtistName: "Hitmaker Turned...",
        },
        {
          id: 2,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-2.webp",
          SongTitle: "探索电台",
          ArtistName: "",
        },
        {
          id: 3,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-3.webp",
          SongTitle: "陈奕迅",
          ArtistName: "",
        },
        {
          id: 4,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-4.webp",
          SongTitle: "林俊杰与类似艺人",
          ArtistName: "",
        },
        {
          id: 5,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-5.webp",
          SongTitle: "长毛海的电台",
          ArtistName: "",
        },
        {
          id: 6,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-6.webp",
          SongTitle: "心情有点 Blue",
          ArtistName: "",
        },
        {
          id: 7,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-7.webp",
          SongTitle: "爱情",
          ArtistName: "",
        },
        {
          id: 8,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-8.webp",
          SongTitle: "凝神专注",
          ArtistName: "",
        },
        {
          id: 9,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-4.webp",
          SongTitle: "林俊杰与类似艺人",
          ArtistName: "",
        },
        {
          id: 10,
          imgURL: "/src/assets/RadioViewData/RecentlyPlayedImg/RecentlyPlayedImg-5.webp",
          SongTitle: "长毛海的电台",
          ArtistName: "",
        },

      ],
      // 探索更多精彩内容数据
      ExploreDataList:[
        {
          id: "1",
          ExploreTitle: "唱作歌手",
        },
        {
          id: "2",
          ExploreTitle: "国际流行",
        },
        {
          id: "3",
          ExploreTitle: "舞曲",
        },
        {
          id: "4",
          ExploreTitle: "电子音乐",
        },
        {
          id: "5",
          ExploreTitle: "爵士乐",
        },
        {
          id: "6",
          ExploreTitle: "嘻哈/R&B",
        },
        {
          id: "7",
          ExploreTitle: "古典",
        },
        {
          id: "8",
          ExploreTitle: "另类与独立",
        },
        {
          id: "9",
          ExploreTitle: "摇滚",
        },
      ],
      // 新近内容
      NewContentDataList:[
        {
          id: 1,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-1.webp",
          SongTitle: "Episode 660",
          ArtistName: "",
        },
        {
          id: 2,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-2.webp",
          SongTitle: "Episode 661",
          ArtistName: "",
        },
        {
          id: 3,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-3.webp",
          SongTitle: "Jelly Roll",
          ArtistName: "",
        },
        {
          id: 4,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-4.webp",
          SongTitle: "Kelsea Ballerini",
          ArtistName: "",
        },
        {
          id: 5,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-5.webp",
          SongTitle: "Connecting  Lizzy",
          ArtistName: "",
        },
        {
          id: 6,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-6.webp",
          SongTitle: "Outkast Mix",
          ArtistName: "",
        },
        {
          id: 7,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-7.webp",
          SongTitle: "",
          ArtistName: "",
        },
        {
          id: 8,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-8.webp",
          SongTitle: "",
          ArtistName: "",
        },
        {
          id: 9,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-9.webp",
          SongTitle: "",
          ArtistName: "",
        },
        {
          id: 10,
          imgURL:"/src/assets/RadioViewData/NewContentImg/NewContentImg-10.webp",
          SongTitle: "",
          ArtistName: "",
        },
       
      ]
    };
  },
  getters: {},
  actions: {},
});
