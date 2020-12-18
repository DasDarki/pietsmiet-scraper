/**
 * The model which represents a video upload of the PietSmiet.
 */
export class Video {

    /**
     * The time of the video, when it will be published on PietSmiet.de.
     */
    public readonly psTime: string;

    /**
     * The  time of the video, when it will be published on YouTube.
     */
    public readonly ytTime: string;

    /**
     * The subject/title of the video.
     */
    public readonly subject: string;

    constructor(psTime: string, ytTime: string, subject: string) {
        this.psTime = psTime;
        this.ytTime = ytTime;
        this.subject = subject;
    }
}