export default class CpfValidator {
    cpf: string;

    constructor(cpf: string){
        cpf = this.removeSpecialCharacters(cpf)
        if(this.hasEqualDigits(cpf)) throw new Error('Invalid CPF')
        if(this.hasValidLength(cpf)) throw new Error('CPF has invalid length')
        this.cpf = cpf;
    }

    public validate(): boolean{
        if (!this.cpf) return false
        let d1 = 0 
        let d2 = 0 
        for (let nCount = 1; nCount < this.cpf.length -1; nCount++) {
            const digito = parseInt(this.cpf.substring(nCount -1, nCount));  							
            d1 = d1 + ( 11 - nCount ) * digito 
            d2 = d2 + ( 12 - nCount ) * digito 
        };                   
        let rest = (d1 % 11)
        const dg1 = (rest < 2) ? 0 : 11 - rest
        d2 += 2 * dg1 
        rest = (d2 % 11) 
        const dg2 = (rest < 2) ? 0 : 11 - rest 
        const nDigVerific = this.cpf.substring(this.cpf.length-2, this.cpf.length)  
        const nDigResult = `${dg1}${dg2}`  
        return nDigVerific == nDigResult
    }

    private removeSpecialCharacters(cpf: string): string {
        return cpf.replace('.','').replace('.','').replace('-','').replace(" ","")  
    }
    
    private hasEqualDigits(cpf: string): boolean {
        return cpf.split("").every(c => c === cpf[0])
    }
    
    private hasValidLength(cpf: string): boolean {
        return cpf.length != 11
    }
}