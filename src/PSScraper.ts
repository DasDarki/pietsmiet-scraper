import {UploadPlan} from "./model/UploadPlan";
import {SourceScrapper} from "./utils/SourceScrapper";
import {JSDOM} from 'jsdom'
import {Video} from "./model/Video";
import {Stream} from "./model/Stream";

export class PSScraper {

    /**
     * Scrappes the latest upload plan of PietSmiet.
     */
    public static async uploadPlan(): Promise<UploadPlan> {
        let source: string = await SourceScrapper.grab("https://www.pietsmiet.de/uploadplan");
        const {window} = new JSDOM(source);
        let document: Document = window.document;
        let date: string = document.querySelector('h1')?.innerHTML.replace('Upload-Plan am', '').trim() ?? "";
        if (date.includes("undefined"))
            date = date.replace("undefined", "").trim();
        let dateParts: string[] = date.split('am');
        date = dateParts.length > 1 ? dateParts[1].trim() : date;
        let videoBox: Element = document.querySelectorAll('.mb-12')[0];
        let videos: Video[] = [];
        for (let i = 1; i < videoBox.children.length; i++) {
            let videoDiv: Element = videoBox.children[i].children[0];
            let subject: string = videoDiv.children[1].innerHTML.trim();
            let times: Element = videoDiv.children[0];
            let yt: Element = times.children[1];
            yt.removeChild(yt.children[0]);
            let ytTime: string = yt.innerHTML.trim();
            times.removeChild(times.children[1]);
            times.removeChild(times.children[0]);
            let psTime: string = times.innerHTML.trim();
            videos.push(new Video(psTime, ytTime, subject));
        }

        let streamBox = document.querySelectorAll('.mb-12')[1];
        let streams: Stream[] = [];
        for (let i = 1; i < streamBox.children.length; i++) {
            let streamDiv: Element = streamBox.children[i].children[0];
            streamDiv.children[0].removeChild(streamDiv.children[0].children[0]);
            let time: string = streamDiv.children[0].innerHTML.trim();
            let subject: string = streamDiv.children[1].innerHTML.trim();
            streams.push(new Stream(time, subject));
        }
        return new UploadPlan(date, videos, streams);
    }
}