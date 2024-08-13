document.addEventListener('pjax:complete', function () {
    if (typeof APlayer !== 'undefined') {
      // 确保播放器在 Pjax 完成后继续工作
      const aplayers = document.querySelectorAll('.aplayer');
      aplayers.forEach(function (aplayer) {
        new APlayer({
          element: aplayer,
          // 其他播放器的配置
        });
      });
    }
  });
  