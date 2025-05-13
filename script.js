document.getElementById("draw").addEventListener("click", function () {
  const fortunes = ["大吉", "中吉", "吉", "メガ吉", "ギガ吉"];
  const result = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("result").textContent = `✨ ${result} ✨`;
});
