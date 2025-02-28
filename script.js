document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューの処理
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  
  
  // カレンダーの処理
  const calendar = document.getElementById("calendar");
  const calendarTitle = document.getElementById("calendar-title");
  
  // 日付と記事のIDを対応させる
  const blogPosts = {
    "2025-02-23": "post-2025-02-23",
    "2025-02-03": "post-2025-02-03",
    "2025-02-01": "post-2025-02-01",
    "2025-01-29": "post-2025-01-29",
  };
  
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  
  function generateCalendar(year, month) {
    calendar.innerHTML = "";
    // 年月タイトル
    calendarTitle.textContent = `${year}年${month + 1}月`;
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
  
    // 曜日ヘッダー
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    daysOfWeek.forEach(day => {
      const header = document.createElement("div");
      header.classList.add("calendar-day-header");
      header.textContent = day;
      calendar.appendChild(header);
    });
  
    // 空白セル
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("calendar-day");
      calendar.appendChild(emptyCell);
    }
  
    // 日付セル
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendar-day");
  
      const dayNumber = document.createElement("span");
      dayNumber.textContent = day;
      dayCell.appendChild(dayNumber);
  
      // ブログ投稿日に白丸を付ける
      if (blogPosts[date]) {
        dayCell.classList.add("highlight");
  
        // クリックで該当記事にスクロール
        dayCell.addEventListener("click", function () {
          const targetPost = document.getElementById(blogPosts[date]);
          if (targetPost) {
            targetPost.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
  
      calendar.appendChild(dayCell);
    }
  }
  
  generateCalendar(year, month);
});
