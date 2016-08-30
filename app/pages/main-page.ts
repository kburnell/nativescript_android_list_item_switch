import { EventData } from "data/observable";
import { Page } from "ui/page";
import { MainViewModel } from "../view-models/main-view-model";
import { ThingModel } from "../models/thing";

import app = require("application");
import dialogs = require("ui/dialogs");
import platform = require("platform");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function onLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    let viewModel = new MainViewModel();
    page.bindingContext = viewModel;
}

export function thingListItemTap(args: any) {
    let thing = <ThingModel>args.view.bindingContext;
    dialogs.alert("You clicked: " + thing.name);
}

export function thingSwitchLoaded(args: any) {
    // This is only an issue in Android
    if (app.android) {
        let thingSwitch = args.object;
        thingSwitch.android.setFocusable(false);
    }
}
