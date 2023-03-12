import "./index.css"
import AlbumCard from "./AlbumCard"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [
                {
                    "Title": "4:44",
                    "HaveVinyl": false,
                    "Artist": "JAY-Z",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048517513c4956ea5552caf02eab6",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2737513c4956ea5552caf02eab6",
                        "md": "https://i.scdn.co/image/ab67616d00001e027513c4956ea5552caf02eab6"
                    },
                    "id": "7GoZNNb7Yl74fpk8Z6I2cv",
                    "DateListened": "1/17/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 10,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/7GoZNNb7Yl74fpk8Z6I2cv",
                    "ReleaseDate": "07/07/2017"
                },
                {
                    "Title": "808s & Heartbreak",
                    "HaveVinyl": false,
                    "Artist": "Kanye West",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851346d77e155d854735410ed18",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273346d77e155d854735410ed18",
                        "md": "https://i.scdn.co/image/ab67616d00001e02346d77e155d854735410ed18"
                    },
                    "id": "3WFTGIO6E3Xh4paEOBY9OU",
                    "DateListened": "1/20/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU",
                    "ReleaseDate": "11/24/2008"
                },
                {
                    "Title": "A Fever You Can't Sweat Out",
                    "HaveVinyl": false,
                    "Artist": "Panic! at the Disco",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048510a8881b0d247346c3c447bf3",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2730a8881b0d247346c3c447bf3",
                        "md": "https://i.scdn.co/image/ab67616d00001e020a8881b0d247346c3c447bf3"
                    },
                    "id": "2YeOhhJg3OWpN0F1VYPxtW",
                    "DateListened": "3/2/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/2YeOhhJg3OWpN0F1VYPxtW",
                    "ReleaseDate": "09/27/2005"
                },
                {
                    "Title": "AM",
                    "HaveVinyl": false,
                    "Artist": "Arctic Monkeys",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
                        "md": "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163"
                    },
                    "id": "78bpIziExqiI9qztvNFlQu",
                    "DateListened": "1/13/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu",
                    "ReleaseDate": "09/09/2013"
                },
                {
                    "Title": "An Evening with Silk Sonic",
                    "HaveVinyl": false,
                    "Artist": "Silk Sonic",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851fcf75ead8a32ac0020d2ce86",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273fcf75ead8a32ac0020d2ce86",
                        "md": "https://i.scdn.co/image/ab67616d00001e02fcf75ead8a32ac0020d2ce86"
                    },
                    "id": "1YgekJJTEueWDaMr7BYqPk",
                    "DateListened": "1/20/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 10,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/1YgekJJTEueWDaMr7BYqPk",
                    "ReleaseDate": "11/11/2021"
                },
                {
                    "Title": "Blackstar",
                    "HaveVinyl": false,
                    "Artist": "David Bowie",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048514ff4ced89fcfe48079c11b37",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2734ff4ced89fcfe48079c11b37",
                        "md": "https://i.scdn.co/image/ab67616d00001e024ff4ced89fcfe48079c11b37"
                    },
                    "id": "2w1YJXWMIco6EBf0CovvVN",
                    "DateListened": "1/20/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 7,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/2w1YJXWMIco6EBf0CovvVN",
                    "ReleaseDate": "01/08/2016"
                },
                {
                    "Title": "Blonde",
                    "HaveVinyl": false,
                    "Artist": "Frank Ocean",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
                        "md": "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526"
                    },
                    "id": "3mH6qwIy9crq0I9YQbOuDf",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 17,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
                    "ReleaseDate": "08/20/2016"
                },
                {
                    "Title": "Bobby Tarantino II",
                    "HaveVinyl": false,
                    "Artist": "Logic",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851e19b1b51cdd35051e17cf6dc",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273e19b1b51cdd35051e17cf6dc",
                        "md": "https://i.scdn.co/image/ab67616d00001e02e19b1b51cdd35051e17cf6dc"
                    },
                    "id": "4F87p1aiFwHeU4uu65MaPV",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/4F87p1aiFwHeU4uu65MaPV",
                    "ReleaseDate": "03/09/2018"
                },
                {
                    "Title": "Born to Die",
                    "HaveVinyl": false,
                    "Artist": "Lana Del Rey",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851cb76604d9c5963544cf5be64",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64",
                        "md": "https://i.scdn.co/image/ab67616d00001e02cb76604d9c5963544cf5be64"
                    },
                    "id": "5PW8nAtvf2HV8RYZFd4IrX",
                    "DateListened": "1/19/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 23,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/5PW8nAtvf2HV8RYZFd4IrX",
                    "ReleaseDate": "11/12/2012"
                },
                {
                    "Title": "Channel Orange",
                    "HaveVinyl": false,
                    "Artist": "Frank Ocean",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048517aede4855f6d0d738012e2e5",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
                        "md": "https://i.scdn.co/image/ab67616d00001e027aede4855f6d0d738012e2e5"
                    },
                    "id": "392p3shh2jkxUxY2VHvlH8",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 17,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
                    "ReleaseDate": "07/10/2012"
                },
                {
                    "Title": "Circles",
                    "HaveVinyl": false,
                    "Artist": "Mac Miller",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485126b7dd89810cc1a40ada642c",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c",
                        "md": "https://i.scdn.co/image/ab67616d00001e0226b7dd89810cc1a40ada642c"
                    },
                    "id": "5sY6UIQ32GqwMLAfSNEaXb",
                    "DateListened": "1/24/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/5sY6UIQ32GqwMLAfSNEaXb",
                    "ReleaseDate": "01/17/2020"
                },
                {
                    "Title": "Damn.",
                    "HaveVinyl": true,
                    "Artist": "Kendrick Lamar",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
                        "md": "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699"
                    },
                    "id": "4eLPsYPBmXABThSJ821sqY",
                    "DateListened": "1/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 14,
                    "Rating": 7,
                    "ReleaseDate": "04/14/2017",
                    "SpotifyURI": "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY"
                },
                {
                    "Title": "Daytona",
                    "HaveVinyl": false,
                    "Artist": "Pusha T",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851263555eebbe2b375593aa31e",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273263555eebbe2b375593aa31e",
                        "md": "https://i.scdn.co/image/ab67616d00001e02263555eebbe2b375593aa31e"
                    },
                    "id": "07bIdDDe3I3hhWpxU6tuBp",
                    "DateListened": "1/30/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 7,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/07bIdDDe3I3hhWpxU6tuBp",
                    "ReleaseDate": "05/25/2018"
                },
                {
                    "Title": "Diamonds",
                    "HaveVinyl": false,
                    "Artist": "Elton John",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851904e306cf32fa5dc93dd927a",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273904e306cf32fa5dc93dd927a",
                        "md": "https://i.scdn.co/image/ab67616d00001e02904e306cf32fa5dc93dd927a"
                    },
                    "id": "45F4Pmp3EJi3T6qYonm4Ml",
                    "DateListened": "2/1/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 54,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/45F4Pmp3EJi3T6qYonm4Ml",
                    "ReleaseDate": "11/10/2017"
                },
                {
                    "Title": "Don't Smile at Me",
                    "HaveVinyl": false,
                    "Artist": "Billie Eilish",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851a9f6c04ba168640b48aa5795",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795",
                        "md": "https://i.scdn.co/image/ab67616d00001e02a9f6c04ba168640b48aa5795"
                    },
                    "id": "7fRrTyKvE4Skh93v97gtcU",
                    "DateListened": "2/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 9,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/7fRrTyKvE4Skh93v97gtcU",
                    "ReleaseDate": "12/22/2017"
                },
                {
                    "Title": "Dreamland",
                    "HaveVinyl": false,
                    "Artist": "Glass Animals",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851712701c5e263efc8726b1464",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
                        "md": "https://i.scdn.co/image/ab67616d00001e02712701c5e263efc8726b1464"
                    },
                    "id": "5bfpRtBW7RNRdsm3tRyl3R",
                    "DateListened": "1/26/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/5bfpRtBW7RNRdsm3tRyl3R",
                    "ReleaseDate": "08/07/2020"
                },
                {
                    "Title": "Echoes of Silence ",
                    "HaveVinyl": false,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485136fb79728dbb379579cef97e",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27336fb79728dbb379579cef97e",
                        "md": "https://i.scdn.co/image/ab67616d00001e0236fb79728dbb379579cef97e"
                    },
                    "id": "04hy4jb1GDD00otiwzsFUB",
                    "DateListened": "1/19/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 9,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/04hy4jb1GDD00otiwzsFUB",
                    "ReleaseDate": "12/21/2011"
                },
                {
                    "Title": "Evermore",
                    "HaveVinyl": false,
                    "Artist": "Taylor Swift",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485133b8541201f1ef38941024be",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27333b8541201f1ef38941024be",
                        "md": "https://i.scdn.co/image/ab67616d00001e0233b8541201f1ef38941024be"
                    },
                    "id": "2Xoteh7uEpea4TohMxjtaq",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 15,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/2Xoteh7uEpea4TohMxjtaq",
                    "ReleaseDate": "12/11/2020"
                },
                {
                    "Title": "Folklore",
                    "HaveVinyl": false,
                    "Artist": "Taylor Swift",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485195f754318336a07e85ec59bc",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc",
                        "md": "https://i.scdn.co/image/ab67616d00001e0295f754318336a07e85ec59bc"
                    },
                    "id": "2fenSS68JI1h4Fo296JfGr",
                    "DateListened": "1/23/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr",
                    "ReleaseDate": "07/24/2020"
                },
                {
                    "Title": "For Emma, Forever Ago",
                    "HaveVinyl": false,
                    "Artist": "Bon Iver",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851bf7c317a63c4f128b8823406",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273bf7c317a63c4f128b8823406",
                        "md": "https://i.scdn.co/image/ab67616d00001e02bf7c317a63c4f128b8823406"
                    },
                    "id": "7EJ0OT5ZqybXxcYRa6mccM",
                    "DateListened": "1/19/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 9,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/7EJ0OT5ZqybXxcYRa6mccM",
                    "ReleaseDate": "02/19/2008"
                },
                {
                    "Title": "Gloria",
                    "HaveVinyl": false,
                    "Artist": "Sam Smith",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851fc3ff54493fcc890bcaa036c",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273fc3ff54493fcc890bcaa036c",
                        "md": "https://i.scdn.co/image/ab67616d00001e02fc3ff54493fcc890bcaa036c"
                    },
                    "id": "3Uq1jNGnD412ZvCb6j2DKV",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/3Uq1jNGnD412ZvCb6j2DKV",
                    "ReleaseDate": "01/27/2023"
                },
                {
                    "Title": "HOLY FVCK",
                    "HaveVinyl": false,
                    "Artist": "Demi Lovato",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048514fa2524ad6e11753b93766ed",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2734fa2524ad6e11753b93766ed",
                        "md": "https://i.scdn.co/image/ab67616d00001e024fa2524ad6e11753b93766ed"
                    },
                    "id": "2QX21ryT6SIcft6N3PkfeR",
                    "DateListened": "1/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/2QX21ryT6SIcft6N3PkfeR",
                    "ReleaseDate": "08/19/2022"
                },
                {
                    "Title": "Hot Fuss",
                    "HaveVinyl": false,
                    "Artist": "The Killers",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851ccdddd46119a4ff53eaf1f5d",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273ccdddd46119a4ff53eaf1f5d",
                        "md": "https://i.scdn.co/image/ab67616d00001e02ccdddd46119a4ff53eaf1f5d"
                    },
                    "id": "4piJq7R3gjUOxnYs6lDCTg",
                    "DateListened": "2/13/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/4piJq7R3gjUOxnYs6lDCTg",
                    "ReleaseDate": "2004"
                },
                {
                    "Title": "House of Balloons",
                    "HaveVinyl": true,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851274b406a7e18acebcf743079",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273274b406a7e18acebcf743079",
                        "md": "https://i.scdn.co/image/ab67616d00001e02274b406a7e18acebcf743079"
                    },
                    "id": "7zCODUHkfuRxsUjtuzNqbd",
                    "DateListened": "1/17/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 9,
                    "Rating": 10,
                    "ReleaseDate": "03/21/2011",
                    "SpotifyURI": "https://open.spotify.com/album/7zCODUHkfuRxsUjtuzNqbd"
                },
                {
                    "Title": "Kid A",
                    "HaveVinyl": false,
                    "Artist": "Radiohead",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048516c7112082b63beefffe40151",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2736c7112082b63beefffe40151",
                        "md": "https://i.scdn.co/image/ab67616d00001e026c7112082b63beefffe40151"
                    },
                    "id": "6GjwtEZcfenmOf6l18N7T7",
                    "DateListened": "3/1/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 11,
                    "Rating": 10,
                    "SpotifyURI": "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7",
                    "ReleaseDate": "10/02/2000"
                },
                {
                    "Title": "Kiss Land",
                    "HaveVinyl": false,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048510cc6c8a864d2d16a2bc507d4",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2730cc6c8a864d2d16a2bc507d4",
                        "md": "https://i.scdn.co/image/ab67616d00001e020cc6c8a864d2d16a2bc507d4"
                    },
                    "id": "2FgMWuwMeTgJArP2RF3upF",
                    "DateListened": "1/20/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 10,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/2FgMWuwMeTgJArP2RF3upF",
                    "ReleaseDate": "01/01/2013"
                },
                {
                    "Title": "Lemonade",
                    "HaveVinyl": false,
                    "Artist": "Beyonce",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485189992f4d7d4ab94937bf9e23",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23",
                        "md": "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"
                    },
                    "id": "7dK54iZuOxXFarGhXwEXfF",
                    "DateListened": "1/19/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/7dK54iZuOxXFarGhXwEXfF",
                    "ReleaseDate": "04/23/2016"
                },
                {
                    "Title": "Lust for Life",
                    "HaveVinyl": false,
                    "Artist": "Lana Del Rey",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485195e2fd1accb339fa14878190",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27395e2fd1accb339fa14878190",
                        "md": "https://i.scdn.co/image/ab67616d00001e0295e2fd1accb339fa14878190"
                    },
                    "id": "7xYiTrbTL57QO0bb4hXIKo",
                    "DateListened": "2/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 4,
                    "SpotifyURI": "https://open.spotify.com/album/7xYiTrbTL57QO0bb4hXIKo",
                    "ReleaseDate": "07/21/2017"
                },
                {
                    "Title": "MTV Unplugged",
                    "HaveVinyl": false,
                    "Artist": "Bleachers",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851f7cdb9faff39270bee1a1fc3",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273f7cdb9faff39270bee1a1fc3",
                        "md": "https://i.scdn.co/image/ab67616d00001e02f7cdb9faff39270bee1a1fc3"
                    },
                    "id": "5hxH5SSwxf6oObJB1KzS7J",
                    "DateListened": "1/14/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 11,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/5hxH5SSwxf6oObJB1KzS7J",
                    "ReleaseDate": "11/10/2017"
                },
                {
                    "Title": "Melodrama",
                    "HaveVinyl": false,
                    "Artist": "Lorde",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851f8553e18a11209d4becd0336",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336",
                        "md": "https://i.scdn.co/image/ab67616d00001e02f8553e18a11209d4becd0336"
                    },
                    "id": "2B87zXm9bOWvAJdkJBTpzF",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 11,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF",
                    "ReleaseDate": "06/16/2017"
                },
                {
                    "Title": "Midnights",
                    "HaveVinyl": false,
                    "Artist": "Taylor Swift",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851bb54dde68cd23e2a268ae0f5",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
                        "md": "https://i.scdn.co/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5"
                    },
                    "id": "151w1FgRZfnKZA9FEcg9Z3",
                    "DateListened": "1/9/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3",
                    "ReleaseDate": "10/21/2022"
                },
                {
                    "Title": "Mt Joy",
                    "HaveVinyl": false,
                    "Artist": "Mt Joy",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485119ed71aa39d8e1d791aa9af6",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27319ed71aa39d8e1d791aa9af6",
                        "md": "https://i.scdn.co/image/ab67616d00001e0219ed71aa39d8e1d791aa9af6"
                    },
                    "id": "5h9FO7QRZMcrcnSYvihQ01",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/5h9FO7QRZMcrcnSYvihQ01",
                    "ReleaseDate": "03/02/2018"
                },
                {
                    "Title": "My Beautiful Dark Twisted Fantasy",
                    "HaveVinyl": false,
                    "Artist": "Kanye West",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851d9194aa18fa4c9362b47464f",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
                        "md": "https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f"
                    },
                    "id": "20r762YmB5HeofjMCiPMLv",
                    "DateListened": "1/23/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 10,
                    "SpotifyURI": "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv",
                    "ReleaseDate": "11/22/2010"
                },
                {
                    "Title": "My Dear Melancholy",
                    "HaveVinyl": false,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048511f6a2a40bb692936879db730",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730",
                        "md": "https://i.scdn.co/image/ab67616d00001e021f6a2a40bb692936879db730"
                    },
                    "id": "4qZBW3f2Q8y0k1A84d4iAO",
                    "DateListened": "1/30/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 7,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/4qZBW3f2Q8y0k1A84d4iAO",
                    "ReleaseDate": "03/30/2018"
                },
                {
                    "Title": "Nevermind",
                    "HaveVinyl": false,
                    "Artist": "Nirvana",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851e175a19e530c898d167d39bf",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
                        "md": "https://i.scdn.co/image/ab67616d00001e02e175a19e530c898d167d39bf"
                    },
                    "id": "2guirTSEqLizK7j9i1MTTZ",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ",
                    "ReleaseDate": "09/26/1991"
                },
                {
                    "Title": "Norman Fucking Rockwell!",
                    "HaveVinyl": false,
                    "Artist": "Lana Del Rey",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851879e9318cb9f4e05ee552ac9",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9",
                        "md": "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9"
                    },
                    "id": "5XpEKORZ4y6OrCZSKsi46A",
                    "DateListened": "1/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 14,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A",
                    "ReleaseDate": "08/30/2019"
                },
                {
                    "Title": "OK Computer",
                    "HaveVinyl": false,
                    "Artist": "Radiohead",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851c8b444df094279e70d0ed856",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
                        "md": "https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856"
                    },
                    "id": "6dVIqQ8qmQ5GBnJ9shOYGE",
                    "DateListened": "03/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE",
                    "ReleaseDate": "05/28/1997"
                },
                {
                    "Title": "Punisher",
                    "HaveVinyl": false,
                    "Artist": "Phoebe Bridgers",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851a91b75c9ef65ed8d760ff600",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273a91b75c9ef65ed8d760ff600",
                        "md": "https://i.scdn.co/image/ab67616d00001e02a91b75c9ef65ed8d760ff600"
                    },
                    "id": "6Pp6qGEywDdofgFC1oFbSH",
                    "DateListened": "2/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 11,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/6Pp6qGEywDdofgFC1oFbSH",
                    "ReleaseDate": "06/18/2020"
                },
                {
                    "Title": "Purpose",
                    "HaveVinyl": false,
                    "Artist": "Justin Bieber",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851f46b9d202509a8f7384b90de",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
                        "md": "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de"
                    },
                    "id": "6Fr2rQkZ383FcMqFyT7yPr",
                    "DateListened": "3/7/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 19,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/6Fr2rQkZ383FcMqFyT7yPr",
                    "ReleaseDate": "11/13/2015"
                },
                {
                    "Title": "Rage Against the Machine",
                    "HaveVinyl": true,
                    "Artist": "Rage Against the Machine",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048517676c7bf4e667590e496c2a3",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2737676c7bf4e667590e496c2a3",
                        "md": "https://i.scdn.co/image/ab67616d00001e027676c7bf4e667590e496c2a3"
                    },
                    "id": "4Io5vWtmV1rFj4yirKb4y4",
                    "DateListened": "3/7/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 25,
                    "Rating": 10,
                    "ReleaseDate": "1992",
                    "SpotifyURI": "https://open.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4"
                },
                {
                    "Title": "Red (Taylor's Version)",
                    "HaveVinyl": false,
                    "Artist": "Taylor Swift",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851318443aab3531a0558e79a4d",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d",
                        "md": "https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d"
                    },
                    "id": "6kZ42qRrzov54LcAk4onW9",
                    "DateListened": "2/7/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 30,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9",
                    "ReleaseDate": "11/12/2021"
                },
                {
                    "Title": "Riot",
                    "HaveVinyl": false,
                    "Artist": "Paramore",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851bee754528c08d5ff6799a1eb",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273bee754528c08d5ff6799a1eb",
                        "md": "https://i.scdn.co/image/ab67616d00001e02bee754528c08d5ff6799a1eb"
                    },
                    "id": "71rziY9eLo1tA2dBMxrwhc",
                    "DateListened": "2/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/71rziY9eLo1tA2dBMxrwhc",
                    "ReleaseDate": "06/11/2007"
                },
                {
                    "Title": "Rodeo",
                    "HaveVinyl": false,
                    "Artist": "Travis Scott",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048517433176f037e0ba14190c34f",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2737433176f037e0ba14190c34f",
                        "md": "https://i.scdn.co/image/ab67616d00001e027433176f037e0ba14190c34f"
                    },
                    "id": "4PWBTB6NYSKQwfo79I3prg",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg",
                    "ReleaseDate": "09/04/2015"
                },
                {
                    "Title": "SOS",
                    "HaveVinyl": false,
                    "Artist": "SZA",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485170dbc9f47669d120ad874ec1",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",
                        "md": "https://i.scdn.co/image/ab67616d00001e0270dbc9f47669d120ad874ec1"
                    },
                    "id": "07w0rG5TETcyihsEIZR3qG",
                    "DateListened": "1/8/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 23,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG",
                    "ReleaseDate": "12/09/2022"
                },
                {
                    "Title": "Sam's Town",
                    "HaveVinyl": false,
                    "Artist": "The Killers",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048514f87f14089217e3f70a5f39e",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2734f87f14089217e3f70a5f39e",
                        "md": "https://i.scdn.co/image/ab67616d00001e024f87f14089217e3f70a5f39e"
                    },
                    "id": "4o3RJndRhHxkieQzQGhmbw",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/4o3RJndRhHxkieQzQGhmbw",
                    "ReleaseDate": "09/27/2006"
                },
                {
                    "Title": "Section.80",
                    "HaveVinyl": false,
                    "Artist": "Kendrick Lamar",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851eddb2639b74ac6c202032ebe",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273eddb2639b74ac6c202032ebe",
                        "md": "https://i.scdn.co/image/ab67616d00001e02eddb2639b74ac6c202032ebe"
                    },
                    "id": "1bkN9nIkkCnXeG4yitVS1J",
                    "DateListened": "1/30/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 15,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/1bkN9nIkkCnXeG4yitVS1J",
                    "ReleaseDate": "07/02/2011"
                },
                {
                    "Title": "Shoot for the Stars, Aim for the Moon",
                    "HaveVinyl": false,
                    "Artist": "Pop Smoke",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485177ada0863603903f57b34369",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27377ada0863603903f57b34369",
                        "md": "https://i.scdn.co/image/ab67616d00001e0277ada0863603903f57b34369"
                    },
                    "id": "7e7t0MCrNDcJZsPwUKjmOc",
                    "DateListened": "2/10/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 19,
                    "Rating": 5,
                    "SpotifyURI": "https://open.spotify.com/album/7e7t0MCrNDcJZsPwUKjmOc",
                    "ReleaseDate": "07/03/2020"
                },
                {
                    "Title": "Solar Power",
                    "HaveVinyl": false,
                    "Artist": "Lorde",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485136615a0a60523dd62135ab3a",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27336615a0a60523dd62135ab3a",
                        "md": "https://i.scdn.co/image/ab67616d00001e0236615a0a60523dd62135ab3a"
                    },
                    "id": "4SBl4zvNIL4H137YRf2P0J",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/4SBl4zvNIL4H137YRf2P0J",
                    "ReleaseDate": "08/20/2021"
                },
                {
                    "Title": "Starboy",
                    "HaveVinyl": false,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048514718e2b124f79258be7bc452",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
                        "md": "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
                    },
                    "id": "2ODvWsOgouMbaA5xf0RkJe",
                    "DateListened": "2/12/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 18,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe",
                    "ReleaseDate": "11/25/2016"
                },
                {
                    "Title": "Thank U, Next",
                    "HaveVinyl": false,
                    "Artist": "Ariana Grande",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485156ac7b86e090f307e218e9c8",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8",
                        "md": "https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8"
                    },
                    "id": "2fYhqwDWXjbpjaIJPEfKFw",
                    "DateListened": "1/30/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 12,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw",
                    "ReleaseDate": "02/08/2019"
                },
                {
                    "Title": "The Forever Story",
                    "HaveVinyl": false,
                    "Artist": "JID",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851cae6e44dcc84e2035c3ad092",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273cae6e44dcc84e2035c3ad092",
                        "md": "https://i.scdn.co/image/ab67616d00001e02cae6e44dcc84e2035c3ad092"
                    },
                    "id": "4rJDCELWL0fjdmN9Gn4f4g",
                    "DateListened": "2/11/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/4rJDCELWL0fjdmN9Gn4f4g",
                    "ReleaseDate": "10/31/2022"
                },
                {
                    "Title": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars ",
                    "HaveVinyl": false,
                    "Artist": "David Bowie",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851c41f4e1133b0e6c5fcf58680",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273c41f4e1133b0e6c5fcf58680",
                        "md": "https://i.scdn.co/image/ab67616d00001e02c41f4e1133b0e6c5fcf58680"
                    },
                    "id": "48D1hRORqJq52qsnUYZX56",
                    "DateListened": "1/15/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 11,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56",
                    "ReleaseDate": "06/06/1972"
                },
                {
                    "Title": "This is why",
                    "HaveVinyl": false,
                    "Artist": "Paramore",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851de1518c8beec71d61acc25fa",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273de1518c8beec71d61acc25fa",
                        "md": "https://i.scdn.co/image/ab67616d00001e02de1518c8beec71d61acc25fa"
                    },
                    "id": "6tG8sCK4htJOLjlWwb7gZB",
                    "DateListened": "2/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 10,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/6tG8sCK4htJOLjlWwb7gZB",
                    "ReleaseDate": "02/10/2023"
                },
                {
                    "Title": "Thursday ",
                    "HaveVinyl": false,
                    "Artist": "The Weeknd",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851e01c2631218e2de27765b7d5",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273e01c2631218e2de27765b7d5",
                        "md": "https://i.scdn.co/image/ab67616d00001e02e01c2631218e2de27765b7d5"
                    },
                    "id": "6F87lH0I09qlrzvCCKc7lz",
                    "DateListened": "1/19/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 9,
                    "Rating": 8,
                    "SpotifyURI": "https://open.spotify.com/album/6F87lH0I09qlrzvCCKc7lz",
                    "ReleaseDate": "08/18/2011"
                },
                {
                    "Title": "To Pimp a Butterfly ",
                    "HaveVinyl": false,
                    "Artist": "Kendrick Lamar",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851cdb645498cd3d8a2db4d05e1",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
                        "md": "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1"
                    },
                    "id": "7ycBtnsMtyVbbwTfJwRjSP",
                    "DateListened": "1/1/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 16,
                    "Rating": 9,
                    "SpotifyURI": "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP",
                    "ReleaseDate": "03/16/2015"
                },
                {
                    "Title": "Ultraviolence",
                    "HaveVinyl": false,
                    "Artist": "Lana Del Rey",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048511624590458126fc8b8c64c2f",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f",
                        "md": "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
                    },
                    "id": "1ORxRsK3MrSLvh7VQTF01F",
                    "DateListened": "2/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 14,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/1ORxRsK3MrSLvh7VQTF01F",
                    "ReleaseDate": "01/01/2014"
                },
                {
                    "Title": "Under Pressure ",
                    "HaveVinyl": false,
                    "Artist": "Logic",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851a4c35326f6fe6676c10e31ac",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273a4c35326f6fe6676c10e31ac",
                        "md": "https://i.scdn.co/image/ab67616d00001e02a4c35326f6fe6676c10e31ac"
                    },
                    "id": "1Mk7Lei0Ra3hawezqmad5V",
                    "DateListened": "1/18/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 15,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/1Mk7Lei0Ra3hawezqmad5V",
                    "ReleaseDate": "10/21/2014"
                },
                {
                    "Title": "Unplugged",
                    "HaveVinyl": false,
                    "Artist": "Third Eye Blind",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851fa8ed8012dda5158ebe68c2d",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273fa8ed8012dda5158ebe68c2d",
                        "md": "https://i.scdn.co/image/ab67616d00001e02fa8ed8012dda5158ebe68c2d"
                    },
                    "id": "3Jbsi9elXeqjlHPsjAMQvz",
                    "DateListened": "1/23/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 13,
                    "Rating": 6,
                    "SpotifyURI": "https://open.spotify.com/album/3Jbsi9elXeqjlHPsjAMQvz",
                    "ReleaseDate": "06/24/2022"
                },
                {
                    "Title": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
                    "HaveVinyl": false,
                    "Artist": "Billie Eilish",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d0000485150a3147b4edd7701a876c6ce",
                        "lg": "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
                        "md": "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce"
                    },
                    "id": "0S0KGZnfBGSIssfF54WSJh",
                    "DateListened": "1/27/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 14,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh",
                    "ReleaseDate": "03/29/2019"
                },
                {
                    "Title": "good kid, m.A.A.d city",
                    "HaveVinyl": true,
                    "Artist": "Kendrick Lamar",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d00004851d58e537cea05c2156792c53d",
                        "lg": "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d",
                        "md": "https://i.scdn.co/image/ab67616d00001e02d58e537cea05c2156792c53d"
                    },
                    "id": "3DGQ1iZ9XKUQxAUWjfC34w",
                    "DateListened": "1/20/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 17,
                    "Rating": 10,
                    "ReleaseDate": "2012",
                    "SpotifyURI": "https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w"
                },
                {
                    "Title": "untitled unmastered.",
                    "HaveVinyl": false,
                    "Artist": "Kendrick Lamar",
                    "Images": {
                        "sm": "https://i.scdn.co/image/ab67616d000048518c697f553a46006a5d8886b2",
                        "lg": "https://i.scdn.co/image/ab67616d0000b2738c697f553a46006a5d8886b2",
                        "md": "https://i.scdn.co/image/ab67616d00001e028c697f553a46006a5d8886b2"
                    },
                    "id": "0kL3TYRsSXnu0iJvFO3rud",
                    "DateListened": "1/7/2023",
                    "Type": "ALBUM",
                    "NumberOfTracks": 8,
                    "Rating": 7,
                    "SpotifyURI": "https://open.spotify.com/album/0kL3TYRsSXnu0iJvFO3rud",
                    "ReleaseDate": "03/04/2016"
                }
            ]
        };
    }
    //                    

    render() {
        return (
            <div className="app">
                <Row xs={1} md={3} className="card-grid">
                    {this.state.albums.map(album => (
                        <Col className="card-container">
                            <AlbumCard album={album} />
                        </Col>)
                    )}
                </Row>
            </div>)
    }
}

export default App;
