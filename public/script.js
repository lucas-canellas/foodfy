const refeicao = document.querySelectorAll('.refeicao')

refeicao.forEach(e => {
  e.addEventListener('click', function () {

    window.location.href = `/recipes/${e.id}`

  })
})

const ingredientes = document.querySelector(".mostrar-ingrediente")
const preparo = document.querySelector(".mostrar-preparo")
const info = document.querySelector(".mostrar-info")

const mostrar = document.querySelectorAll(".mostrar-txt")


mostrar.forEach(e => {

  if (e.id == 'ingredientes') {

    e.addEventListener('click', function () {
      event.preventDefault()
      ingredientes.classList.toggle('ativo')
      if (e.innerHTML == 'esconder') {
        e.innerHTML = 'mostrar'
      } else if (e.innerHTML == 'mostrar') {
        e.innerHTML = 'esconder'
      }


    })
  } else if (e.id == 'preparo') {
    e.addEventListener('click', function () {
      event.preventDefault()
      preparo.classList.toggle('ativo')
      if (e.innerHTML == 'esconder') {
        e.innerHTML = 'mostrar'
      } else if (e.innerHTML == 'mostrar') {
        e.innerHTML = 'esconder'
      }


    })
  } else if (e.id == 'infos') {
    e.addEventListener('click', function () {
      event.preventDefault()
      info.classList.toggle('ativo')
      if (e.innerHTML == 'esconder') {
        e.innerHTML = 'mostrar'
      } else if (e.innerHTML == 'mostrar') {
        e.innerHTML = 'esconder'
      }


    })
  }

})

// admin

const cardAdmin = document.querySelectorAll(".card-admin a")

cardAdmin.forEach(card => {
  card.addEventListener('click', function(event) {
        
    window.location.href = `/admin/recipes/${card.id}`
  })
})

const buttonEdit = document.querySelector(".titulo-button button")

buttonEdit.addEventListener('click', function() {
  console.log(buttonEdit.id);
  const id = buttonEdit.id

  window.location.href = `/admin/recipes/${id}/edit`  
  
})



