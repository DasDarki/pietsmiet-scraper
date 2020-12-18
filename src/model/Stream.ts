/**
 * The model represents a stream which will start at a specific time.
 */
export class Stream {

    /**
     * The starting time of the stream.
     */
    public readonly time: string;

    /**
     * The subject/title of the stream.
     */
    public readonly subject: string;

    constructor(time: string, subject: string) {
        this.time = time;
        this.subject = subject;
    }
}