see [embedding code snippets in new syntax](https://guitarvydas.github.io/2024/04/26/Embedding-Code-Snippets-in-New-Syntaxes.html)

tests:
‛function ${name} (x, y) { ${code} }’
‛function ${gensym (name)} (x, y) { ${code} }’
‛function ${counter = 100 , gensym (name)} (x, y) { ${code} }’
