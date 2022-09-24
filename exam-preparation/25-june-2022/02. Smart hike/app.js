class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (!Object.keys(this.goals).includes(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!Object.keys(this.goals).includes(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        } else if ((this.resources - time * 10) < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= time * 10;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (criteria == 'easy' || criteria == 'hard') {
            let allHikes = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria
            );
            let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes[0];

            if (!bestHike) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;

        } else if (criteria == 'all') {
            let result = 'All hiking records:';
            this.listOfHikes.forEach(x => {
                result += `\n${this.username} hiked ${x.peak} for ${x.time} hours`;
            });

            return result;
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925)); // You have successfully added a new goal - Musala
// console.log(user.addGoal('Rui', 1706)); // You have successfully added a new goal - Rui
// console.log(user.addGoal('Musala', 2925)); // Musala has already been added to your goals


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925)); // You have successfully added a new goal - Musala
// console.log(user.addGoal('Rui', 1706)); // You have successfully added a new goal - Rui
// console.log(user.hike('Musala', 8, 'hard')); // You hiked Musala peak for 8 hours and you have 20% resources left
// console.log(user.hike('Rui', 3, 'easy')); // You don't have enough resources to complete the hike
// console.log(user.hike('Everest', 12, 'hard')); // Error: Everest is not in your current goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925)); // You have successfully added a new goal - Musala
// console.log(user.hike('Musala', 8, 'hard')); // You hiked Musala peak for 8 hours and you have 20% resources left
// console.log(user.rest(4)); // You have rested for 4 hours and gained 40% resources
// console.log(user.rest(5)); // Your resources are fully recharged. Time for hiking!

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all')); // Vili has not done any hiking yet

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy')); // Vili has not done any easy hiking yet
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard')); // Vili's best hard hike is Musala peak, for 8 hours
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));
// // All hiking records:
// // Vili hiked Musala for 8 hours