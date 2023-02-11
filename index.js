marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

const initialState = `

This is a paragraph

**This is bolded text**

# Heading
## Heading 2

> Block Quote!

- list item 1
- list item 2
- list item 3

[Visit my Website](maresk.com.mx)

This is an inline \`<div></div>\`

This is a block of code
\`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
\`\`\`

![React](https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fn%2F548467d8-c5f1-4551-9f58-6817a8d2c45e%2FNationalGeographic_2572187_square.jpg&imgrefurl=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&tbnid=eAP244UcF5wdYM&vet=12ahUKEwi82bO85oz9AhUZyMkDHUbPBf8QMygAegUIARDdAQ..i&docid=K6Qd9XWnQFQCoM&w=3072&h=3072&q=cat&ved=2ahUKEwi82bO85oz9AhUZyMkDHUbPBf8QMygAegUIARDdAQ) 
`;


function App() {

    const [text, setText] = React.useState(initialState);
     
    return  (
        <div className="text-center px-4">
        <h1 className="p-4">Markdown Preview</h1>
        <textarea 
        name="text"
        id="editor"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea">          
        </textarea>
        <h3 className="mt-3">Output</h3>
        <Preview markdown={text} />
    </div>
    );

   
    
}

function Preview({ markdown }) {
    return (
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer }),
        }}
        id="preview"
        ></div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));