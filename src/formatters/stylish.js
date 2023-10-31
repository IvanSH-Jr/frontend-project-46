const indentCount = (depth = 1, replacer = ' ', spacesCount = 4) => {
  const indentSize = depth * spacesCount;
  const currentIndent = replacer.repeat(indentSize - 2);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);
  return [currentIndent, bracketIndent];
};

const stringify = (value, depth) => {
  const iter = (node, currentDepth) => {
    if (!(node instanceof Object)) return String(node);
    const [currentIndent, bracketIndent] = indentCount(currentDepth + 1);
    const lines = Object
      .entries(node)
      .map(([key, currentValue]) => `${currentIndent}  ${key}: ${iter(currentValue, currentDepth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, depth);
};

const stylish = (value) => {
  const iter = (currentValue, depth) => {
    const [currentIndent, bracketIndent] = indentCount(depth);
    const lines = currentValue
      .map(({
        key, oldValue, newValue, status, children,
      }) => {
        if (status === 'nested') {
          return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;
        }
        if (status === 'added') {
          return `${currentIndent}+ ${key}: ${stringify(newValue, depth)}`;
        }
        if (status === 'deleted') {
          return `${currentIndent}- ${key}: ${stringify(oldValue, depth)}`;
        }
        if (status === 'changed') {
          return `${currentIndent}- ${key}: ${stringify(oldValue, depth)}\n${currentIndent}+ ${key}: ${stringify(newValue, depth)}`;
        }
        return `${currentIndent}  ${key}: ${stringify(oldValue, depth)}`;
      });

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, 1);
};

export default stylish;
