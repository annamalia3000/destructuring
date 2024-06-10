export function extractSpecialAttacks({ gamer = [] }) {
    return gamer.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        icon,
        description,
    }));
}
