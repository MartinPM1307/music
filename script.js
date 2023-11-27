// Truy cập vào các thành phần
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const playlist = [   
    { title: "No Love No Life - HIEUTHUHAI", artist: "HIEUTHUHAI", mp3: "Musics/No Love No Life.mp3", image: "picture/No Love No Life.jpg" },
    { title: "Không thể say - HIEUTHUHAI", artist: "HIEUTHUHAI", mp3: "Musics/Không thể say.mp3", image: "picture/Không thể say.jpg" },
    { title: "Giờ thì ai cười - HIEUTHUHAI", artist: "HIEUTHUHAI", mp3: "Musics/Giờ thì ai cười.mp3", image: "picture/Giờ thì ai cười.jpg" },
    { title: "Không phải gu - HIEUTHUHAI", artist: "HIEUTHUHAI", mp3: "Musics/Không phải gu.mp3", image: "picture/Không phải gu.jpg" },
    { title: "Bo xì bo - Hoàng Thùy Linh", artist: "Hoàng Thùy Linh", mp3: "Musics/Bo xì bo.mp3", image: "picture/Bo xì bo.jpg" },
    { title: "Kẻ cắp gặp bà già - Hoàng Thùy Linh", artist: "Hoàng Thùy Linh", mp3: "Musics/Kẻ cắp gặp bà già.mp3", image: "picture/Kẻ cắp gặp bà già.jpg" },
    { title: "Deepsea - Binz", artist: "Binz", mp3: "Musics/Deepsea.mp3", image: "picture/Deepsea.jpg" },
    { title: "Thu cạn - Trúc Nhân", artist: "Trúc Nhân", mp3: "Musics/Thu cạn.mp3", image: "picture/Thu cạn.jpg" },
    // { title: "Anh chưa thương em đến vậy đâu - Myra Trần", artist: "Myra Trần", mp3: "Musics/Anh chưa thương em đến vậy đâu.mp3", image: "picture/Anh chưa thương em đến vậy đâu.jpg" },
    { title: "Rồi em sẽ gặp 1 chàng chai khác - Hippo", artist: "Hippo", mp3: "Musics/Rồi em sẽ gặp 1 chàng chai khác.mp3", image: "picture/Rồi em sẽ gặp 1 chàng chai khác.jpg" },
    { title: "Anh là ngoại lệ của em - Ly Ly", artist: "Ly Ly", mp3: "Musics/Anh là ngoại lệ của em.mp3", image: "picture/Anh là ngoại lệ của em.jpg" },
    { title: "Thichthich - Ly Ly", artist: "Ly Ly", mp3: "Musics/Thichthich.mp3", image: "picture/Thichthich.jpg" },
    { title: "Chạm khẽ tim anh 1 chút thôi - Noo Phước Thịnh", artist: "Noo Phước Thịnh", mp3: "Musics/Chạm khẽ tim anh 1 chút thôi.mp3", image: "picture/Chạm khẽ tim anh 1 chút thôi.jpg" },
    { title: "Cơn mưa băng giá - Noo Phước Thịnh", artist: "Noo Phước Thịnh", mp3: "Musics/Cơn mưa băng giá.mp3", image: "picture/Cơn mưa băng giá.jpg" },
    { title: "Thương em là điều anh không thể ngờ - Noo Phước Thịnh", artist: "Noo Phước Thịnh", mp3: "Musics/Thương em là điều anh không thể ngờ.mp3", image: "picture/Thương em là điều anh không thể ngờ.jpg" },
    { title: "Enjoy cái moment này - Tez", artist: "Tez", mp3: "Musics/Enjoy cái moment này.mp3", image: "picture/Enjoy cái moment này.jpg" },
    { title: "Khi cơn mưa dần phai - Tez", artist: "Tez", mp3: "Musics/Khi cơn mưa dần phai.mp3", image: "picture/Khi cơn mưa dần phai.jpg" },
    { title: "Yêu như trẻ con - Bray", artist: "Bray", mp3: "Musics/Yêu như trẻ con.mp3", image: "picture/Yêu như trẻ con.jpg" },
    { title: "Ngày đầu tiên - Đức Phúc", artist: "Đức Phúc", mp3: "Musics/Ngày đầu tiên.mp3", image: "picture/Ngày đầu tiên.jpg" },
    { title: "Ngày mai người ta lấy chồng - Voi bản đôn", artist: "Voi bản đôn", mp3: "Musics/Ngày mai người ta lấy chồng.mp3", image: "picture/Ngày mai người ta lấy chồng.jpg" },
    { title: "Rời bỏ - Voi bản đôn", artist: "Voi bản đôn", mp3: "Musics/Rời bỏ.mp3", image: "picture/Rời bỏ.jpg" },
    { title: "Natural - Imgagin Dragon", artist: "Imgagin Dragon", mp3: "Musics/Natural.mp3", image: "picture/Natural.jpg" },
    { title: "Believer - Imgagin Dragon", artist: "Imgagin Dragon", mp3: "Musics/Believer.mp3", image: "picture/Believer.jpg" },
    { title: "Someone you loved - Conor Maynard", artist: "Conor Maynard", mp3: "Musics/Someone you loved.mp3", image: "picture/Someone you loved.jpg" },
    { title: "Waitting for love - Avicii", artist: "Avicii", mp3: "Musics/Waitting for love.mp3", image: "picture/Waitting for love.jpg" },
    { title: "GODS - New Jean", artist: "New Jean", mp3: "Musics/GODS.mp3", image: "picture/GODS.jpg" },
    { title: "What make you beautiful - One Direction", artist: "One Direction", mp3: "Musics/What make you beautiful.mp3", image: "picture/What make you beautiful.jpg" },
    { title: "Treat you better - Shawn Mendes", artist: "Shawn Mendes", mp3: "Musics/Treat you better.mp3", image: "picture/Treat you better.jpg" },
    { title: "Señorita - Camila Cabello & Shawn Mendes", artist: "Camila Cabello & Shawn Mendes", mp3: "Musics/Señorita.mp3", image: "picture/Señorita.jpg" },
    { title: "There's nothing holding me back - Shawn Mendes", artist: "Shawn Mendes", mp3: "Musics/There's nothing holding me back.mp3", image: "picture/There's nothing holding me back.jpg" },
  ];
  // hàm khi click vào danh sách phát
