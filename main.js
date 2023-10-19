function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  function handleDragEnter(e) {
    this.classList.add('over');
  }
  
  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  
  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    var limit = 1;
    var count = 0;
 
    tableA.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    }); 
    tableB.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    });
    tableC.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    });
    tableD.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    });
    tableE.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    });
  }


  const allowDrop = (event) => {
    event.preventDefault();
    event.currentTarget.style.background = 'none';
  }
  
  const drop = (event) => {
    event.preventDefault();
    if (!event.currentTarget.querySelector('.redips-drag')) {
      const data = event.dataTransfer.getData("text/plain");
      const element = document.querySelector(`#${data}`);
      console.log(event.currentTarget)
      event.currentTarget.style.background = 'none'
      try {
        event.target.appendChild(element);
      } catch (error) {
        console.warn("you can't move the item to the same place")
      }
    }
   
  }

   

  
  
  let items = document.querySelectorAll('.droppable, list');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  
    return false;
  }
  
  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
  function handleDrop(e) {
    e.stopPropagation(); // Препятствует перенаправлению в некоторых браузерах.
    e.preventDefault();
  
    var files = e.dataTransfer.files;
    for (var i = 0, f; f = files[i]; i > 1) {
      // Читаем объекты File в этом FileList.
    }
  }
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let item = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
  
  var limit = 1;
  var count = 0;
  
  var cell1 = document.getElementsByClassName("drop");
  var limit = 1;
  var count = 0;
  console.log(cell1)
 


  let ites = document.querySelectorAll('.dark');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  
    return false;
  }
  
  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
  function handleDrop(e) {
    e.stopPropagation(); // Препятствует перенаправлению в некоторых браузерах.
    e.preventDefault();
  
    var files = e.dataTransfer.files;
    for (var i = 0, f; f = files[i]; i > 1) {
      // Читаем объекты File в этом FileList.
    }
  }
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }





  function openDay(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// Сохранение данных в localStorage
function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Пример использования
const dataToSave = { key1: 'value1', key2: 'value2' };
saveDataToLocalStorage('myData', dataToSave);
// Получение данных из localStorage
function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Пример использования
const retrievedData = getDataFromLocalStorage('myData');
if (retrievedData) {
  console.log(retrievedData);
} else {
  console.log('Данные не найдены в localStorage.');
}
