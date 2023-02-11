import { validate } from "./validator"

test('expect cpf to be valid', () => {
    const isValidCpf = validate('169.717.400-09');
    expect(isValidCpf).toBeTruthy();
})

test('expect cpf to be invalid with wrong digit', () => {
    const isValidCpf = validate('169.717.400-10');
    expect(isValidCpf).toBeFalsy();
})

test('expect cpf to be invalid with invalid lenght', () => {
    const isValidCpf = validate('169.717.400-1');
    expect(isValidCpf).toBeFalsy();
})