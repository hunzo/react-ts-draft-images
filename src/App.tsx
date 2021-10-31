import { convertToRaw, Editor } from 'draft-js'
import React from 'react'
import './App.css'
import { myBlockRenderer } from './BlockRenderer'
import { useEditor } from './editorContext'
import UploadFile from './UploadFiles'

export const Toolbar: React.FC = () => {
    return (
        <div className="toolbar">
            <UploadFile />
        </div>
    )
}

function App() {
    const { editorState, setEditorState } = useEditor()

    return (
        <div className="App">
            <Toolbar />

            <div className="editor">
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    blockRendererFn={myBlockRenderer}
                />
            </div>

            <pre className="preview">
                {JSON.stringify(
                    convertToRaw(editorState.getCurrentContent()).entityMap,
                    null,
                    2
                )}
            </pre>
        </div>
    )
}

export default App
