const rollDice = async()=>{
    const sides = 6;
    const rolledNum = Math.floor(Math.random() * sides) + 1;
    console.log(rolledNum);
    return rolledNum;
};

module.exports = rollDice;