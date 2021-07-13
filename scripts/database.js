const database = {
    fish: [
        {
            species: "Snapper",
            length: 12,
            name: "Gil",
            location: "Goose Island",
            food: "Light Snacks",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

