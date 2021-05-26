export class Set {
    constructor(inputValues) {
        this._values = {};
        inputValues && inputValues.map && inputValues.map(value => {
            if (!this.has(value)) {
                this._values[JSON.stringify(value)] = value;
            }
        });
    }

    has(inputValue) {
       return this._values.hasOwnProperty(JSON.stringify(inputValue))
    }

    add(inputValue) {
        if (!inputValue || this.has(inputValue)) {
            return false;
        }

        this._values[JSON.stringify(inputValue)] = inputValue;
        
        return true;
    }

    values() {
        return Object.values(this._values);
    }

    size() {
        return Object.keys(this._values).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    remove(inputValue) {
        if (this.has(inputValue)) {
            delete this._values(JSON.stringify(inputValue));
            return true;
        }

        return false;
    }

    clear() {
        this._values = {};
    }
}