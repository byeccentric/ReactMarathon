import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать аргумент в виде строки "покемон", на выходе "Покемон"', () => {
    expect(toCapitalizeFirstLetter('покемон')).toEqual('Покемон');
  });

  test('Должна принимать аргумент в виде строки "поКЕМОН", на выходе "Покемон"', () => {
    expect(toCapitalizeFirstLetter('поКЕМОН')).toEqual('Покемон');
  });

  test('Должна без аргумента возвращать пустую строку', () => {
    expect(toCapitalizeFirstLetter()).toEqual('');
  });

  test('Должна принимать аргумент в виде null и возвращать пустую строку', () => {
    expect(toCapitalizeFirstLetter(null)).toEqual('');
  });
});
