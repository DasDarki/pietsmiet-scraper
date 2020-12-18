import {Video} from "./Video";
import {Stream} from "./Stream";

/**
 * The model which defines the schema of the upload plan. It offers
 * accessiblity to the meta data of the upload plan as well as the upcoming
 * videos and streams.
 */
export class UploadPlan {

    /**
     * The date, when the upload plan was published.
     */
    public readonly date: string;

    /**
     * An array containing all video releases of this upload plan.
     */
    public readonly videos: Video[];

    /**
     * An array containing all streams of today.
     */
    public readonly streams: Stream[];

    constructor(date: string, videos: Video[], streams: Stream[]) {
        this.date = date;
        this.videos = videos;
        this.streams = streams;
    }
}