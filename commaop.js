let counter = 1;

function bump_counter () {
    counter += 1;
}

function gensym (basename) {
    let n = counter;
    bump_counter ();
    return `${basename}_${n}`;
}

function rewrite (name, code) {
    return `function ${bump_counter () , gensym (name)} (x, y) { ${code} }`;
}

console.log (rewrite ("f", "return x + y;"));

