function extendPrototype(classToExtend) {
    let classPrototype = classToExtend.prototype;
    classPrototype.species = 'Human';
    classPrototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}