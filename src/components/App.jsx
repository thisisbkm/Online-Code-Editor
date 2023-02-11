import React, { useEffect, useState } from 'react'
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';
function App() {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css","");
    const [js, setJs] = useLocalStorage("js","");
    const [srcDoc, setSrcDoc] = useState("");
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrcDoc(
                `<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
                </html>`
                )
        }, 200);
        return ()=> clearTimeout(timeout);
    }, [html, css, js]);
    const [theme, setTheme] = useState("");
    useEffect(()=>{
        const prevSelected = localStorage.getItem("code-editor-theme");
        if(prevSelected!==null){
            setTheme(prevSelected);
            document.getElementById("themeSelector").value=prevSelected
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("code-editor-theme", theme)
    },[theme]);
  return (
    <>
    <div className="pane codePane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} theme = {theme}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} theme = {theme}/>
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs} theme = {theme}/>
    </div>
    <div className="optionMenu">
        <select name="" id="themeSelector" onChange={(e)=>setTheme(e.target.value)}>
            <option value="default" selected>default</option>
            <option value="monokai">monokai</option>
            <option value="nord">nord</option>
            <option value="material">material</option>
            <option value="material-darker">material-darker</option>
            <option value="dracula">dracula</option>
            <option value="eclipse">eclipse</option>
            <option value="material-ocean">material-ocean</option>
            <option value="midnight">midnight</option>
        </select>
    </div>
    <div className="pane outputPane">
        <iframe 
            srcDoc={srcDoc}
            title='Output'
            frameborder="0"
            sandbox='allow-scripts'
            width="100%"
            height="100%"
        />
    </div>
    </>
  )
}

export default App