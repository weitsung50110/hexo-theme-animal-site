
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // 確保 path 設置為生成的 search.json 文件的正確路徑
    const searchDataUrl = '/search.json';

    fetch(searchDataUrl)
      .then(response => response.json())
      .then(data => {
        const posts = data.posts; // 根據你的 search.json 文件結構調整

        function performSearch(query) {
          searchResults.innerHTML = '';
          const results = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
          results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
            searchResults.appendChild(resultElement);
          });
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
