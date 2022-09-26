let requestConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}

fetch('http://localhost:8080/dentista', requestConfig)
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(dentistas => {
    for (let dentista of dentistas) {
      let listaDentistas = document.querySelector('.lista-dentistas')

      listaDentistas.innerHTML += `<li>${dentista.nomecompleto}</li>`
    }
  })

let formRef = document.querySelector('.novo-dentista')

formRef.addEventListener('submit', e => {
  let requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBcGkgT2RvbnRvQ2FyZSIsInN1YiI6ImFkbWluMSIsImlhdCI6MTY2NDIyMDExNSwiZXhwIjoxNjY0MjQ4OTE1fQ.YZvuJDmrwVIr9UYwzYuGm94om5P8LMSqx8p6AyXd_30'
  }

  let novoDentista = document.querySelector('#novoDentista')

  let dentista = {
    nome: novoDentista.value
  }

  let configuration = {
    method: 'POST',
    body: JSON.stringify(dentista),
    headers: requestHeaders
  }

  fetch('http://localhost:8080/dentista', configuration).then(response => {
    if (response.ok) {
      location.reload()
    }
  })
})
