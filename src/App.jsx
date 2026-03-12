import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {

  const articles = ['Article 1', 'Article 2', 'Article 3', 'Article 4']

  const [newArticle, setNewArticle] = useState('')
  const [updateArticles, setUpdateArticles] = useState(articles)

  const [message, setMessage] = useState('Enter the title')
  const [classMessage, setClassMessage] = useState('')

  const [editIndex, setEditIndex] = useState(null)

  // input
  function handleInput(e) {

    setNewArticle(e.target.value)

  }

  // submit
  function handleSubmit(e) {

    e.preventDefault()

    if (newArticle.length > 0) {

      if (editIndex != null) {

        console.log(updateArticles[editIndex])
        updateArticles[editIndex] = newArticle

      }
      else {
        setUpdateArticles([...updateArticles, newArticle])
        setMessage('Enter the title')
        setClassMessage('')
      }

    }
    else {
      setMessage('Add the title of the new article')
      setClassMessage('text-danger')
    }

    setNewArticle('')
    setEditIndex(null)

  }

  // remove article
  function removeArticle(i) {

    const notRemovedArticles = updateArticles.filter((updateArticles, index) => index != i)
    setUpdateArticles(notRemovedArticles)
    setEditIndex(null)

  }

  // edit article
  function editArticle(i) {

    setEditIndex(i)

  }



  return (
    <div className="container py-5">

      <div className="mb-5">
        <div className="row row-cols-4 g-3">
          {

            updateArticles.map((article, index) => (
              <div key={index}>
                <div className={editIndex === index ? 'card border border-warning' : 'card'}>
                  <div className="card-body position-relative">
                    <h2 className="card-title h4">{article}</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <div className="m-1 position-absolute bottom-0 end-0">
                      <button className="btn btn-sm btn-secondary py-0 text-uppercase me-1" onClick={() => editArticle(index)}>Edit</button>
                      <button className="btn btn-sm btn-danger py-0 text-uppercase" onClick={() => removeArticle(index)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))

          }
        </div>
      </div>

      <div className={editIndex != null ? 'p-4 bg-light rounded-2 border border-warning' : 'p-4 bg-light rounded-2'}>
        <h2 className="h4">{editIndex != null ? 'Edit the article' : 'Add new article'}</h2>
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
