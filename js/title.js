// document.addEventListener('DOMContentLoaded', () => {
//     const currentPage = window.location.pathname.split('/').pop();
//     const navLinks = document.querySelectorAll('.header nav a');
//     navLinks.forEach(link => {
//       if (link.href.split('/').pop() === currentPage) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   });

// setTimeout(setNavHighlight, 600); 

document.addEventListener('DOMContentLoaded', () => {
    // 定义一个函数来设置导航链接的高亮
    function setNavHighlight() {
      const currentPage = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.header nav a');
      navLinks.forEach(link => {
        // 比较链接的href属性和当前页面的路径
        if (link.getAttribute('href').split('/').pop() === currentPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    // 调用函数来设置高亮
    setNavHighlight();
  
    // 如果你想要在URL变化时更新高亮（例如使用pushState或hashchange事件），可以添加以下代码
    window.addEventListener('popstate', setNavHighlight);
    window.addEventListener('hashchange', setNavHighlight);
  });