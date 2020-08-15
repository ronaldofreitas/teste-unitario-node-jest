const alunos = require('./alunos')
describe('Notas dos alunos', () => {
    it('deve retornar 10 quando as notas forem 5,3 e 2', () => {
        const notas = [5,3,2]
        expect(alunos.soma(notas)).toEqual(10);
    });

    it('deve retornar zero quando uma das notas for zero ', () => {
        const notas = [1,2,3,0]
        expect(alunos.soma(notas)).toEqual(0);
    });

    it('deve dobrar a nota quando o aluno tiver mais de cinco notas  ', () => {
        const notas = [1,2,3,4,5,6,7]
        expect(alunos.soma(notas)).toEqual(56)
    });

    test('deve dobrar a nota quando for maior que 9', () => {
        const notas = [10,5,3]
        expect(alunos.soma(notas)).toBe(28);
    });
});
