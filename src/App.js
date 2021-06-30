import './App.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState} from 'react';


function App() {
  const [movieContent, setMovieContent]=useState({
    title:'',
    content:''
  })

  const getValue=(e)=>{
    const {name, value}=e.target;
    setMovieContent({
      ...movieContent,
      [name]:value,
    })
    console.log(movieContent);
  }

  const [viewContent, setViewContent]=useState([]);

  return (
    <div className="App">
      <h1>영화 리뷰</h1>
      <div className='movie-container'>
        {viewContent.map(content=>(
          <div key={content.title}>
            <h2>{content.title}</h2>
            <div>
              {content.content}
            </div>
          </div>
          )
        )}
      </div>

      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor5</p>"
          onReady={editor=>{
            console.log('editor is ready to use', editor);
          }}
          onChange={(event,editor)=>{
            const data=editor.getData();
            console.log({event, editor, data});
            setMovieContent({
              ...movieContent,
              content:data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor)=>{
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor)=>{
            console.log('Focus.',editor);
          }}
          />
      </div>
      <button
        className="submit-button"
        onClick={()=>{
        setViewContent(viewContent.concat({...movieContent}))}
        }
      >입력</button>
    </div>
  );
}

export default App;
