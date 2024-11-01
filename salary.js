function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        return grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        return grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        return grossSalary * 0.325;
    } else {
        return grossSalary * 0.35;
    }
}

function calculateNHIF(grossPay) {
    let deduction;
    if (grossPay <= 5999) {
        deduction = 150;
    } else if (grossPay <= 7999) {
        deduction = 300;
    } else if (grossPay <= 11999) {
        deduction = 400;
    } else if (grossPay <= 14999) {
        deduction = 500;
    } else if (grossPay <= 19999) {
        deduction = 600;
    } else if (grossPay <= 24999) {
        deduction = 750;
    } else if (grossPay <= 29999) {
        deduction = 850;
    } else if (grossPay <= 34999) {
        deduction = 900;
    } else if (grossPay <= 39999) {
        deduction = 950;
    } else if (grossPay <= 44999) {
        deduction = 1000;
    } else if (grossPay <= 49999) {
        deduction = 1100;
    } else if (grossPay <= 59999) {
        deduction = 1200;
    } else if (grossPay <= 69999) {
        deduction = 1300;
    } else if (grossPay <= 79999) {
        deduction = 1400;
    } else if (grossPay <= 89999) {
        deduction = 1500;
    } else if (grossPay <= 99999) {
        deduction = 1600;
    } else {
        deduction = 1700;
    }
    return deduction;
}

function calculateNSSF(grossSalary) {
    return grossSalary * 0.06;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);

    const netSalary = grossSalary - (paye + nhif + nssf);

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your basic salary and benefits separated by a space: ", (input) => {
    const [basicSalaryInput, benefitsInput] = input.split(' ');
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput) || 0;

    const { grossSalary, paye, nhif, nssf, netSalary } = calculateNetSalary(basicSalary, benefits);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
    console.log(`PAYE Deduction: ${paye}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`NHIF Deduction: ${nhif}`);

    rl.close();
});
