import { defineStore } from 'pinia'

export const useSong = defineStore('Song', {
        state: () => {
            return {
                Songlist: [{
                        id: 1,
                        imgURL: "/src/assets/HomepageViewData/MusicSongList/MusicSongList-1.webp",
                        SongTitle: "Told You So",
                        ArtistName: "Jex",
                        SongURL: "../assets/Song/MusicDB/岛屿.mp3",
                    },
                    {
                        id: 2,
                        imgURL: "/src/assets/HomepageViewData/MusicSongList/MusicSongList-2.webp",
                        SongTitle: "Told You So",
                        ArtistName: "Jex",
                        SongURL: "../assets/Song/MusicDB/孤独患者.mp3",
                    },
                    {
                        id: 3,
                        imgURL: "/src/assets/HomepageViewData/MusicSongList/MusicSongList-3.webp",
                        SongTitle: "Told You So",
                        ArtistName: "Jex",
                        SongURL: "../assets/Song/MusicDB/暧昧.m4a",
                    },
                    {
                        id: 4,
                        imgURL: "/src/assets/HomepageViewData/MusicSongList/MusicSongList-4.webp",
                        SongTitle: "Told You So",
                        ArtistName: "Jex",
                        SongURL: "../assets/Song/MusicDB/What About Love.m4a",
                    },
                    {
                        id: 5,
                        imgURL: "/src/assets/HomepageViewData/MusicSongList/MusicSongList-5.webp",
                        SongTitle: "Told You So",
                        ArtistName: "Jex",
                        SongURL: "../assets/Song/MusicDB/Cry_For_Me_(feat._Ami).m4a",
                    },
                ]
            }
        },
        getters: {},
        actions: {},
    }

)