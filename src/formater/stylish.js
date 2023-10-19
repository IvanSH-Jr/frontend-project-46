import stringify from '../utilites/stringify.js';
import indentCount from '../utilites/indentCount.js';

const stylish = (value, replacer = ' ', spacesCount = 4) => {
    const iter = (currentValue, depth) => {
        const [ currentIndent, bracketIndent ] = indentCount(depth, replacer, spacesCount);
        const lines = currentValue
            .map(({
                key, oldValue, newValue, status, children,
            }) => {
                if (status === 'nested') {
                  return `${currentIndent} ${key}: ${iter(children, depth + 1)}`;
                }
                if (status === 'added') {
                  return `${currentIndent}+${key}: ${stringify(newValue, depth)}`;
                }
                if (status === 'deleted') {
                  return `${currentIndent}-${key}: ${stringify(oldValue, depth)}`;
                }
                if (status === 'changed') {
                  return `${currentIndent}-${key}: ${stringify(oldValue, depth)}\n${currentIndent}+${key}: ${stringify(newValue, depth)}`;
                }
                return `${currentIndent} ${key}: ${stringify(oldValue, depth)}`
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
