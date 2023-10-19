import indentCount from './indentCount.js';

const stringify = (value, depth) => {
  const iter = (node, depth) => {
    if (!(node instanceof Object)) return String(node);
    const [ currentIndent, bracketIndent ] = indentCount(depth, '.', 4);
    const lines = Object
              .entries(node)
              .map(([key, value]) => {
                  return `${currentIndent} ${key}: ${iter(value, depth + 1)}`;
              });
    return [
          '{',
          ...lines,
          `${bracketIndent}}`,
          ].join('\n');;
  };

  return iter(value, depth);
};

export default stringify;
