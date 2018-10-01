function mountLoadingScreen() {
    $('#root').html(LoadingScreen());
  
    setTimeout(() => {
      session();
    }, 2000);
  }
  
  function LoadingScreen() {
    let container = document.createElement('div');
  
    container.id = 'loading-screen';
    container.classList.add('loading-screen');
    container.innerHTML = `
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `;
  
    return container;
  }