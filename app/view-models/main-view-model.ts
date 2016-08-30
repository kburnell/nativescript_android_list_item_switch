
import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array";
import { ThingModel } from "../models/thing";

export class MainViewModel extends Observable {

    private _things: ObservableArray<ThingModel>;

    constructor() {
        super();
        this.fillThings();
    }

    get things(): ObservableArray<ThingModel> {
        return this._things;
    }

    private fillThings() {
        this._things = new ObservableArray<ThingModel>();
        this._things.push(new ThingModel(1, "Thing1", true));
        this._things.push(new ThingModel(2, "Thing2", false));
    }

}
