const OutputLists = document.querySelector("#OutputLists");

const Songs = [
    {
        songName: "SLAVE",
        artistName: "Nissy",
        imgPass: "SLAVE.jpg",
    },
    {
        songName: "DoDo",
        artistName: "Nissy",
        imgPass: "DoDo.jpg",
    },
    {
        songName: "Trippin",
        artistName: "Nissy",
        imgPass: "Trippin.jpg",
    },
    {
        songName: "NA",
        artistName: "Nissy",
        imgPass: "NA.jpg",
    },
    {
        songName: "SayYes",
        artistName: "Nissy",
        imgPass: "SayYes.jpg",
    },
    {
        songName: "Affinity",
        artistName: "Nissy",
        imgPass: "Affinity.jpg",
    },
    {
        songName: "Stormy",
        artistName: "Nissy feat.SKY-HI",
        imgPass: "Stormy.jpg",
    },
    {
        songName: "どうしようか?",
        artistName: "Nissy",
        imgPass: "dousiyouka.jpg",
    },
];

// 参考用, 自由に使ってください
// 不要な場合削除していただいて構いません。
// OutputLists.innerHTML = `
//     <li>
//         <picture>
//             <img src="img/no_img.png" alt="" />
//         </picture>
//         <div class="name_wrap">
//             <h2>SongName</h2>
//             <p>Artist</p>
//         </div>
//     </li >
// `;

// ここから下は自由に編集可
OutputLists.innerHTML =``
Songs.forEach((song)=>{
    console.log(song.songName);
    OutputLists.innerHTML += `
        <li>
            <picture>
                <img src="img/${song.imgPass}" alt="" />
            </picture>
            <div class="name_wrap">
                <h2>${song.SongName}</h2>
                <p>${song.artistName}</p>
            </div>
        </li >
    `
})
