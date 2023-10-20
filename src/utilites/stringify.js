import indentCount from './indentCount.js';

const stringify = (value, depth) => {
  const iter = (node, currentDepth) => {
    if (!(node instanceof Object)) return String(node);
    const [currentIndent, bracketIndent] = indentCount(currentDepth + 1);
    const lines = Object
      .entries(node)
      .map(([key, currentValue]) => `${currentIndent} ${key}: ${iter(currentValue, currentDepth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, depth);
};

export default stringify;
