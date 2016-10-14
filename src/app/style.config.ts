import {Injectable} from "@angular/core";

const FIXED_ARTIFACTS_TOP = 87;

@Injectable()
export class StyleConfig {
  public get fixedArtifactsTop(): number { return FIXED_ARTIFACTS_TOP }
}