document.getElementById("playlist-button").addEventListener("click", () => {
    const playlistElement = document.getElementById("song-list");
    playlistElement.classList.toggle("show");
});

// hàm đóng danh sách phát
function closePlaylist() {
    const playlistElement = document.getElementById("song-list");
    playlistElement.classList.remove("show");
}
  // hàm updatePlaylist
function updatePlaylist() {
    const playlistElement = document.getElementById("song-list");
    playlistElement.innerHTML = "";

    playlist.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${song.title}`;
        listItem.addEventListener("click", () => {
            currentSong = index;
            loadSong(playlist[currentSong]);
            playSong();
            closePlaylist(); // Đóng danh sách phát sau khi chọn
        });

        playlistElement.appendChild(listItem);
    });
}


let currentSong = 0;

function loadSong(song) {
    title.innerText = song.title;
    audio.src = song.mp3;
    cover.src = song.image;
}


function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

function nextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    loadSong(playlist[currentSong]);
    playSong();
    updatePlaylist();
}

function prevSong() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentSong]);
    playSong();
    updatePlaylist();
}


function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}


// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Lắng nghe sự kiện
playBtn.addEventListener("click", () => {
    // Kiểm tra xem musicContainer có chứa class "play" hay không?
    const isPlaying = musicContainer.classList.contains("play");

    // Nếu có thì thực hiện pause
    // Nếu không thì thực hiện play
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Lắng nghe sự kiện khi next và prev bài hát
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// // Lắng nghe sự kiện khi kết thúc bài hát
// audio.addEventListener("ended", nextSong);
audio.addEventListener("ended", () => {
    // Đưa trạng thái về trạng thái không phát để người dùng có thể nhấn "Next" để chuyển bài
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    nextSong();
});
