const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
   const limit = +document.getElementById('limit').value;
  
   let s = document.getElementById('j-result');
   s.textContent = '';
   if (value1 >= 1 && value1 <= 10) {
     s.textContent = 'Загружаем фото...';
     return;
    } else {
     s.textContent = 'число вне диапазона от 1 до 10';
     return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://lorem-picsum.netlify.app/v2/list?limit=${value},');

    xhr.onload = function() {
      if (xhr.status != 200) {
         console.log('Статус ответа: ', xhr.status);
        } else {
    
          console.log('Результат: ', JSON.parse(xhr.response));
        }
    }    
});

xhr.onprogress = function(event) {
  console.log(`Загружено ${event.loaded} из ${event.total}`)
};

xhr.onerror = function() {
  console.log('Ошибка! Статус ответа: ', xhr.status);
};

xhr.send();
