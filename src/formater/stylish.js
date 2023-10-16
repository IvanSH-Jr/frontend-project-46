const stylish = (value, replacer = ' ', spacesCount = 4) => {
    //console.log(value)
    const iter = (currentValue, depth) => {
        //if (!(currentValue instanceof Object)) return `${currentValue}`;
        //console.log(replacer)
        const indentSize = (depth * spacesCount) - 2;
        const currentIndent = replacer.repeat(indentSize);
        const bracketIndent = replacer.repeat(indentSize - spacesCount + 2);
        const lines = currentValue
            .map(({
                key, oldValue, newValue, status, children,
            }) => {
                //console.log(status)
                if (status === 'nested') {
                    return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;
                }
                if (status === 'added') {
                    return `${currentIndent}+ ${key}: ${newValue}`;
                  } if (status === 'deleted') {
                    return `${currentIndent}- ${key}: ${oldValue}`;
                  } if (status === 'changed') {
                    return `${currentIndent}- ${key}: ${oldValue}\n${currentIndent}+ ${key}: ${newValue}`;
                  }
                  return `${currentIndent}  ${key}: ${oldValue}`
            } );

        return [
            '{',
            ...lines,
            `${bracketIndent}}`,
          ].join('\n');
    };

    return iter(value, 1);
};

export default  stylish;
