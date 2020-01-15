/** @type {HTMLTextAreaElement} */
const codeEl = document.querySelector(".code");
let sourceCode = "";

codeEl.addEventListener('keyup', e => {
    const s = codeEl.value;
    if (s != sourceCode) {
        sourceCode = s;
        sourceCodeChanged();
    }
});

function sourceCodeChanged() {
    const res = parseSourceCode();
    document.querySelector(".output").innerText = JSON.stringify(res, null, 4);
}

function parseSourceCode() {
    const compNameRe = /export\s+class\s+(\w+)\s+extends\s+ecs\.Component/;
    const fieldRe = /this\.(\w+)\s+=\s+([^;])+;/;
    const result = {};
    let compName = '';
    let line = 0;
    for(let l of sourceCode.split("\n")) {
        line++;
        let m = l.match(compNameRe);
        if (m) {
            compName = m[1];
            result[compName] = [];
        }
        m = l.match(fieldRe);
        if (m) {
            result[compName].push({
                name: m[1],
                value: m[2],
                line,
            });
        }
    }
    return result;
}
