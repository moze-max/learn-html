function showPagenew(page) {
    const contentDiv = document.getElementById('contentnew');
    let template;

    switch (page) {
        case 'page3':
            template = document.getElementById('page3-template').content;
            break;
        case 'page4':
            template = document.getElementById('page4-template').content;
            break;
        case 'page5':
            template = document.getElementById('page5-template').content;
            break;
        case 'page6':
            template = document.getElementById('page6-template').content;
            break;
        case 'page7':
            template = document.getElementById('page7-template').content;
            break;
        case 'page8':
            template = document.getElementById('page8-template').content;
            break;
        case 'page9':
            template = document.getElementById('page9-template').content;
            break;
        case 'page10':
            template = document.getElementById('page10-template').content;
            break;
        default:
            template = document.getElementById('page3-template').content;
            return;
    }

    // 清空内容并插入新的模板内容
    contentDiv.innerHTML = '';
    contentDiv.appendChild(template.cloneNode(true));
}

function showPage(pages) {
    const contentDiv = document.getElementById('contentbooking');
    let template;
  
    switch (pages) {
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

document.addEventListener('DOMContentLoaded', function () {
    // showPage('page1');
    showPagenew('page3');
});

showPage('page1');
showPagenew('page3');