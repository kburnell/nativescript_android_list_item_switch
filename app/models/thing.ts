import { Observable } from "data/observable";

export class ThingModel extends Observable {

    private _id: number;
    private _name: string;
    private _isActive: boolean;

    constructor(id: number, name: string, isActive: boolean) {
        super();
        this._id = id;
        this._name = name;
        this._isActive = isActive;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        if (this._id !== value) {
            this._id = value;
            this.notifyPropertyChange("id", value);
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange("name", value);
        }
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        if (this._isActive !== value) {
            this._isActive = value;
            this.notifyPropertyChange("isActive", value);
        }
    }
}
