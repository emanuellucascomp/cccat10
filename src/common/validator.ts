export function validate(cpf: string) {
	if (!cpf) return false;
    cpf = removeSpecialCharacters(cpf);  
    if (cpf.length != 11) return false;
    if (hasEqualDigits(cpf)) return false;
    try {  
        let d1, d2 = 0;  
        let dg1, dg2, rest = 0;  
        let digito;  
        let nDigResult;  
        d1 = d2 = 0;  
        dg1 = dg2 = rest = 0;                  
        for (let nCount = 1; nCount < cpf.length -1; nCount++) {
            digito = parseInt(cpf.substring(nCount -1, nCount));  							
            d1 = d1 + ( 11 - nCount ) * digito;  
            d2 = d2 + ( 12 - nCount ) * digito;  
        };                   
        rest = (d1 % 11);  
        dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
        d2 += 2 * dg1;  
        rest = (d2 % 11);  
        if (rest < 2)  
            dg2 = 0;  
        else  
            dg2 = 11 - rest;  
        let nDigVerific = cpf.substring(cpf.length-2, cpf.length);  
        nDigResult = "" + dg1 + "" + dg2;  
        return nDigVerific == nDigResult;
    } catch (e){  
        console.error("Erro !" + e);  
        return false;  
    }  
}

function removeSpecialCharacters(cpf: string): string {
    return cpf.replace('.','').replace('.','').replace('-','').replace(" ","");  
}

function hasEqualDigits(cpf: string): boolean {
    return cpf.split("").every(c => c === cpf[0])
}