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
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        // if (criteria == 'hard') {
            
        //     return `${this.username}'s best ${criteria} hike is ${_} peak, for ${_} hours`;
        // } else if (criteria == 'easy') {

        // } else {

        // }
    }
}