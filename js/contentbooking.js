function showPage(page) {
    const contentDiv = document.getElementById('contentbooking');
    let template;
  
    switch (page) {
        case 'page1':
            template = document.getElementById("page1-template").content;
            break;
        case 'page2':
            template = document.getElementById("page2-template").content;
            break;
        default:
            template = document.getElementById('page1-template').content;
            return;
    }
  
    // 清空内容并插入新的模板内容
    contentDiv.innerHTML = '';
    contentDiv.appendChild(template.cloneNode(true));
  }
  
  // 默认显示页面1
  showPage('page1');