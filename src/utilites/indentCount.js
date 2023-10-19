const indentCount = (depth = 1, replacer = ' ', spacesCount = 4) => {
    const indentSize = (depth * spacesCount) - 2;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount + 2);
    return [currentIndent, bracketIndent];
};

export default indentCount;
