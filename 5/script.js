const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const page = +document.getElementById('page').value;
  const limit = +document.getElementById('limit').value;

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(page >= 1 && page <= 10)) {
    s.textContent = 'Номер страницы вне диапазона от 1 до 10';
    return;
  }
  if (!(limit >= 1 && limit <= 10)) {
    s.textContent = 'Лимит вне диапазона от 1 до 10';
    return;
  }
  if (!(limit >= 1 && limit <= 10 && page >= 1 && page <= 10)) {
    s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    return;
  }
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
    return response.json();
    })
    .then((data) =>{
        let res = document.querySelector('#j-result');
        for (item of data){
            let img = document.createElement('IMG');
            img.setAttribute('src', item.download_url);
            img.setAttribute('alt', item.author);
            img.setAttribute('width', '200');
            res.append(img);
        }
    });

});