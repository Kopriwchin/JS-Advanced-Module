function solve(obj) {
    let newObj = {};

    if (obj['dizziness'] == false) {
        return obj;
    }

    let requiredAmount = 0.1 * obj['weight'] * obj['experience'];
    obj['levelOfHydrated'] += requiredAmount;
    obj['dizziness'] = false;

    return obj;
}

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});

solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});

solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});