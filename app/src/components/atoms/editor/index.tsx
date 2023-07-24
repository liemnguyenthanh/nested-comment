import React, { LegacyRef, useRef } from 'react'
import { Editor as EditorDraftJs, EditorState, convertToRaw } from 'draft-js';
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";

type Props = {
  onSubmit?: (value: string) => void
}

export const Editor: React.FC<Props> = ({ onSubmit }) => {
  const editRef = useRef<any>()
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const focusEditor = () => {
    if (editRef.current) {
      editRef.current.focus();
    }
  }

  React.useEffect(() => {
    focusEditor()
  }, []);

  const handleSubmit = () => {
    const data = editorState.getCurrentContent();
    const content = stateToHTML(data)
    
    onSubmit && onSubmit(content)
  }

  return (
    <div className="rounded-md border p-2">
      <div className="p-2">
        <EditorDraftJs
          ref={editRef}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </div>
      <div className="bg-[#F8F8F8] rounded-sm p-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <i>i</i>
          <b>B</b>
        </div>

        <div className="">
          <button className="rounded-[5px] disabled:bg-gray-500 bg-blue-500 px-4 text-[14px] py-1 text-white" onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  )
}