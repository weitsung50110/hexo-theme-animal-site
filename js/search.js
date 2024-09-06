document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // 設置 search.json 文件的路徑
  const searchDataUrl = '/search.json';

  fetch(searchDataUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('網絡錯誤，無法加載 search.json');
      }
      return response.json();
    })
    .then(data => {
      const posts = data.posts || []; // 確保有 posts 屬性

      function performSearch(query) {
        searchResults.innerHTML = ''; // 清空之前的搜尋結果

        const results = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        if (results.length === 0) {
          searchResults.innerHTML = '<p>沒有找到匹配的文章。</p>';
        } else {
          results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
            searchResults.appendChild(resultElement);
          });
        }
      }

      document.getElementById('search-button').addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
          performSearch(query);
        }
      });

      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          document.getElementById('search-button').click();
        }
      });
    })
    .catch(error => console.error('搜尋資料載入錯誤:', error));
});