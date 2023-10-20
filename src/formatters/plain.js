const plain = (value) => {
  const iter = (curentVal) => {
    const result = value.map(({key, oldValue, newValue, status, children,}) => {
        if (status === 'nested') {
            console.log(`Property '${key}.${children}'`) ;
          }
    })
  };  
  return iter(value);  
};

export default plain;