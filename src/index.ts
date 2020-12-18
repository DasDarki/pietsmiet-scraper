import {PSScraper} from "./PSScraper";
import {UploadPlan} from "./model/UploadPlan";

(async () => {
    let plan: UploadPlan = await PSScraper.uploadPlan();
    console.log(plan);
})();