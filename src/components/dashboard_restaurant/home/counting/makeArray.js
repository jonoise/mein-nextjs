const nameMap = {
    menus: 'Menus',
    tables: "Mesas",
    dishes: "Platillos & Bebidas",
    orders: "Órdenes",
    total_last_month: "Total Último Mes",
    total_last_week: "Total Última Semana"
}

const colorMap = {
    menus: 'blue.200',
    tables: "teal.200",
    dishes: "green.200",
    orders: "cyan.200",
    total_last_month: "yellow.200",
    total_last_week: "purple.200"
}


export const makeArray = (countingObj) => {
    const array = []
    let fakeid = 0
    for (let key in countingObj) {
        fakeid++
        array.push({
            id: fakeid,
            name: nameMap[key],
            color: colorMap[key],
            value: countingObj[key],
        })
    }
    return array
}