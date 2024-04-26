let counter = 42;

function gensym (basename) {
    let n = counter;
    counter += 1;
    return `${basename}_${n}`;
}

function rewrite (name, code) {
    return `function ${counter = 100 , gensym (name)} (x, y) { ${code} }`;
}

console.log (rewrite ("f", "return x + y;"));

