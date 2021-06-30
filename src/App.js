import './App.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function App() {
  return (
    <div className="App">
      <h1>영화 리뷰</h1>
      <div className='movie-container'>
        <h2>제목</h2>
        <div>
          내용
        </div>
      </div>

      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='제목'/>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor5</p>"
          onReady={editor=>{
            console.log('editor is ready to use', editor);
          }}
          onChange={(event,editor)=>{
            const data=editor.getData();
            console.log({event, editor, data});
          }}
          onBlur={(event, editor)=>{
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor)=>{
            console.log('Focus.',editor);
          }}
          />
      </div>
      <button className="submit-button">입력</button>
    </div>
  );
}

export default App;
