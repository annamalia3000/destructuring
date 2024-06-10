import { extractSpecialAttacks } from '../code.js';

test.each([
    [
        'should return an array with attacks including descriptions when provided',
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            gamer: [
                { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
                { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' }
            ]
        },
        [
            { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
            { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно' }
        ]
    ],
    [
        'should return an empty array if gamer is missing',
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10
        },
        []
    ],
    [
        'should return an empty array if gamer is empty',
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            gamer: []
        },
        []
    ],
])('%s', (_, obj, expected) => {
    expect(extractSpecialAttacks(obj)).toEqual(expected);
});
