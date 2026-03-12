import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  /*
  Esercizio
  - Milestone 1
  Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

  - Milestone 2
  Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog.
  Al submit del form, mostrare la lista degli articoli aggiornati.

  BONUS
  Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
  Implementare la funzionalità di modifica del titolo di un post.
  Impostare il lavoro su più componenti.
  */
  const articles = ['Article 1', 'Article 2', 'Article 3', 'Article 4']

  const [newArticle, setNewArticle] = useState('')
  const [updateArticles, setUpdateArticles] = useState(articles)
  const [message, setMessage] = useState('Enter the title')

  const [classMessage, setClassMessage] = useState('')


  function handleInput(e) {


    setNewArticle(e.target.value)

  }

  function handleSubmit(e) {

    e.preventDefault()

    if (newArticle.length > 0) {

      setUpdateArticles([newArticle, ...updateArticles])

    }
    else {
      setMessage('Add the title of the new article')
      setClassMessage('text-danger')
    }

    setNewArticle('')

  }



  return (
    <div className="container py-5">

      <div className="mb-5">
        <div className="row row-cols-4 g-3">
          {

            updateArticles.map((article, index) => (
              <div key={index}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="h4">{article}</h2>
                  </div>
                </div>
              </div>
            ))

          }

        </div>
      </div>

      <div className="p-4 bg-light rounded-2">
        <h2 className="h4">Add new article</h2>
        <form onSubmit={handleSubmit}>
          <div className="row gx-2">
            <div className="col">
              <input className="form-control" type="text" value={newArticle} onChange={handleInput} />
              {
                <small className={classMessage}>{message}</small>
              }
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>


    </div>
  )
}

export default App
