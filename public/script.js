const refeicao = document.querySelectorAll('.refeicao')

refeicao.forEach(e => {
  e.addEventListener('click', function() {
    event.preventDefault()
    window.location.href = `/recipes/${e.id}`    
  })
})
