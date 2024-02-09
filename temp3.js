console.log(
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((acc, item, index) => {
    console.log(item);
    const flatten = acc.concat(item);

    // acc[index] = flatten;
    return flatten;
  }, [])
);
