// 获取所有页面链接元素
const pageLinks = document.querySelectorAll(".page-link");

// 循环给每个链接添加点击事件监听器
pageLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认的跳转行为，以便我们自定义

    // 给当前页面添加淡入淡出类来实现过渡效果
    document.body.classList.add("fade-out");

    // 设置一个短暂的延迟（这里是过渡效果时间）后再进行实际跳转
    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});
