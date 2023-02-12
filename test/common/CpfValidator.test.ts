import CpfValidator from "../../src/common/CpfValidator"

let cpfValidator: CpfValidator

test.each([
    '407.302.170-27',
    '684.053.160-00',
    '746.971.314-01'
])('expect cpf to be valid', (cpf) => {
    cpfValidator = new CpfValidator(cpf)
    const isValidCpf = cpfValidator.validate();
    expect(isValidCpf).toBeTruthy();
})

test('expect cpf to be invalid with wrong digit', () => {
    cpfValidator = new CpfValidator('169.717.400-10')
    const isValidCpf = cpfValidator.validate();
    expect(isValidCpf).toBeFalsy();
})

test('expect cpf to be invalid with invalid lenght', () => {
    expect(() => cpfValidator = new CpfValidator('169.717.400-1')).toThrow(new Error('CPF has invalid length'))
})

test('expect cpf to be invalid with equal digits', () => {
    expect(() => cpfValidator = new CpfValidator('111.111.111-11')).toThrow(new Error('Invalid CPF'))
})