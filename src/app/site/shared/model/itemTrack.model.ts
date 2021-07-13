import { MessageTrack } from "./messageTrack.model";

export class ItemTrack {
    id: number = -1;
    trackingId: string = "";
    date: string = "";
    localization: string = "";
    message: MessageTrack = new MessageTrack;
}