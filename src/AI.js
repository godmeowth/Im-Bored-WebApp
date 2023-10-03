const getRandomMove = (board) => {
    const emptySquares = board.reduce((acc, curr, index) => {
        if (curr === null) {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
};

export default getRandomMove;
