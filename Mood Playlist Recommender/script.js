const playlists = {
  happy: [
    { name: "Happy Hits!", url: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC" },
    { name: "Feel Good Indie Rock", url: "https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL" }
  ],
  sad: [
    { name: "Sad Songs", url: "https://open.spotify.com/playlist/37i9dQZF1DWSqBruwoIXkA" },
    { name: "Alone Again", url: "https://open.spotify.com/playlist/37i9dQZF1DWVV27DiNWxkR" }
  ],
  energetic: [
    { name: "Beast Mode", url: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP" },
    { name: "Workout Twerkout", url: "https://open.spotify.com/playlist/37i9dQZF1DX76t638V6CA8" }
  ],
  focused: [
    { name: "Deep Focus", url: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ" },
    { name: "Instrumental Study", url: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" }
  ],
  chill: [
    { name: "Lo-Fi Chill", url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6" },
    { name: "Chill Vibes", url: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" }
  ]
};

function recommend() {
  const mood = document.getElementById("mood").value;
  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = "";

  if (playlists[mood]) {
    playlists[mood].forEach(playlist => {
      const link = document.createElement("a");
      link.href = playlist.url;
      link.target = "_blank";
      link.innerText = "🎧 " + playlist.name;
      const div = document.createElement("div");
      div.style.marginBottom = "10px";
      div.appendChild(link);
      recommendations.appendChild(div);
    });
  } else {
    recommendations.innerText = "Please select a mood to get playlist recommendations.";
  }
}
