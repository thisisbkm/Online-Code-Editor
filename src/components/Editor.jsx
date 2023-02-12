import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/nord.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/trailingspace'
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/html-hint.js'


import { Controlled as ControlledEditor } from 'react-codemirror2';


function Editor({displayName, language, value, onChange, theme}) {
    const handleChange = (editor, data, value)=>{
        onChange(value);
    }
  return (
    <div className='editor-container'>
        <div className="editor-title">
            {displayName}
        </div>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                linewrapping:"true",
                lint:true,
                mode:language,
                theme:theme,
                lineNumbers: true,
                autoCloseBrackets:true,
                autoCloseTags:true,
                matchBrackets: true,
                matchTags: true,
                showTrailingSpace: true,
                extraKeys: {
                    "Tab": "autocomplete"
                }
            }}
            
        />
    </div>
  )
}
export default Editor;