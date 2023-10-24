//Problem statement - 8
/**
 * Write a function that generates and prints a multiplication table for a given number up to specified range;
 * Input: 2 Positive Numbers
 * --Table of 
 * --Tabel till
 * Return: Nothing 
 */

function tableGenerat(tableOf, tableTill){
    for(let i = 1; i <= tableTill; i++){
        console.log(`${tableOf} X ${i} = ${tableOf * i}`);
    }
}

function tableGenerat2(tableOf, tableTill){
    let tableOfsum = 0
    for(let i = 1; i <= tableTill; i++){
        tableOfsum += tableOf
        console.log(`${tableOf} X ${i} = ${tableOfsum}`);
    }
}

function tableGenerat3(tableOf, tableTill){
    let num = 1
    if (typeof tableOf !== 'number' || typeof tableTill !== 'number' ||
    tableOf < 1 || tableTill < 1 ||
    !Number.isInteger(tableOf) || !Number.isInteger(tableTill)) {
    throw new Error('Both tableOf and tableTill should be positive integers.');
    }
    for(let i = tableOf; i <= tableOf * tableTill; i += tableOf){
        console.log(`${tableOf} X ${num++} = ${i}`);
    }
}


// tableGenerat(2,10)
// tableGenerat(2,5)
tableGenerat3(2,-10)