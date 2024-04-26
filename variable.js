function rewrite (name, code) {
    return `function ${name} (x, y) { ${code} }`;
}

console.log (rewrite ("f", "return x + y;"));

