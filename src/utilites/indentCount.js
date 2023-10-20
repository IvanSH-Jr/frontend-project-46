const indentCount = (depth = 1, replacer = '.', spacesCount = 4) => {
  const indentSize = (depth * spacesCount);
  const currentIndent = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);
  return [currentIndent, bracketIndent];
};

export default indentCount;
